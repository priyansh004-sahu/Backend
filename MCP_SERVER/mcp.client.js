import {config} from "dotenv";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import { GoogleGenAI, Type } from "@google/genai";
import { required } from "zod/v4-mini";

config();

// // Define the function declaration for the model
// const weatherFunctionDeclaration = {
//   name: 'get_current_temperature',
//   description: 'Gets the current temperature for a given location.',
//   parameters: {
//     type: Type.OBJECT,
//     properties: {
//       location: {
//         type: Type.STRING,
//         description: 'The city name, e.g. San Francisco',
//       },
//     },
//     required: ['location'],
//   },
// };

const tools = [];   // empty array

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY || "",
});



const transport = new StdioClientTransport({
    command: "node",
    args: ["./mcp.server.js"]
})

const client = new Client({
    name: "example-client",
    version: "1.0.0"
})

await client.connect(transport);        
 

client.listTools().then(async response => {        // change the tool format of mcp server to provide easily to gemini
  const tools = response.tools.map(tool => ({
    name: tool.name,
    description: tool.description,
    parameters: {
      type: "object",
      properties: tool.inputSchema.properties,
      required: tool.inputSchema.required || []
    }
  }));

  const aiResponse = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "Add 2 and 3",
    config: {
        tools: [
          { 
            functionDeclarations: tools 
          }],
    },
  });

  console.log("Gemini aiResponse", aiResponse.functionCalls);

  aiResponse.functionCalls.forEach(async call => {
    const toolResponse = await client.callTool({
      name: call.name,
      arguments: call.args
    })
    console.log("Tool Response:", toolResponse);
    
  })
});

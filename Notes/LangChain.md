# LangChain – An Overview

## 🔹 What is LangChain?
LangChain is an **open-source framework** designed to help developers build applications powered by **Large Language Models (LLMs)** such as GPT. Instead of writing raw prompts every time, LangChain provides a structured way to **connect LLMs with data sources, APIs, and workflows**.

It is widely used for building **chatbots, question-answering systems, intelligent agents, and AI-driven tools**.

---

## 🔹 Key Features
1. **Prompt Management**  
   - Helps create, reuse, and optimize prompts.  
   - Allows prompt chaining for complex workflows.  

2. **Chains**  
   - A sequence of calls (to LLMs, APIs, or functions).  
   - Example: user input → data retrieval → LLM response.  

3. **Memory**  
   - Stores conversation context so the AI can provide contextual answers.  
   - Useful for chatbots and assistants.  

4. **Agents**  
   - LLMs that decide which tools or functions to call dynamically.  
   - Example: an agent might query a database, fetch web data, or call an API before responding.  

5. **Integrations**  
   - Works with popular services like **OpenAI, Hugging Face, Pinecone, Weaviate, FAISS**, and databases.  

---

## 🔹 Why Use LangChain?
- Simplifies building **production-ready LLM apps**.  
- Reduces boilerplate code for prompt engineering.  
- Makes it easy to connect LLMs with **structured data** and external tools.  
- Provides modular components to scale applications.  

---

## 🔹 Example Use Cases
- **Chatbots & Virtual Assistants**  
- **Document Q&A Systems** (e.g., upload PDFs and ask questions)  
- **Code Assistants**  
- **Recommendation Engines**  
- **AI Agents for Task Automation**  

---

## 🔹 Simple Example
```python
from langchain.prompts import PromptTemplate
from langchain.llms import OpenAI
from langchain.chains import LLMChain

# Initialize model
llm = OpenAI()

# Define prompt
prompt = PromptTemplate.from_template("Translate '{text}' into Hindi.")

# Create chain
chain = LLMChain(llm=llm, prompt=prompt)

# Run
result = chain.run("Hello, how are you?")
print(result)

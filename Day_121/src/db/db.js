
const mongoose = require('mongoose');


// server database se kase connect hoga ye tum db.js file  me likhte ha

function connectToDB() {
   mongoose.connect("mongodb+srv://priyanshsahu157:siGOVsuCCz1ebkYY@cluster0.t9m7wwg.mongodb.net/cohort")
   .then(()=> {
     console.log("Connected to DB");
     
   })
}

module.exports = connectToDB
// Import the necessary npm library
const express = require('express');
const app = express();
const cors = require('cors')
require('dotenv').config();
const path = require("path")

app.use(cors())
// Port
const port = process.env.PORT || 500;

// Testing the default API Endpoint
app.get("/",(req,res)=>{
    res.json({msg:"Hello This is testing the api endpoint"})
})


// <---------| Use the API endpoint route in expressJS App |----------->

// 01) SQL Generator API Endpoint
app.use("/",require("./Routes/Sql"))
// 02) Grammar Correction API Endpoint
app.use("/",require("./Routes/CorrectGramar"))
// 03) Emoji Generator API Endpoint
app.use("/",require("./Routes/EmojiGenerator"))
// 04) SQL Python Bug Fixer API Endpoint
app.use("/",require("./Routes/PyrthonBugFix"))
// 05) SQL Translate Code API Endpoint
app.use("/",require("./Routes/TranslateCode"))


// Listening the localhost server at port 500
app.listen(port,()=>{
    console.log(`This app is runnning on port ${port}`);
})
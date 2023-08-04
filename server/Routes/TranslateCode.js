const express = require('express');
const router = express.Router();
const parser = require('body-parser')


// Api Key and configuration
const { Configuration, OpenAIApi } = require("openai");
const { parse } = require('dotenv');
const configuration = new Configuration({
    // Open AI API key 
    apiKey: `${process.env.OPEN_AI_KEY}`,
});
const openai = new OpenAIApi(configuration);

// Route:01 => "POST" Method => API endpoint for Translate the Code => URL : "http:localhost:500/translateCode"

router.post("/translateCode",parser.json(), async (req, res) => {
    //  Wrap the whole code in try catch to handle the expected error
    try {

        // Destructure the FLang,SLang,code from body
        // <----- Here FLang means "First language" and SLang means "Second Language" and code is simply code 
        const{Flang,Slang,code} = await req.body
        // console.log(Flang,Slang,code)

        // Pull the request for user input data and retrieve the data from API
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: `Translate this function from ${Flang} into ${Slang}\n### ${Flang}\n \n  ${code}  \n    \n### ${Slang}`}],
          });
        //   get the response of Open API and store it in variable
          const response = completion.data.choices[0].message;
        //   Simply send the respond 
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ error: error, msg: "We got some error in the server" })
    }

})


// Route:02 => "GET" Method => API endpoint for Translate the Code => URL : "http:localhost:500/translateCode"

router.get('/translateCode', (req, res) => {
    res.json({ msg: "Hello This is testing the api endpoint" })
})
// Export the router
module.exports = router
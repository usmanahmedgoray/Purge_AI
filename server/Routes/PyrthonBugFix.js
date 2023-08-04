const express = require('express');
const router = express.Router();
const parser = require('body-parser')


// Api Key and configuration
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    // Open AI API key 
    apiKey: `${process.env.OPEN_AI_KEY}`,
});
const openai = new OpenAIApi(configuration);

// Route:01 => "POST" Method => API endpoint for Fix the Bug => URL : "http:localhost:500/bugFixer"

router.post("/bugFixer", parser.json(),async (req, res) => {
    //  Wrap the whole code in try catch to handle the expected error
    try {
        // Destructure the code from body
        const {code} = req.body;

        // Pull the request for user input data and retrieve the data from API
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: `##### Fix bugs in the below function\n \n### Buggy Python\n ${code}### Fixed Python`}],
          });
        //   get the response of Open API and store it in variable
          const response = completion.data.choices[0].message;
        //   Simply send the respond 
          res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ error: error, msg: "We got some error in the server" })
    }

})


// Route:02 => "GET" Method => API endpoint for Fix the Bug => URL : "http:localhost:500/bugFixer"

router.get('/bugFixer', (req, res) => {
    res.json({ msg: "Hello This is testing the api endpoint" })
})

// Export the router
module.exports = router
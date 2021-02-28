const express = require('express');
const app = new express();


const dotenv = require('dotenv');
dotenv.config();

function getNLUInstance(){
    let api_key=process.env.API_KEY;
    let api_url=process.env.API_URL;
    const nluv = require('ibm-watson/natural-language-understanding/v1');
    const {IamAuthenticator}= require('ibm-watson/auth');
    const nlu = new nluv({
        version:'2020-08-01',
        authenticator: new IamAuthenticator({
            apikey:api_key,
        }),
        serviceURL: api_url,
    });
    return nlu;
}





app.use(express.static('client'))

const cors_app = require('cors');
app.use(cors_app());

app.get("/sfe",(req,res)=>{
    const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

    let api_key=process.env.API_KEY;
    let api_url=process.env.API_URL;

const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
  version: '2020-08-01',
  authenticator: new IamAuthenticator({
    apikey: 'KIov1X1IyOsRKBdJ_8OfGBhliYz6bKfdou81PvuhgOfS',
  }),
  serviceUrl: 'https://api.us-south.natural-language-understanding.watson.cloud.ibm.com/instances/8343b905-6759-4fd7-a7e6-1776440b48b7',
});

const analyzeParams = {
  'url': 'www.ibm.com',
  'emotions': {
    'categories': {
      'limit': 3
    }
  }
};

naturalLanguageUnderstanding.analyze(analyzeParams)
  .then(analysisResults => {
    console.log(JSON.stringify(analysisResults, null, 2));
  })
  .catch(err => {
    console.log('error:', err);
  });

  //  res.render('index.html');
  });


app.get("/",(req,res)=>{
    res.render('index.html');
  });



app.get("/url/emotion", (req,res) => {

  nlu = new getNLUInstance();  
    
 console.log(req.query.url); 


const analyzeParams = {
  'url': req.query.url,
    'features': {
    'categories': {
      'limit': 3
    }
  }
};

nlu.analyze(analyzeParams)
  .then(analysisResults => {
    console.log(JSON.stringify(analysisResults, null, 2));
  })
  .catch(err => {
    console.log('error:', err);
  });

  //  res.render('index.html');
  });



app.get("/url/sentiment", (req,res) => {
    return res.send("url sentiment for "+req.query.url);
});

app.get("/text/emotion", (req,res) => {
    return res.send({"happysfesfesfe":"10","sad":"90"});
});

app.get("/text/sentiment", (req,res) => {
    return res.send("text sentiment for "+req.query.text);
});

let server = app.listen(8080, () => {
    console.log('Listening', server.address().port)
})




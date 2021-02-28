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


app.get("/",(req,res)=>{
    res.render('index.html');
  });


nlu = new getNLUInstance();

app.get("/url/emotion", (req,res) => {

const analyzeParams = {
  'url': req.query.url,
    'features': {
    'emotion': {
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



app.get("/text/emotion", (req,res) => {

const analyzeParams = {
  'text': req.query.text,
    'features': {
    'emotion': {
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

const analyzeParams = {
  'url': req.query.url,
    'features': {
    'sentiment': {
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



app.get("/text/sentiment", (req,res) => {

const analyzeParams = {
  'text': req.query.text,
    'features': {
    'sentiment': {
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



let server = app.listen(8080, () => {
    console.log('Listening', server.address().port)
})




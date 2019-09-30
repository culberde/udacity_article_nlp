// Set up aylien API and credentials
const dotenv = require('dotenv');
dotenv.config();
var path = require('path');
var aylien = require("aylien_textapi");
var textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

// Instantiate express
const express = require('express');
const app = express()

// Set up middle-ware
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

// Set port and launch server
const port = 8082;

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
})

// Post request to receive the article url and submit through SDK
app.post('/article', function(req, res) {
  let articleInfo = {
    title: '',
    author: '',
    date: '',
    summary: [],
    hashtags: [],
  };
  let articleUrl = req.body.articleUrl;
  console.log(articleUrl);
  textapi.extract({
    'url': articleUrl
  }, function(error, response) {
    if (error === null) {
      let extractData = response;
      articleInfo.title = extractData.title;
      articleInfo.author = extractData.author;
      let d = extractData.publishDate;
      let newDate = `${d.substring(5,7)}/${d.substring(8,10)}/${d.substring(0,4)}`;
      articleInfo.date = newDate;
    }
    else {
      res.send({error});
    }
  });
  textapi.summarize({
    'url': articleUrl,
    sentences_number: 3
  }, function(error, response) {
    if (error === null) {
      articleInfo.summary = response.sentences;
    }
    else {
      console.log(error);
    }
  });
  textapi.hashtags({
    'url': articleUrl
  }, function(error, response) {
    if (error === null) {
      articleInfo.hashtags = response.hashtags;
      console.log(articleInfo);
      res.send(articleInfo);
    }
    else {
      console.log(error);
    }
  });
})

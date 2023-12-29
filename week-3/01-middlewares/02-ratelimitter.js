const request = require('supertest');
const assert = require('assert');
const express = require('express');
const app = express();
// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second

let numberOfRequestsForUser = {};

setInterval(() => {   // what does this settimeout does that is to clear out the number of request after 1 second and if user requests morethan 5
                      // request with in 1 second then the user id will be blocked or no entry
    numberOfRequestsForUser = {};
}, 1000)

app.use(function(req,res,next){
  const userID = req.headers["user-id"]  //checks for userid
  if(numberOfRequestsForUser[userID]){   //if user id is there which is one request or second request then go into if
    numberOfRequestsForUser[userID] += 1 // increasing as user hits endpoint again and again
    if(numberOfRequestsForUser[userID] > 5){   //main thing to check
      res.status(404).send("more than 5 requested")
    }
    else{
      next();
    }
  }
  else{
    numberOfRequestsForUser[userID] = 1;
    next();
  }
  
})

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

module.exports = app;
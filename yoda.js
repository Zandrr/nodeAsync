var fs = require('fs');
var http = require('http');
var request = require('request');


function data(file){
  fs.readFile(file, 'utf8', function(err, data){
    return data;
  });
}

function appendToFile(file,text){
  fs.appendFile(file, text, function(err,data){
    console.log('appended '+ text + ' to '+ file);
  });
}

var options = {
  url: "https://yoda.p.mashape.com/yoda",
  method: "GET",
  json: true,
  headers: {
      "X-Mashape-Authorization": "kSjY9dDW21mshGVQgEXOa3nfu7hip1iRURXjsnQGMFF9rmFL5k"
    },
}
data('./test.txt');
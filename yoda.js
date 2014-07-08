var fs      = require('fs');
    http    = require('http');
    request = require('request');
    q       = require('q');


function readWrite(file){
  fs.readFile(file, 'utf8', function(err, data){
    var options = {
      url: "https://yoda.p.mashape.com/yoda",
      method: "GET",
      json: true,
      headers: {
          "X-Mashape-Authorization": "kSjY9dDW21mshGVQgEXOa3nfu7hip1iRURXjsnQGMFF9rmFL5k"
        },
      qs: {sentence: data }
    }
    request(options, function(err,res,body){
      fs.writeFile(file, data+res.body, function(err){
      console.log('data is' + data);
    });
  });
 
  });
}


readWrite('./test.txt');
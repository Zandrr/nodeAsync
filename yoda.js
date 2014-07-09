var fs      = require('fs');
    http    = require('http');
    request = require('request');
    Q       = require('q');

function readWrite(file){
  Q.nfcall(fs.readFile,file, 'utf8')
  .then(function(text){
    var options = {
      url: "https://yoda.p.mashape.com/yoda",
      method: "GET",
      json: true,
      headers: {
          "X-Mashape-Authorization": "kSjY9dDW21mshGVQgEXOa3nfu7hip1iRURXjsnQGMFF9rmFL5k"
        },
      qs: {sentence: text }
    }
      request(options, function(err,res,body){
        fs.writeFile(file,body);    
      })
  })
  .fail(function(err){
    console.error(err);
  });

}

readWrite('./test.txt');

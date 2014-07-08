var fs = require('fs');

function readWrite(file, text){
  fs.readFile(file, 'utf8', function(err, data){
    fs.appendFile(file, text, function(err,data){
      console.log('appended '+ text + ' to '+ file);
    });
  });
}


readWrite('./test.txt', ' appened content');
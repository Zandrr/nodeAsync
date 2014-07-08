var fs = require('fs');

function readWrite(file, text){
  fs.readFile(file, 'utf8', function(err, data){
    fs.writeFile(file, data+text, function(err,data){
      console.log('wrote '+ text + ' to '+ file);
    });
  });
}


readWrite('./test.txt', ' new content');
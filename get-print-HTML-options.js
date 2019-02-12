const https = require('https');

function getAndPrintHTML(callback) {
  var options = process.argv[2]

  https.get(options, response => {

      var buffBody ='';
      response.setEncoding('utf-8');

      response.on('data', data => {
        buffBody += data;
      });

      response.on('end', () => {
        callback(buffBody);
      });
    });
  }

getAndPrintHTML(function(HTML){
  console.log(HTML);
});
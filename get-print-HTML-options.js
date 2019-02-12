const https = require('https');
const options = process.argv[2]

function getAndPrintHTML(input) {

  https.get(options, response => {

      var buffBody = '';
      response.setEncoding('utf-8');

      response.on('data', data => {
        buffBody += data;
      });

      response.on('end', () => {
        console.log(buffBody);
      });
    });
  }

getAndPrintHTML(function(HTML){
  console.log(HTML);
});
const https = require('https');
const options = process.argv[2]

function getHTML(input, callback) {
    
var buffBody ='';

  https.get(options, response => {

      response.setEncoding('utf-8');

      response.on('data', data => {
        buffBody += data;
      });

      response.on('end', () => {
        printHTML(buffBody);
      });

    });

};

function printHTML(HTML) {
console.log(HTML);
}

getHTML(printHTML);
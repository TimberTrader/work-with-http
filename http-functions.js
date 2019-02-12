module.exports = function getHTML(options, callback){
    
    const https = require('https');
    let buffBody = '';
    
    https.get(options, response => {
    
          response.setEncoding('utf-8');
    
          response.on('data', data => {
            buffBody += data;
          });
    
          response.on('end', () => {
            callback(buffBody);
          });
    
        });
    };
    
    // function printHTML(HTML) {
    // console.log(HTML);
    // }
    
    // getHTML(printHTML);
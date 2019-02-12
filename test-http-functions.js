const https = require('https');
var getHTML = require('./http-functions');
let options = process.argv[2]

function printHTML(HTML) {
    console.log(HTML);
    }
    
getHTML(options, printHTML);
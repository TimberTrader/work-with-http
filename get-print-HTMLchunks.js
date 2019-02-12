// get data from website - file/path set as var
// (data will be sent in multiple chunks)
//     create "buffer" as a variable
//   open get data and set encoding uth-8
//       pass data.chunks thru method to set encoding of string
//         recieve data.chunk into buffer
//           append data.chunk to accumulated data.chunks
// => console.log the variable buffer

// function callback(){};


const https = require('https');

function getAndPrintHTML(callback) {

    var requestOptions = {
        host: 'sytantris.github.io',
        path: '/http-examples/step2.html'
        };

    https.get(requestOptions, function(response) {

        var buffBody ='';
        response.setEncoding('utf-8');

        response.on('data', function(chunk) {
        buffBody += chunk;
        });

        response.on('end', function() {
        callback(buffBody);
        });
    });
 }
  
getAndPrintHTML(function(HTML){
    console.log(HTML);
});
  
  
const https = require('https');

// get data from website - file/path set as var
// (data will be sent in multiple chunks)
//     create "buffer" as a variable
//   open get data and set encoding uth-8
//       pass data.chunks thru method to set encoding of string
//         recieve data.chunk into buffer
//           append data.chunk to accumulated data.chunks
// => console.log the variable buffer

// function callback(){};
// let printToScreen = function(HTML){
//   console.log(HTML);
// }

function getAndPrintHTML(callback) {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
    };

  https.get(requestOptions, response => {

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
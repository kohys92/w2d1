function getAndPrintHTML() {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  var https = require("https");

  var outputData = "";

  https.get(requestOptions, function(response){
      response.setEncoding('utf8');

      response.on('data', function(data) {
        console.log(data);
      });

      response.on('end', function(data){
        outputData += data;
        console.log(outputData);
      });
  });

}

getAndPrintHTML();
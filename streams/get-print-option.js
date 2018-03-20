var https = require("https");

var options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html'
};

function getAndPrintHTML (options) {

  var requestOptions = options;

  var outputData = "";

  https.get(requestOptions, function(response){
    response.setEncoding('utf8');

    response.on('data', function(data) {
      console.log(data);
    });

    response.on('end', function(){
      console.log(outputData);
    });
  });


}

getAndPrintHTML(options);


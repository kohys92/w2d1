function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  // while https is built-in to Node, it is a module, so it must be required
  var https = require('https');

  https.get(requestOptions, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      console.log(data.concat("\n"));
    });
  });

}

getAndPrintHTMLChunks();


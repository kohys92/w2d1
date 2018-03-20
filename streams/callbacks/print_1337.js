var https = require("https");

var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function print1337 (html) {

  var str = html.toString().split("");

  for(var i = 0; i < str.length; i++){
    if(str[i] === 'a'){
      str.splice(i, 1, '4');
    }
    if(str[i] === 'e'){
      str.splice(i, 1, '3');
    }
    if(str[i] === 'o'){
      str.splice(i, 1, '0');
    }
    if(str[i] === 'l'){
      str.splice(i, 1, '1');
    }
    if(str[i] === 's'){
      str.splice(i, 1, '5');
    }
    if(str[i] === 't'){
      str.splice(i, 1, '7');
    }
    if(str[i] === 'ck'){
      str.splice(i, 1, 'x');
    }
    if(str[i] === 'er'){
      str.splice(i, 1, '0r');
    }
    if(str[i] === 'you'){
      str.splice(i, 1, 'j00');
    }
  }
  return str.join('');
}

  console.log(html.toLowerCase());
}


getHTML(requestOptions, print1337);
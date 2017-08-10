var request = require('request');
var talkapi_key = '';

var options = {
  url: 'https://api.a3rt.recruit-tech.co.jp/talk/v1/smalltalk',
  json: true
};
var talkapi = new Object();

talkapi.sendmsg = function(msg,callback){
  var form = {
          apikey: talkapi_key,
          query: msg
      };
  options.form = form;

  request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(error,body.results[0].reply);
    }else{
      console.log('error');
    }
  });
}

module.exports = talkapi;

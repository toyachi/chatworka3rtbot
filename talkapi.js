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
    var botmsg = '';
    if (!error && body.status == 0) {
      botmsg = body.results[0].reply;
    }else if (!error && body.status == 2000) {
      botmsg = '・・・|-)';
    }else{
      botmsg = 'ERROR：HTTP status ' + response.statusCode + ' ' + body.message;
    }
    callback(botmsg);
  });
}

module.exports = talkapi;

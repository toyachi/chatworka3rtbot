var request = require('request');
var _conf = require('./config.js');
var options = {
  proxy: _conf._proxy,
  url: 'https://api.a3rt.recruit-tech.co.jp/talk/v1/smalltalk',
  json: true
};
var talkapi = new Object();

talkapi.sendmsg = function(usermsg,callback){
  var form = {
          apikey: _conf._talk._apikey,
          query: usermsg
      };
  options.form = form;

  request.post(options, function (error, response, body) {
    var botmsg = '';
    if (!error && body.status == 0) {
      botmsg = _conf._eow(usermsg, body.results[0].reply);
    }else if (!error && body.status == 2000) {
      botmsg = '・・・|-)';
    }else{
      botmsg = 'ERROR：HTTP status ' + response.statusCode + ' ' + body.message;
    }
    callback(botmsg,usermsg);
  });
}

module.exports = talkapi;

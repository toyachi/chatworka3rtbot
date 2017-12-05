var request = require('request');
var _conf = require('./config.js');
var options = {
  proxy: _conf._proxy,
  url: 'https://api.chatwork.com/v2/rooms/'+_conf._cw._rid+'/messages',
  headers: {
    'X-ChatWorkToken': _conf._cw._apikey
  },
  json: true
};

var cwapi = new Object();

cwapi.getmsg = function(callback){
  request.get(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      for (var i=0; i<body.length; i++) {
        if (body[i].account.account_id == _conf._cw._botid) {
          body.splice(i--, 1);
        }
      }
      callback(body);
    }else if (!error && !response.statusCode == 204){
      console.log('ERROR：HTTP status ' + response.statusCode + ' ' + body.error);
    }
  });
}

cwapi.sendmsg = function(msg){
  console.log('cwapi.sendmsg');
  var form = { body: msg };
  options.form = form;
  request.post(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
          console.log(body);
      }else{
          callback('error');
      }
  });
}

module.exports = cwapi;

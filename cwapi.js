var request = require('request');
var room_id = '';
var cwapi_key = '';
var bot_id = '';
var proxy = '';
var options = {
  proxy: proxy,
  url: 'https://api.chatwork.com/v2/rooms/'+room_id+'/messages',
  headers: {
    'X-ChatWorkToken': cwapi_key
  },
  json: true
};

var cwapi = new Object();

cwapi.room_id = room_id;
cwapi.getmsg = function(callback){
  request.get(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      for (var i=0; i<body.length; i++) {
        if (body[i].account.account_id == bot_id) {
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

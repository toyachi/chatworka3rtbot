var request = require('request');
var room_id = '';
var cwapi_key = '';
var account_id = ''
var options = {
  url: 'https://api.chatwork.com/v2/rooms/'+room_id+'/messages',
  headers: {
    'X-ChatWorkToken': cwapi_key
  },
  json: true
};

var cwapi = new Object();

cwapi.getmsg = function(callback){
  request.get(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var self = 0;
        if(body[0].account.account_id == account_id){
          self = 1;
        }
        callback(self,body[0].body);
      }else{
          callback('error');
      }
  });
}

cwapi.sendmsg = function(msg){
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

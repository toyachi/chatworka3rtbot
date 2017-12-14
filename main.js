'use strict';
var _conf = require('./config.js');
var cwapi = require('./cwapi.js');
var talkapi = require('./talkapi.js');
var sendtime = new Date();

setInterval( function() {
  cwapi.getmsg(function(cwres){
    for (var i=0; i<cwres.length; i++){
      var rpmsg = '[rp aid=' + cwres[i].account.account_id + ' to=' + _conf._cw._rid + '-' + cwres[i].message_id + ']' + cwres[i].account.name + '\r\n';
      talkapi.sendmsg(cwres[i].body,function(botmsg,usermsg) {
        var randnum = Math.floor( Math.random() * 100);
        if(randnum > 80){
          botmsg = _conf._provocativemsg();
        }else if(randnum > 70){
          botmsg = '「' + usermsg + '」じゃねーよｗｗｗ'
        }
        cwapi.sendmsg(rpmsg + botmsg);
        sendtime = new Date();
      });
    }
  });
  var now = new Date();
  if ( 1000 * 60 * 60 * 72 < now - sendtime　){
    cwapi.sendmsg(_conf._constmsg());
    sendtime = new Date();
  };
},6500);

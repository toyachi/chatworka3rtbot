'use strict';
var fs = require("fs");
var cwapi = require('./cwapi.js');
var talkapi = require('./talkapi.js');
var sendtime = new Date();
var constmsg = [
  'お話しませんか？',
  '放置しないでください',
  'おしゃべりしたいです'
];
setInterval( function() {
  cwapi.getmsg(function(cwres){
    for (var i=0; i<cwres.length; i++){
      var rpmsg = '[rp aid=' + cwres[i].account.account_id + ' to=' + cwapi.room_id + '-' + cwres[i].message_id + ']' + cwres[i].account.name + '\r\n';
      talkapi.sendmsg(cwres[i].body,function(botmsg) {
        cwapi.sendmsg(rpmsg + botmsg);
        sendtime = new Date();
      });
    }
  });
  var now = new Date();
  if ( 1000 * 60 * 60 * 24 < now - sendtime　){
    cwapi.sendmsg(constmsg[Math.floor(Math.random() * constmsg.length)]);
    sendtime = new Date();
  };
},10000);

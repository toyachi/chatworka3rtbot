var cwapi = require('./cwapi.js');
var talkapi = require('./talkapi.js');
setInterval(function() {
  cwapi.getmsg(function(self,cwmsg){
    if (self == 0){
      talkapi.sendmsg(cwmsg,function(err,botmsg) {
        cwapi.sendmsg(botmsg);
      });
    }
  });
},5000);

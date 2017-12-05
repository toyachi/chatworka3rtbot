var _conf = {
  _proxy : '',
  _cw : {
    _rid : '',
    _apikey : '',
    _botid : ''
  },
  _talk : {
    _apikey : ''
  },
  _constmsg : function(){
    var msgArr = [
      '無視しないで'
    ];
    return msgArr[Math.floor(Math.random() * msgArr.length)];
  },
  _provocativemsg : function(){
    var msgArr = [
      'お前、見込みあり'
    ];
    return msgArr[Math.floor(Math.random() * msgArr.length)];
  },
  _eow : function(msg,res){
    var eowArr = [
      'にゃ'
    ];
    var repeowArr = [
      'です',
      'ですね',
      'ですよ'
    ]
    for (var i=0; i<eowArr.length; i++){
      var eowRE = new RegExp('(.*)' + eowArr[i] + '(.*)');
      if(msg.match(eowRE)){
        for (var j=0; j<repeowArr.length; j++){
          var resRE = new RegExp('(.*)' + repeowArr[j] + '$');
          if(res.match(resRE)){
            return res.replace(repeowArr[j],eowArr[i]);
          }
        }
        res = res + eowArr[i];
      }
    }
    return res;
  }
};

module.exports = _conf;

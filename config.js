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
  _eow : function(msg,res){
    var eowArr = [
      'ニャ'
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

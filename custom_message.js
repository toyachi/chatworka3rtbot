var NeDB = require('nedb');
var db = {};

db.provocativemsg = new NeDB({
  filename: 'nedb/messages/provocative_messages.db',
  timestampData: 'true'
});

db.periodicmsg = new NeDB({
  filename: 'nedb/messages/periodic_messages.db',
  timestampData: 'true'
});

db.provocativemsg.loadDatabase();
db.periodicmsg.loadDatabase();

var _custom = {
  _provocativemsg : function(callback){
    db.provocativemsg.find({}, function(err, docs){
      callback(docs[Math.floor(Math.random() * docs.length)].message);
    });
  },
  _periodicmsg : function(callback){
    db.periodicmsg.find({}, function(err, docs){
      callback(docs[Math.floor(Math.random() * docs.length)].message);
    });
  }
}

module.exports = _custom;

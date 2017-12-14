var NeDB = require('nedb');
var db = {};

db.provocativemsg = new NeDB({
  filename: 'nedb/messages/provocative_messages.db',
  timestampData: 'true'
});

db.provocativemsg.loadDatabase();

db.provocativemsg.insert({message : 'お前、見込みあり'});

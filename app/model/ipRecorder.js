const ipCollection = (database) => {
  const ipRecordCollection = database.collection("ip-record");
  return ipRecordCollection;
}
const recordList = (db, cb) =>{
  const query = {};
  ipCollection(db).getRecord(query, function(err, result ) {
    return cb(err, result)
  });
}

module.exports.getRecordList = recordList;

module.exports.insertRecord = (info, db, cb) => {
  
  const { ip } = ipInfo;
  ipCollection(db).insert(
    {
      'ip' : ip, 
    }, function(err, record) {
      if(err) {
        return cb(err,null);
      } else if (record) {
        return recordList(req,res,database);
      } else {
        return cb(null, null)
      }
  });
} 
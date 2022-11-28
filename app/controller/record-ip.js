
var ip = require("ip");
var ipRecordModel = require('../model/ipRecorder');

module.exports.recordIp = (res, database) => {
  ipRecordModel.insertRecord({ip: ip.address()}, database, (err, record)=> {
    if(err) {
      return res.json({success:false, msg:"Error on getting record ip", err:err});
    } else if (record) {
      return res.json({success:true, msg:"The database is connected !" , record:record})
    } else {
      return res.json({success:false , msg:"Can't  get the list or list is empty"});
    }
  });
}
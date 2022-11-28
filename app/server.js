const http = require('http');
var ip = require('ip');
var recordController = require('./controller/record-ip');

module.exports = (app, client) => {
  const database = client.db('test');

  //this is just a homepage
  app.get('/', (req, res) => {
    return recordController.recordIp(req,res,database);
  });
  //this is just a test page 
  app.get('/mongodb', (req, res) => {
    return recordController.recordIp(res,database);
  });

  const server = http.createServer(app);

  server.listen(()=>{
    console.log("the server has started");
  });
}


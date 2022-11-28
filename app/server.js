const http = require('http');

module.exports = (app) => {

  //this is just a homepage
  app.get('/', (req, res) => {
    res.json({success:true, msg:"The database is connected !", route:'/'})
  });
  //this is just a mongodbsss
  app.get('/mongodb', (req, res) => {
    res.json({success:true, msg:"The database is connected !" , route: 'Mongodb'})
  });

  const server = http.createServer(app);

  server.listen(()=>{
    console.log("the server has started");
  });
}


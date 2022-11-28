const http = require('http');
const cors = require('cors');
const express = require("express");

// get MongoDB driver connection
const dbo = require('./app/connection');

// recordRoutes is an instance of the express router.
const app = express()

app.use(cors());
app.use(express.json());

// Global error handling
app.use(function (err, _req, res) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


const server = http.createServer(app);

// perform a database connection when the server starts
dbo.connectToServer(function (err) {
    if (err) {
      console.error(err);
      process.exit();
    }
  
    console.log("Connected to the database");
    server.listen(()=>{
        console.log("the server has started");
    });
});

// This section will help you get a list of all the documents.
app.route("/").get(async function (req, res) {
const dbConnect = dbo.getDb();

dbConnect
    .collection("test")
    .find({}).limit(50)
    .toArray(function (err, result) {
        if (err) {
            res.status(400).json({ msg:"Error fetching test database!", success:false, err:err });
        } else {
            res.json({ success:true, msg:"Successfully got the result.", result:result });
        }
    });
});

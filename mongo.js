const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /listings.
const appRoutes = express.Router();

// This section will help you get a list of all the documents.
appRoutes.route("/").get(async function (req, res) {
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
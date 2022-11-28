const http = require('http');
const cors = require('cors');
const express = require("express");

// get MongoDB driver connection
const dbo = require('./app/connection');

// recordRoutes is an instance of the express router.
const app = express()
const server= require('./app/server');

app.use(cors());
app.use(express.json());


// perform a database connection when the server starts
dbo((err, client) => {
    if( err ) {
        console.log("the error is", err);
    } else if ( client ) {
        console.log("Connected to the database");
        server(app);
    } else {
        console.log("Something went wrong with the connection");
    }
  
});

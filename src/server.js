const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');


const indexRoutes = require("./routes/index");
const dbConnnection = require("./configurations/databaseConfiguration");
const {PORT} = require('./configurations/constants')

const server = express();

server.use(bodyParser.json())
server.use(cors());



//routing
server.use("/",indexRoutes);

//Handling invalid api request
server.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404 || err.status;
    res.status(err.status).send({ message: "Invalid API" });
    next();
  });

  dbConnnection.dbConnection.then(()=>{
    server.listen(PORT,()=>{
        console.log("Server started at:",PORT)
    })
  })

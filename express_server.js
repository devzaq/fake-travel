const express = require("express");
// const mongoose = require('mongoose');
require('dotenv').config()
require("./src/db/connect")

//ENVIROMENT VARIABLES
const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;


const server = express();

server.listen(PORT, () => {
    console.log(PORT,NODE_ENV)
    console.log(`Server started successfully in ${NODE_ENV} on port ${PORT}`);
})

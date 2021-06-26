const express = require("express");
const route = express.Router();

route.use('/',(req,res) =>{
    console.log("Im route");
}) 

module.exports = route;
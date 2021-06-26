const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const route = require('./RegisterRoute');
const router = require('./LoginRoute');
const routers = require('./DetailsRoute');
const rou = require('./Route');
const cors = require("cors");
 
// app.use(express.json());

// app.use(express.json());
 
app.use(express.json())
app.use(cors());
// app.get('/',(req,res) =>{
//     res.json("hlooo");
// });

 
app.use('/details',routers);
app.use('/rou',rou);
app.use('/login',router);
app.use('/register',route);



mongoose.connect('mongodb://localhost:27017/backend',{ useNewUrlParser: true,useUnifiedTopology: true } ,(err) =>{
    if(err){
        console.log('DB not connected successfully')
    }
    console.log('DB connected successfully')
}
)

app.listen(2000,() => {
    console.log("Server started on 2000");
})
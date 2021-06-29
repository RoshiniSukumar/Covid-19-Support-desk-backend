const express = require('express');
const router = express.Router();
// const login = require('./LoginSchema');
const Register = require('./RegisterSchema');
const bcrypt = require("bcrypt");


router.post('/',async(req,res) => {
    console.log("in post")
    console.log(req.body)
    const Loginpg = await Register.findOne({email:req.body.email})
    console.log(Loginpg)
    if (Loginpg){
        console.log("im in login")
        if (await bcrypt.compare(req.body.password,Loginpg.password)) {
            console.log("login Successfully!")
            res.status(200).json({err:null,hospitalname:Loginpg.confirmpassword})
        }
        res.status(200).json({err:"Wrong password"})
    }
    res.status(200).json({err:"Wrong email"})
     
         
    });

 
    module.exports = router;
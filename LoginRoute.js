const express = require('express');
const router = express.Router();
const login = require('./LoginSchema');

router.post('/',async(req,res) => {
    
    var data =  new login({
        Email:req.body.Email,
         Password:req.body.Password,
         
    });
     await data.save();
     res.json(data);
    });

    router.get('/',async(req,res)=>{
        var findData = await login.find();
        res.status(200).json(findData);
    })
 
    module.exports = router;
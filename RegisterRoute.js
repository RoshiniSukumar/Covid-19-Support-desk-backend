const express = require('express');
const router = express.Router();
const Register = require('./RegisterSchema');



router.post('/',async(req,res) => {
    console.log(req.body);
    var data =  new Register({
        email:req.body.email,
         password:req.body.password,
         confirmpassword:req.body.confirmpassword
    });
     await data.save();
     res.json(data);
    });

    router.get('/',async(req,res)=>{ 
        var findData = await Register.find();
        res.json(findData);
    })
// router.get('/',async(req,res) => {
//     var registerform = await Register.find();
//     res.status(200).json(registerform);
// })
// router.post('/',async(req,res) =>{
//      var registerform = await Register.create({
//          email:req.body.email,
//          password:req.body.password,
//          confirmpassword:req.body.confirmpassword
//      });
      
//      res.status(200).json(registerform);
// });

// router.get('/login',async(req,res) => {
//     var loginform = await login.find();
//     res.status(200).json(loginform);
// });

// router.post('/login',async(req,res) =>{
//      var loginform = await login.create({
//          Email:req.body.Email,
//          Password:req.body.Password
          
//      });
      
//      res.status(200).json(loginform);
// });




 

module.exports = router;
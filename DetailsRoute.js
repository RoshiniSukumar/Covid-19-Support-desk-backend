const express = require('express');
const router = express.Router();
const Details = require('./DetailsSchema');

router.get('/',async(req,res) =>{
    // console.log("i'm get");
    var detail = await Details.find();
    console.log(detail);
    res.status(200).json(detail);
});

router.post('/',async(req,res) =>{
    console.log(req.body);
    var detail = new Details({
        hospitaltype:req.body.hospitaltype,
        hospitalname:req.body.hospitalname,
        address:req.body.address,
        contactnumber:req.body.contactnumber,
        normalbed:req.body.normalbed,
        icubed:req.body.icubed,
        o2bed:req.body.o2bed,
        total:req.body.total 
    });
    await detail.save();
    res.json(detail);
})

// router.post('/',async(req,res) =>{
//     var detail = await Details.create({
//         hospitaltype:req.body.hospitaltype,
//         hospitalname:req.body.hospitalname,
//         address:req.body.address,
//         contactnumber:req.body.contactnumber,
//         normalbed:req.body.normalbed,
//         icubed:req.body.icubed,
//         o2bed:req.body.o2bed,
//         total:req.body.total
//     });

router.put('/',async(req,res) =>{
    console.log(req.body.hospitalname);
    var update = await Details.updateOne({hospitalname:req.body.hospitalname},{$set:{
        
        normalbed:req.body.normalbed,
        icubed:req.body.icubed,
        o2bed:req.body.o2bed,
        total:req.body.total
    }

    });
    
    console.log(update);
    res.json(update);
})

    // res.status(200).json(detail);
         
    // });

    module.exports = router;
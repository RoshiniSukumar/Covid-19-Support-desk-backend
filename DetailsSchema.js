const mongoose = require('mongoose');
const DetailsSchema = mongoose.Schema({
    hospitaltype:{
        type:String,
        required:true
    },
    hospitalname:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    contactnumber:{
        type:Number,
        required:true
    },
    normalbed:{
        type:String,
        required:true
    },
    icubed:{
        type:String,
        required:true
    },
    o2bed:{
        type:String,
        required:true
    },
    total:{ 
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("details",DetailsSchema);
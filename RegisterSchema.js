const mongoose = require('mongoose');
const Register = mongoose.Schema({
    email:{
        type: String,
         required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
        required:true
            
    }
})

module.exports = mongoose.model("Register",Register);
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
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
Register.pre("save",async function(next){
    const salt = await bcrypt.genSalt() 
    this.password = await bcrypt.hash(this.password,salt)
})
module.exports = mongoose.model("Register",Register);
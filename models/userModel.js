const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:[true,"Please enter a name"],
        maxLength:[30,"Name cannot exceed 30 characters"],
        minLength:[4,"Name should be more than 4 characters"]
    },
    email:{
        type:String,
        unique:true,
        validator:[validator.isEmail,"Please enter a valid email"]
    },
    password:{
        type:String,
        required:[true,"Please enter your password"],
        minLength:[8,"Password should be greater than 8 characters"],
        select:false
    },
    role:{
        type:String,
        default:"customer"
    },

    resetPasswordToken:String,
    resetPasswordExpire:Date,
});



module.exports = mongoose.model("user", userSchema);
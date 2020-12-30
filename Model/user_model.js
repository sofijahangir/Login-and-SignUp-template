const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const user_Schema = new mongoose.Schema({
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    }
})

user_Schema.pre('save', async function(req,res,next) {
    const user = this
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password , 10);
    }
    next();
})

user_Schema.methods.genAuthToken = async function(){
    const user = this
    const token = jwt.sign({_id:user._id} , process.env.JWT_TOKEN);
    return token;
}

user_Schema.statics.findByCredentials = async function(email , password){
    const user = await User.findOne({email: email});
    if(!user){
        throw new Error("Invalid Credentials");
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password)
    if(!isPasswordMatch){
        throw new Error("Invalid credentials");
    }
    else{
        return user;
    }
}
const User = mongoose.model("User" , user_Schema);
module.exports = User;
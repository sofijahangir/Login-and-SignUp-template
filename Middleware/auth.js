const jwt = require('jsonwebtoken');
const User = require('./../Model/user_model');

exports.auth = async (req, res, next) => {
    const token = req.headers('Authorization').split(' ')[1];
    const data = jwt.verify(token , process.env.JWT_TOKEN);
    try {
        const user = await User.findOne({_id: data._id , "tokens.token": token})
        if(!user){
            throw new Error("User not found")
        }
        req.user = user
        req.token = token
        next();
    } catch (error) {
        res.status(401).send({error: "not Authorized to access"})
    }
}
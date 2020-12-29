const User = require('./../Model/user_model');

exports.login = async (req,res) =>{
    try {
        const email = req.body.email
        const password = req.body.password
        const user = await User.findByCredentials(email , password);
        const token = await user.genAuthToken();
        res.status(200).send({user: user, token: token});
    } catch (error) {
        res.status(401).send({error:error.message})
    }
}

exports.signup = async (req,res) => {
    const user = new User(req.body);
    try {
        await user.save();
        const token = user.genAuthToken();
        res.status(401).send({user: user, token: token})
    } catch (error) {
        res.status(401).send({error:error.message})
    }
}
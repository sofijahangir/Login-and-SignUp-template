const user_controllers = require("./../Controllers/user_controllers");
const auth = require("./../Middleware/auth");
const  express = require('express');
const router = express.Router();

router.post('/signup' , user_controllers.signup);

router.post('/login' , user_controllers.login);

router.get('/auth', auth ,(req, res) => {
    res.json({
        message: 'Auth success'
    });
});


module.exports = router;
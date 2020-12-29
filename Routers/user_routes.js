const user_controllers = require("./../Controllers/user_controllers");
const  express = require('express');
const router = express.Router();

router.post('/signup' , user_controllers.signup);

router.post('/login' , user_controllers.login);

module.exports = router;
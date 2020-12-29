require('dotenv').config();
const bodyparser = require('body-parser')
const express = require('express');
const database = require('./DataBase/db');
const app = express();
const port = process.env.PORT || 8080 ;

const user_routes = require('./Routers/user_routes');


app.use(bodyparser.json());
// app.get('/', (req, res) => {
//     res.send('Hello Jay'); 	
// });
app.use(user_routes);


app.listen(port, () => {
    console.log(`Server started on ${port}`);
});
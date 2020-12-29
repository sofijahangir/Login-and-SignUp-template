const mongoose = require('mongoose');
const mongourl = process.env.MONGO_URI ;

mongoose.connect(mongourl , { useNewUrlParser: true , useUnifiedTopology: true }).
then(() => {
    console.log("connected to database");
}).
catch((err) => {
    console.log(err);
})


module.exports = mongoose;
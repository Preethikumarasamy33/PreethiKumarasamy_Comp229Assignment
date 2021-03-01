let mongoose = require('mongoose');

//create a model class
let userModel = mongoose.Schema({
    user_name: String,
   
    password: String,
    email_id: String
},
{
    collection: "users"
});

module.exports = mongoose.model('User', userModel);

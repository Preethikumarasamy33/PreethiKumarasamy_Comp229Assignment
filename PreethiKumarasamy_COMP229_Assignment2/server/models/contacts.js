let mongoose = require('mongoose');

//create a model class
let contactModel = mongoose.Schema({
    contact_Name: String,
   
    contact_number: String,
    email_id: String
},
{
    collection: "business_list"
});

module.exports = mongoose.model('Contact', contactModel);

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//coonect to our Book Model
let Contact = require('../models/contacts');

/* GET Route for the Book List page - READ Operation */
router.get('/', (req, res, next) => {
    Contact.find((err, contactList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(BookList);


           res.render('pages/contact/list', {title: 'Contacts', ContactList: contactList});
        }
    });
});

/*GET Route for displaying the Add page - CREATE operation */
router.get('/add', (req, res, next) => {
    res.render('pages/contact/add', {title: 'Add Contact details'});
});
/* POST Route for processing the Add page - CREATE Operation*/
router.post('/add', (req, res, next) => {
    let newContact = Contact({
        "contact_Name": req.body.name,
        "contact_number": req.body.contactNumber,
        "email_id": req.body.email,

    });

    Contact.create(newContact, (err, Contact) => {
    if(err)
    {   
    console.log(err);
    res.end(err);
    }
    else
        {
    //refresh the book List
    res.redirect('/contact-list');
        }
    });
});
/*GET Route for displaying the Edit page - UPDATE operation */
router.get('/edit/:id', (req, res, next) =>{
    let id = req.params.id;
    Contact.findById(id, (err, contactToEdit) => 
    {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else{
            res.render('pages/contact/edit', {title:'Edit contact', contactToEdit: contactToEdit})
        }
    });
});
/* POST Route for processing the Edit page - UPDATE Operation*/
router.post('/edit/:id', (req, res, next) =>{
    let id = req.params.id

    let updatedContact = Contact({
        "_id":id,
        "contact_Name": req.body.name,
        "contact_number": req.body.contactNumber,
        "email_id": req.body.email,

    });
    Contact.updateOne({ id: id}, updatedContact, (err) => {
        if(err){
            console.log(err);
            res.end(err);
        }
    else
        {
            //refresh the book-list
            res.redirect('contact-list');
        }
    });
});
/*GET to perform Deletion - DELETE operation */
router.post("/delete/:id", (req, res, next) => {
    let id = req.params.id;
    Contact.remove({ _id: id }, (err) => {
      if (err) {
        console.error(err);
        res.end(err);
      } else {
        //console.log(BookList);
  
        res.redirect("/contact-list");
      }
    });
  });

module.exports = router;
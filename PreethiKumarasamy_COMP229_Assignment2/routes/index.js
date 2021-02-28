var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  res.render('pages/home', { title: 'Home' });
});
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('pages/home', { title: 'Home' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('pages/about', { title: 'About' });
});
/* GET products page. */
router.get('/Projects', function(req, res, next) {
  res.render('pages/Projects', { title: 'Projects' });
});
/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('pages/services', { title: 'Services' });
});
/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('pages/contact', { title: 'Contact Me' });
});

module.exports = router;

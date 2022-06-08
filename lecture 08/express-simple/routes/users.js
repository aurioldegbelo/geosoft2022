var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) 
{
  //res.send('respond with a resource');
  res.render('users', { title: 'Users Page', subtitle: 'A Cool Subtitle', key: 'A variable named key' });

});

module.exports = router;

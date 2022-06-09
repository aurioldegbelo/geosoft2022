var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('add', { title: 'Addition Page' });
});


router.post('/newpoi', function(req, res, next) 
{
  console.log("A new poi has been added")

  console.log(req.body)
  let poi = {}
  poi.poiname = req.body.pname
  poi.cityname = req.body.cname
  poi.coordinates = req.body.longlat
  poi.link = req.body.picurl

})


module.exports = router;

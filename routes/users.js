var express = require('express');
var router = express.Router();
var citys = [
  {
    "_id" : 1,
    "city" : "Odessa",
    "population" : 1012277,
    "latitude":46.483682,
    "longitude":30.735965
  },
  {
    "_id" : 2,
    "city" : "Kiev",
    "population" : 2890513,
    "latitude":50.447749,
    "longitude":30.549857
  },
  {
    "_id" : 3,
    "city" : "Kharkov",
    "population" : 1448298,
    "latitude":49.986654,
    "longitude":36.239813
  }
]
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(citys);
});

module.exports = router;

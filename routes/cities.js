/**
 * Created by sasha on 17.09.15.
 */
var express = require('express');
var router = express.Router();
var User = require('./app/models/user');
router.get('/', function(req, res, next) {
    res.json(citys);
});
router.post('/', function(req, res, next) {
    res.json(citys);
});
router.get('/:id', function(req, res) {

});
router.put('/:id', function (req, res){

});

router.delete('/:id', function (req, res){

});
module.exports = router;

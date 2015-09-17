/**
 * Created by sasha on 17.09.15.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.json(citys);
});
module.exports = router;

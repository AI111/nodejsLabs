/**
 * Created by sasha on 18.09.15.
 */
'use strict'
var express = require('express');
var controller = require('./city.controller');
var router = express.Router();

router.get('/',controller.getAll);
router.get('/:id',function(req,res){
    if (isNaN(req.params.id)){
        controller.getByName(req,res)
    }else{
        controller.getById(req,res)
    }

});
router.post('/',controller.create)
router.put('/:id',controller.update);
router.delete('/:id',controller.destroy);
module.exports = router;
/**
 * Created by sasha on 18.09.15.
 */

'use strict';

var _ = require('lodash');
var City = require('./city.model');

// Get list of things
exports.getAll = function(req, res) {
    City.find(function (err, things) {
        if(err) { return handleError(res, err); }
        return res.status(200).json(things);
    });
};

// Get a single thing
exports.getById = function(req, res) {
    City.findById(req.params.id, function (err, thing) {
        if(err) { return handleError(res, err); }
        if(!thing) { return res.status(404).send('Not Found'); }
        return res.json(thing);
    });
};

exports.getByName = function(req, res) {
    City.findOne({ 'name': req.params.id},  function (err, city) {
        if (err) return handleError(err);
       return res.json(city) // Space Ghost is a talk show host.
    })
};

// Creates a new thing in the DB.
exports.create = function(req, res) {
    City.create(req.body, function(err, thing) {
        if(err) { return handleError(res, err); }
        return res.status(201).json(thing);
    });
};

// Updates an existing thing in the DB.
exports.update = function(req, res) {
    if(req.body._id) { delete req.body._id; }
    City.findById(req.params.id, function (err, thing) {
        if (err) { return handleError(res, err); }
        if(!thing) { return res.status(404).send('Not Found'); }
        var updated = _.merge(thing, req.body);
        updated.save(function (err) {
            if (err) { return handleError(res, err); }
            return res.status(200).json(thing);
        });
    });
};

// Deletes a thing from the DB.
exports.destroy = function(req, res) {
    City.findById(req.params.id, function (err, thing) {
        if(err) { return handleError(res, err); }
        if(!thing) { return res.status(404).send('Not Found'); }
        thing.remove(function(err) {
            if(err) { return handleError(res, err); }
            return res.status(204).send('No Content');
        });
    });
};

function handleError(res, err) {
    return res.status(500).send(err);
}
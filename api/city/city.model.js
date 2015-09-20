/**
 * Created by sasha on 18.09.15.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var citySchema = new Schema({
    _id:Number,
    name: {
        type:String,
        required: true,
        unique: true
    },
    population:Number,
    location:{
        latitude:Number,
        longitude:Number
    },
    imageUrl:String

});

// the schema is useless so far
// we need to create a model using it
var City = mongoose.model('City', citySchema);

// make this available to our users in our Node applications
module.exports = City;
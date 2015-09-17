su/**
 * Created by sasha on 17.09.15.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
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
    imageUrl:String,

});

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('City', userSchema);

// make this available to our users in our Node applications
module.exports = City;
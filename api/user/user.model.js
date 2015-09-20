/**
 * Created by sasha on 20.09.15.
 */
/**
 * Created by sasha on 18.09.15.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var personSchema = new Schema({
    _id:Number,
    name: {
        firstName : String,
        lastName : String,
        middleName: String
    },
    age:Number

});

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', personSchema);

// make this available to our users in our Node applications
module.exports = User;
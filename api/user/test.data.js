/**
 * Created by sasha on 19.09.15.
 */
'use strict';

var User = require('./user.model');

User.find({}).remove(function() {
    User.create(
        {
            _id:0,
            name: {
                firstName : "firstName",
                lastName : "lastName",
                middleName: "middleName"
            },
            age:22
        },
        {
            _id:1,
            name: {
                firstName : "firstName",
                lastName : "lastName",
                middleName: "middleName"
            },
            age:26
        });
});
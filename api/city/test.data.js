/**
 * Created by sasha on 19.09.15.
 */
'use strict';

var City = require('./city.model');

City.find({}).remove(function() {
    City.create(
        {
            _id : 1,
            name : "Odessa",
            population : 1012277,
            location:{
                latitude:46.483682,
                longitude:30.735965
            },
            imageUrl:"http://visittoukraine.com/uploads/images/sights/odessa_theatre.jpg"
        },{
            _id : 2,
            name : "Kiev",
            population : 2890513,
            location:{
                latitude:50.447749,
                longitude:30.549857
            },
            imageUrl:"http://image.zn.ua/media/images/original/May2013/62232.jpg"
        },
        {
            _id : 3,
            name : "Kharkov",
            population : 1448298,
            location:{
                latitude:49.986654,
                longitude:36.239813
            },
            imageUrl:"http://flowers.com.ua/img/upl/Kharkov.jpg"
        });
});
/// <reference path="../typings/meteor/meteor.d.ts"/>

Meteor.publish("publicBooks",function(){
    return Books.find();
});

Meteor.publish("publicReservations",function(){
    return Reservations.find();
});

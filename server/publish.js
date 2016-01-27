/// <reference path="../typings/meteor/meteor.d.ts"/>

var NOTIFICATION_ALERT = 'notificationAlert';

Meteor.publish("publicBooks",function(){
    return Books.find();
});

Meteor.publish("publicReservations",function(){
    return Reservations.find();
});

Meteor.publish("publicUsers",function(){
    return Meteor.users.find();
});

/// <reference path="../../typings/meteor/meteor.d.ts"/>
var ERRORS_ACCOUNT_KEY = "accountErrors";


Template.header.helpers({
   myReservationsCount : function(){
       return Reservations.find({"userId": Meteor.userId(), "endDate": null}).count();
   }
});


Template.header.events({
    "click .logout": function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go("/");
    }    
});
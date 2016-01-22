/// <reference path="../../typings/meteor/meteor.d.ts"/>

Template.header.events({
    "click .logout": function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go("/");
    }
})
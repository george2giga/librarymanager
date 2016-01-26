/// <reference path="../../typings/meteor/meteor.d.ts"/>
var SEARCH_PARAMS = 'searchParams';
var ERRORS_ACCOUNT_KEY = "accountErrors";


Template.header.events({
    "click .logout": function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go("/");
    },
    'keyup #searchBooks': function (evt,template) {
        var searchValue = template.find("#searchBooks").value;
        Session.set(SEARCH_PARAMS, searchValue);        
       
    //    if (evt.which === 13) 
    //    {
    //   //var url = template.find(".newLink").value;
    //   // add to database
    //    }
  }
})
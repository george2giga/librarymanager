/// <reference path="../../typings/meteor/meteor.d.ts"/>

var ERRORS_KEY = 'loginErrors';
var ERRORS_ACCOUNT_KEY = "accountErrors";

Template.authLogin.onCreated(function(){
   Session.set(ERRORS_KEY, {});
   Session.set(ERRORS_ACCOUNT_KEY, {});  
});

Template.authLogin.helpers({
  errorMessages: function() {
    return _.values(Session.get(ERRORS_ACCOUNT_KEY));
  },
  errorClass: function(key) {
    return Session.get(ERRORS_KEY)[key] && 'has-error'; 
  }
});

Template.authLogin.events({
   "submit": function(event,template){
       event.preventDefault();
        var email = template.$('[name=email]').val();
        var password = template.$('[name=password]').val(); 
        
        var errors = {};
        
        //check email and password
        if(!email)
        {
            errors.email = 'Email is required';
        }        
        if(!password)
        {
            errors.password = 'Password is required';
        }
        
        Session.set(ERRORS_KEY, errors);
        if(_.keys(errors).length)
        {
            return;
        }        
        
        Meteor.loginWithPassword(email, password, function(error){
            if(error){
                return Session.set(ERRORS_ACCOUNT_KEY, {"none": error.reason});
            }
        Router.go("/");                    
        });
   } 
});
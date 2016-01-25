/// <reference path="../../typings/meteor/meteor.d.ts"/>

var ERRORS_KEY = 'joinErrors';
var ERRORS_ACCOUNT_KEY = "accountErrors";

Template.authJoin.onCreated(function(){
   Session.set(ERRORS_KEY, {}); 
   Session.set(ERRORS_ACCOUNT_KEY, {});  
});

Template.authJoin.helpers({
    errorMessages: function(){
        return _.values(Session.get(ERRORS_ACCOUNT_KEY));
    },
    errorClass: function(key) {
        return Session.get(ERRORS_KEY)[key] && 'has-error';
    }
});

Template.authJoin.events({
    "submit" : function(event, template){
        event.preventDefault();
        var email = template.$("[name=email]").val();
        var password = template.$("[name=password]").val();
        var confirm = template.$("[name=confirm]").val();
        
        var errors = {};
        if(!email)
        {
            errors.email = "Email required";
        }
        if(!password)
        {
            errors.password = "Password required";
        }        
        if(!confirm)
        {
            errors.confirm = "Please confirm the password";
        }
        if(confirm !== password)
        {
            errors.confirm = "Passwords do not match";
        }
        
        Session.set(ERRORS_KEY, errors);
        //if there's any error exit the function
        if(_.keys(errors).length)
        {
            return;
        }
        
        
        Accounts.createUser({
            email : email,
            password : password
        }, function(error){
        if(error){
            return Session.set(ERRORS_ACCOUNT_KEY, {'none': error.reason});
        }
            Router.go('/'); 
        });
    }
});
/// <reference path="../../typings/meteor/meteor.d.ts"/>

var SEARCH_PARAMS = 'searchParams';
var NOTIFICATION_ALERT = 'notificationAlert';


Template.book.onCreated(function(){
   Session.set(SEARCH_PARAMS, null); 
});


Template.book.helpers({
    books: function(){
        var filter = Session.get(SEARCH_PARAMS) || null;
        var result = filter ? Books.find({"title" : new RegExp(filter, 'i') }) : Books.find();                
        return result;        
    }
});

Template.book.events({
    "click .reserve": function(){
        var currentUserId = Meteor.userId();
        var reservation = {
            //userId : currentUserId,
            bookId : this._id,
            createdDate : new Date(),
            endDate : null
        }

         Meteor.call('reserveBook', reservation);
         var notification = this.title + " reserved";
         sAlert.info(notification);
    },
    "keyup #searchBooks": function (evt,template) {
        var searchValue = template.find("#searchBooks").value;
        Session.set(SEARCH_PARAMS, searchValue);        
     }   
});


/// <reference path="../../typings/meteor/meteor.d.ts"/>

Template.whoGotWhat.helpers({
    reservationBooks : function(){
        var reservations = Reservations.find({"endDate": null});
        
        var result = [];
        
        reservations.forEach(function(reservation){
            var book = Books.findOne({"_id": reservation.bookId});
            var user = Meteor.users.findOne({"_id": reservation.userId});
            result.push({book : book , reservation : reservation, user : user});
        });
        
        return result;
    }    
});
/// <reference path="../typings/meteor/meteor.d.ts"/>

Meteor.methods({
    'reserveBook': function(reservation){
        reservation.userId = Meteor.userId();        
        Reservations.insert(reservation);                               
    },
    
    'releaseBook': function(reservationId){
        // var reservations = Books.find({"_id": bookId, "reservations.userId" : Meteor.userId()}).reservations;
        // for(var reservation in reservations)
        // {
        //     if(reservation.userId === currentUserId)
        //     {
        //         reservation.endDate = Date.now();
        //     }
        // }
        
        // Books.update({"_id": bookId, "reservations.userId" : Meteor.userId()}, 
        // {
        //     "$set": {
        //         //"reservations.$.endDate" : Date.now()
        //         // "reservations.$.endDate" : Date.now()
        //         "reservations.$.dummy" :"b"
        //     }            
        // },{multi:true});
        
        //console.log(Books.find().fetch());
        debugger;
        Reservations.update({"_id": reservationId}, {$set: {"endDate" : Date.now()} });
        //debugger;     
    }
})

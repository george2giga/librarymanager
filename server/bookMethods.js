/// <reference path="../typings/meteor/meteor.d.ts"/>

Meteor.methods({
    // 'releaseBook': function(bookId){
    //     // var reservations = Books.find({"_id": bookId, "reservations.userId" : Meteor.userId()}).reservations;
    //     // for(var reservation in reservations)
    //     // {
    //     //     if(reservation.userId === currentUserId)
    //     //     {
    //     //         reservation.endDate = Date.now();
    //     //     }
    //     // }
    //     
    //     // Books.update({"_id": bookId, "reservations.userId" : Meteor.userId()}, 
    //     // {
    //     //     "$set": {
    //     //         //"reservations.$.endDate" : Date.now()
    //     //         // "reservations.$.endDate" : Date.now()
    //     //         "reservations.$.dummy" :"b"
    //     //     }            
    //     // },{multi:true});
    //     
    //     //console.log(Books.find().fetch());
    //     
    //     var reservations = Books.find({"_id": bookId, "reservations.userId": Meteor.userId()}, {"reservations" : 1}).fetch();
    //     //debugger;     
    // }
})

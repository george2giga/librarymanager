/// <reference path="../typings/meteor/meteor.d.ts"/>

Meteor.methods({
    'reserveBook': function(reservation){
        reservation.userId = Meteor.userId();
        //insert reservation     
        Reservations.insert(reservation);
        //update book status 
        Books.update({"_id": reservation.bookId}, {$set: {"reserved": true}});                                       
    },
    
    'releaseBook': function(reservationId){
        var reservation = Reservations.findOne({"_id": reservationId});        
        Reservations.update({"_id": reservationId}, {$set: {"endDate" : Date.now()} });
        //release book
        Books.update({"_id": reservation.bookId}, {$set: {"reserved": false}});        
    },
    
    'reservationStats': function(){
        var reservationsFound = Reservations.find().fetch();       
        var reservationsBookIds =_.groupBy(_.pluck(reservationsFound, 'bookId'));
        var result = [];
        _.each(reservationsBookIds , function(reservationBookId){
            var bookName = Books.findOne({"_id": reservationBookId[0]}, {"title": 1, "_id": 0}).title;
            result.push({name: bookName, y : reservationBookId.length});
        });       
       return result;
    }
})

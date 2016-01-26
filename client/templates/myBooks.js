/// <reference path="../../typings/meteor/meteor.d.ts"/>

Template.myBooks.helpers({
     reservations : function(){
                
        var reservations = Reservations.find({"userId": Meteor.userId(), "endDate": null});

        var reservationBooks = [];
        reservations.forEach(function(reservation){
            var book = Books.findOne({"_id": reservation.bookId});
            reservationBooks.push({book : book , reservation : reservation})
        });
                     
        return reservationBooks;
    }   
})

Template.myBooks.events({
    "click .returnBook": function(){
        //http://stackoverflow.com/questions/21030922/meter-js-update-array-document-in-mini-mongo       
        //http://stackoverflow.com/questions/30866537/meteor-mongo-updating-nested-array
       
        Meteor.call('releaseBook', this.reservation._id);
        
        sAlert.info(this.book.title + " returned");   
    }
})

Template.myBooks.onRendered(function(){
    // var booksMain = $('.mybooksMain');
    // booksMain.imagesLoaded(function(){
    //     booksMain.masonry({
    //         itemSelector: ".mybookItem"            
    //     });        
    // });
});
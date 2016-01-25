/// <reference path="../../typings/meteor/meteor.d.ts"/>

// if (Meteor.isClient) {
//     //console.log(Books.find().fetch());
//     console.log("CIAO");
// }

Template.book.helpers({
    books: function(){
        return Books.find();
    }   
});

Template.book.events({
    "click .reserve": function(){
        var currentUserId = Meteor.userId();
        //http://stackoverflow.com/questions/21030922/meter-js-update-array-document-in-mini-mongo
        var reservation = {
            //userId : currentUserId,
            bookId : this._id,
            createdDate : Date.now(),
            endDate : null
        }
        // Books.update(this._id, {$push: {"reservations":reservation}});   
        // sAlert.info('bookReserved');   
        // console.log(Books.find().fetch());         
         Meteor.call('reserveBook', reservation);
    }
})


Template.book.onRendered(function(){
    var booksMain = $('.booksMain');
    booksMain.imagesLoaded(function(){
        booksMain.masonry({
            itemSelector: ".bookItem"            
        });        
    });
});

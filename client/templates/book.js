/// <reference path="../../typings/meteor/meteor.d.ts"/>

var SEARCH_PARAMS = 'searchParams';

Template.book.helpers({
    books: function(){
        var filter = Session.get(SEARCH_PARAMS) || "";
        console.log(filter);
        var result = {};
        if(filter != "")
        {
            var search = new RegExp(filter, 'i');
            result = Books.find({"title" : search });
            //$('.booksMain').masonry();
        }
        else
        {
            result = Books.find();
        }
                
        return result;        
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
    // var booksMain = $('.booksMain');
    // booksMain.imagesLoaded(function(){
    //     booksMain.masonry({
    //         itemSelector: ".bookItem",
    //         layoutMode : 'fitRows'
    //     });        
    // });    
    
});

// Tracker.autorun(function () {
//   Session.get(SEARCH_PARAMS)
//     var booksMain = $('.booksMain');
//     booksMain.imagesLoaded(function(){
//         booksMain.masonry({
//             itemSelector: ".bookItem"
//         });        
//     });    
// });


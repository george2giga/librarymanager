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
            userId : currentUserId,
            createdDate : Date.now(),
            endDate : null,
            dummy: "a",
       
        }
        Books.update(this._id, {$push: {"reservations":reservation}});   
        sAlert.info('bookReserved');   
        console.log(Books.find().fetch());  
    }
})


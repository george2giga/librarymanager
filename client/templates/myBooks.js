/// <reference path="../../typings/meteor/meteor.d.ts"/>

Template.myBooks.helpers({
     books: function(){
        var currentUserId = Meteor.userId();
        //var result = Books.find({'reservations.userId': this.currentUserId},{fields: {'reservations.endDate': null}});
        var result = Books.find({'reservations.userId': currentUserId, 'reservations.endDate': null});
        //console.log(Books.find({'reservations.userId': this.currentUserId}).fetch());  
        return result;
    }   
})

Template.myBooks.events({
    "click .returnBook": function(){
        //var currentUserId = Meteor.userId;
        //http://stackoverflow.com/questions/21030922/meter-js-update-array-document-in-mini-mongo
        //var result = Books.find({'reservations.userId': this.currentUserId},{fields: {'reservations.endDate': null}});
        
        // var rentedBooks = Books.find({'_id': this._id, 'reservations.userId': this.currentUserId},{fields: {'reservations.endDate': null}}).forEach(function(doc){
        //     doc.reservations.forEach(res)            
        // });   
        // var rentedBook = Books.findOne({'_id': this._id});
        // for(var reservation in rentedBook.reservations)
        // {
        //     if(reservation.userId === currentUserId)
        //     {
        //         reservation.endDate = Date.now();
        //     }
        // }
        //var rentedBook = Books.findOne({'_id': this._id, 'reservations.userId': this.currentUserId});
        
        //Books.update(this._id,{$set: {'reservations.1.endDate': Date.now()}})
        //Books.update(this._id,{$set: {'reservations.1.endDate': Date.now()}})
        
        //http://stackoverflow.com/questions/30866537/meteor-mongo-updating-nested-array
        // Books.update({"_id": this._id, "reservations.userId" : Meteor.userId()}, 
        // {
        //     "$set": {
        //         "reservations.$.endDate" : Date.now()
        //     }
        // });           
        Meteor.call('releaseBook', this._id);
        
        sAlert.info('Book returned');   
        console.log(Books.find().fetch());  
    }
})
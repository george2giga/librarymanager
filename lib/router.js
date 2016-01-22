/// <reference path="../typings/meteor/meteor.d.ts"/>
Router.configure({
    layoutTemplate: 'mainLayout',
    
    waitOn: function() {
    return [
      Meteor.subscribe('publicBooks')
      //Meteor.subscribe('privateLists')
    ];
  }
});


Router.route('/', function () {
  this.render('book');
});

Router.route('authJoin');
Router.route('authLogin');
Router.route('myBooks');

// Router.route('join');
// Router.route('signin');
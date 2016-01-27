/// <reference path="../../typings/meteor/meteor.d.ts"/>

var CHART_RESULTS = "charResults"; 

Template.stats.onCreated(function(){
   Session.set(CHART_RESULTS, {}); 
});


Template.stats.helpers({
    //http://www.highcharts.com/blog/195-meteor-standalone
   createChart: function(){
       
    var result = [];
    //Meteor.call('reservationStats');
    
    var cbk = function(data){
         Meteor.defer(function(){
         // Create standard Highcharts chart with options:
            Highcharts.chart('chart', {
                series: [{
                    type: 'pie',
                    data: data
                }]
            });      
        });        
    };
     
    Meteor.call('reservationStats', function (error, data) {
        if(error)
        {
            console.log(error);
        }
        else
        {
            // debugger;
            // Session.set(CHART_RESULTS, data);            
            cbk(data);
        }            
     });
    
    
     
    //  //defer and create chart
    //  Meteor.defer(function(){
    //      // Create standard Highcharts chart with options:
    //    
    //  });        
   }
   
       
});

Template.stats.onRendered(function(){
     Highcharts.chart('chart', {
          series: [{
            type: 'pie',
            data: Session.get(CHART_RESULTS)
          }]
    });         
});


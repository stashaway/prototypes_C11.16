var app = angular.module('servicesApp', []);
app.controller('servicesController', function($http, $log){
    var self=this;

    self.makeQueryString = function(theInput){
      return 'https://itunes.apple.com/search?term='+theInput+'&callback=JSON_CALLBACK';
    };

    self.getArtist = function(){
        self.queryString = self.makeQueryString($("#user_input").val());
        $http({
            url: self.queryString,
            cache: false,
            method: 'JSONP'
        })
        .then(
            function(response){
                self.data=response.data.results;
                $log.log("Success",self.data);
            },
            function(response){
                $log.log("Error",response);
            }
    )}
});
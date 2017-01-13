var app = angular.module('sgtApp', []);

app.provider('sgtData', function() {
    //Create a variable to hold this
    var self = this;
    //Create a variable to hold your api key but set it to an empty string
    self.apiKey = '';
    //Create a variable to hold the API url but set it to an empty string
    self.apiURL = '';

    //Add the necessary services to the function parameter list
    self.$get = function ($http, $q, $log) {
        //return an object that contains a function to call the API and get the student data
        //Refer to the prototype instructions for more help
        return {
            call_api: function () {
                var data = "api_key=" + self.apiKey;
                var defer = $q.defer();
                $http({
                    url: self.apiURL,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    data: data,
                    method: "POST"
                }).then(function (resp) {
                    $log.info('Data received: ', resp);
                    defer.resolve(resp.data);
                }, function (err) {
                    $log.error('Error: ', err);
                    defer.reject(err);
                });
                return defer.promise;
            }
        };
    };
});

//Config your provider here to set the api_key and the api_url
app.config(function(sgtDataProvider){
    sgtDataProvider.apiURL = 'http://s-apis.learningfuze.com/sgt/get';
    sgtDataProvider.apiKey = 'A7wkk0VAdH';
});

//Include your service in the function parameter list along with any other services you may want to use
app.controller('ioController', function($log, sgtData){
    //Create a variable to hold this, DO NOT use the same name you used in your provider
    var contSelf=this;
    //Add an empty data object to your controller, make sure to call it 'data'
    contSelf.data = {};

    //Add a function called getData to your controller to call the SGT API
    //Refer to the prototype instructions for more help
    contSelf.getData = function(){
        sgtData.call_api().then(
            function(data){
                contSelf.data=data;
            },
            function(err){
                $log.log("Error!", err);
            }
        )
    }
});
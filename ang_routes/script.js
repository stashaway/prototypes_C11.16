// Create the route module and name it routeApp
var app = angular.module('routeApp',["ngRoute"]);
// Config the routes
app.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: 'pages/home.html',
            controller: 'homeCtrl'
        }).when('/about', {
        templateUrl: 'pages/about.html',
        controller: 'aboutCtrl'
        }).when('/contact', {
            templateUrl: 'pages/contact.html',
            controller: 'contactCtrl'
    }).otherwise({
        redirectTo: '/'
    });
    // route for the home page
    // route for the about page
    // route for the contact page
});

// Create the controllers for the different pages below
app.controller('routeCtrl', function($scope) {
    $scope.message = "lorem ipsum";
}).controller('homeCtrl', function($scope) {
    $scope.message = "Main page reached";
}).controller('aboutCtrl', function($scope) {
    $scope.message = "About our stuffs!";
}).controller('contactCtrl',function($scope) {
    $scope.message = "Talk to me";
});

// home page controller
    // Create a message to display in the view
// about page controller
    // Create a message to display in the view
// contact page controller
    // Create a message to display in the view

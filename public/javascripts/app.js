var app = angular.module('testapp', ['ngRoute','testctrl','testservice','Credentails']);

app.config(['$routeProvider','$locationProvider',
  function($routeProvider,$locationProvider) {
    $routeProvider.
      when('/two', {
        templateUrl: '../templates/two.html',
        controller: 'twocntrl'
        
      }).
      when('/index', {
        templateUrl: '../templates/home.html',
        controller: 'home'

      }).
      when('/three', {
        templateUrl: '../templates/three.html',
        controller: 'twocntrl'
      }).
      when('/addevent', {
        templateUrl: '../templates/addevent.html',
        controller: 'eventController'
      }).
      otherwise({
        redirectTo: '/index'
      });
    $locationProvider.html5Mode(true);

  }]);

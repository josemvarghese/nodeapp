var app = angular.module('testapp', ['ngRoute','testctrl','testservice']);

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
      otherwise({
        redirectTo: '/index'
      });
    $locationProvider.html5Mode(true);

  }]);

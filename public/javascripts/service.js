var service = angular.module('testservice', []);

service.factory("UserService", function() {
  var users = ["Peter", "Daniel", "Nina"];

  return {
    all: function() {
      return users;
    },
    first: function() {
      return users[0];
    }
  };
});

service.factory("testservice", function() {
  
  return {
    name: function() {
      return "Jose M Varghese";
    },
    message: function() {
      return "Hi this is Jose ";
    }
  };
});

service.service('movie', function () {
  this.title = 'The Matrix';
});
var ctrl = angular.module('testctrl', []);



ctrl.controller('twocntrl',function($scope,UserService,testservice){
		$scope.test = "hello welcome to angular js";
		$scope.firstuser = UserService.first();
		$scope.name = testservice.name();
		$scope.mesg  = testservice.message();
});	
ctrl.controller('home',function($scope,UserService,movie){
		// $scope.test = "hello welcome to home page";
		// $scope.allusers = UserService.all();
		// $scope.firstuser = UserService.first();
		// $scope.movie = movie.title;

		$scope.signUp = function(){
			console.log($scope.email);
			console.log($scope.password);
		}


});	

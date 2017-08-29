var app = angular.module('testctrl', []);



app.controller('twocntrl',['$scope','UserService','testservice',function($scope,UserService,testservice){
		$scope.test = "hello welcome to angular js";
		$scope.firstuser = UserService.first();
		$scope.name = testservice.name();
		$scope.mesg  = testservice.message();
}]);	
app.controller('home',['$scope','UserService','movie',function($scope,UserService,movie){
		// $scope.test = "hello welcome to home page";
		// $scope.allusers = UserService.all();
		// $scope.firstuser = UserService.first();
		// $scope.movie = movie.title;

		$scope.signUp = function(){
			console.log($scope.email);
			console.log($scope.password);
		}


}]);	
app.controller('eventController',['$scope','$http','UserService','movie','NodeAppBaseUrl',function($scope,$http,UserService,movie,NodeAppBaseUrl){

		$scope.addEvent = function(event) {
			event.preventDefault();
			console.log("succ");
			console.log($scope.eventName);
			console.log($scope.eventDesc);
			console.log($scope.createdBy);
			$http({
		      method: 'POST',
		      url: NodeAppBaseUrl.url + '/api/addevent/',
		      data: {
		        eventName: $scope.eventName,
		        eventDesc: $scope.eventDesc,
		        createdBy: $scope.createdBy
		      }
		    }).then(function success(response) {

		      // $scope.data = response.data;
		      // if ($scope.data.result == 1) {
		      //   //console.log("send mail");
		      //   $scope.orgName = $scope.orgInfo.company_name;
		      //   $scope.count = $scope.delegateCount;
		      //   $scope.delegateCount='';
		      //   $scope.orgInfo='';
		      //   $scope.changeEvent('');
		      //   $scope.submitted=false;
		      //   $scope.includeAdspace=false;
		      //   // $scope.captchaInvalid = true;
		      //   $("#invite-popup").modal('show');
		      //   $('#loading').hide();
		      //   $('#container').fadeIn();
		      // } else if ($scope.data.result == 0) {
		      //   //console.log("error");
		      //   $scope.errormsg = true;
		      //   $scope.showerror = response.data.message;
		      //   $('#loading').hide();
		      //   $('#container').fadeIn();
		      // }
		    });


		};


}]);	

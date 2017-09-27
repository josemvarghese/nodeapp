var app = angular.module('testctrl', [ ]);



app.controller('twocntrl',['$scope','UserService','testservice',function($scope,UserService,testservice){
		$scope.test = "hello welcome to angular js";
		$scope.firstuser = UserService.first();
		$scope.name = testservice.name();
		$scope.mesg  = testservice.message();
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
		    	console.log(response);

		      // $scope.data = response.data;
		      if (response.data.result == 1) {
		        window.location="/events";
		      } 
		      // else if ($scope.data.result == 0) {
		      //   //console.log("error");
		      //   $scope.errormsg = true;
		      //   $scope.showerror = response.data.message;
		      //   $('#loading').hide();
		      //   $('#container').fadeIn();
		      // }
		    });


		};


}]);	
app.controller('indexController',['$scope','$http','UserService','movie','NodeAppBaseUrl',function($scope,$http,UserService,movie,NodeAppBaseUrl){

		$scope.signUp = function() {
			event.preventDefault();
			console.log("succ");
			$http({
		      method: 'POST',
		      url: NodeAppBaseUrl.url + '/api/signup/',
		      data: {
		        email: $scope.email,
		        password: $scope.password
		      }
		    }).then(function success(response) {
		    	console.log(response)
		    	if(response.data.result==1){
		    		window.location="/login";
		    	}

		    });


		};


}]);
app.controller('LoginController',['$scope','$http','UserService','movie','NodeAppBaseUrl',function($scope,$http,UserService,movie,NodeAppBaseUrl){
	
	$scope.signIn = function() {
		$http({
	      method: 'POST',
	      url: NodeAppBaseUrl.url + '/api/signin/',
	      data: {
	        email: $scope.email,
	        password: $scope.password
	      }
	    }).then(function success(response) {
	    	console.log(response)
	    	if(response.data.result==1){
	    		window.location="/events";
	    	}
	    });
	};

}]);
app.controller('ListController',['$scope','$http','UserService','GetDataService','NodeAppBaseUrl',function($scope,$http,UserService,GetDataService,NodeAppBaseUrl){
	
	$scope.getEvents = function() {
		GetDataService.getEvents().then(function(res) {
			// console.log(res);
	      if (res.result == 1) {
	      	console.log(res);
	        $scope.eventList = res.data;
	        // $scope.emailprf = res.preferences;
	        // $scope.resetsetting();
	      }
	    });
	};
	$scope.getEvents();

}]);
// 
app.controller('ChatController',['$scope','$http','UserService','GetDataService','NodeAppBaseUrl',function($scope,$http,UserService,GetDataService,NodeAppBaseUrl){
	
	$scope.sendMsg = function() {

	};

}]);
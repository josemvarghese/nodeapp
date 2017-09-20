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

service.service('GetDataService',function($http,NodeAppBaseUrl,$filter) {

    this.getDataParams= function(urlval,paramval){
        var returnval= $http({
            method:'GET',
            url:NodeAppBaseUrl.url+'/'+urlval+'/',
            params:paramval
        }).then(function success(response){
           if(response.status==-1 || response.data==null){
                return {result:0};
            }
            if(response.data.result == undefined && response.data.objects == undefined){
                return {result:0};
            }
            if(response.data.objects != undefined){
                response.data.result=1;
            }
            return response.data;
        },function failed(response){
            if(response.status==-1 || response.data==null){
                return {result:0,};
            }
            if(response.data.message=="Anonymous user")
              return {result:0,message:response.data.message};
            return {result:0};
        });    
        return returnval;
    };
    this.getData= function(urlval){
        var s=this;
         var returnval= $http({
            method:'GET',
            url:NodeAppBaseUrl.url+'/'+urlval+'/'
        }).then(function success(response){
          //console.log(response);
            if(response.status==-1 || response.data==null){
                return {result:0};
            }
            if(response.data.result == undefined && response.data.objects == undefined){
                return {result:0};
            }else if(response.data.result == 5){
                //window.location ="/sign-in";
                return response.data;
            }
            return response.data;
        },function failed(response){
            if(response.status==-1 || response.data==null){
                return {result:0};
            }
            if(response.data.message=="Anonymous user")
              return {result:0,message:response.data.message};
            return {result:0};
        });  
        
        return returnval;
    };

    this.getEvents = function(){
      return this.getData('api/events');
    }

});
(function(){
  // loading my app module
  //var home_ctrl = angular.module("home_ctrl", []);
  
  var HomeController = function ($scope, $log){
      $scope.lol = "from ng controller";
      
      $log.info("homecontroller happened");
  };
  
  angular.module('_HOME').controller("HomeController", HomeController);
}());
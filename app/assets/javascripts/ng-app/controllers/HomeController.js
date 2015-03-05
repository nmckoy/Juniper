(function(){
  // loading my app module
  var app = angular.module("Rangular");
  
  var HomeController = function ($scope, $log){
      $scope.test = ['this', 'is', 'a', 'test'];
      $scope.lol = "lol";
      
      $log.info("homecontroller happened");
  };
  
  app.controller("HomeController", HomeController);
}());
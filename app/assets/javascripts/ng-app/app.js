(function(){
  // creating the new app module
  var app = angular.module("Rangular", ["ngRoute", "templates"]);

  var routes = function($routeProvider, $locationProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "home.html",
        controller: "HomeController"
      });
      
      //$locationProvider.html5mode(true); // research please
  };
  
  app.config(routes);
  
}());


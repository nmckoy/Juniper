(function(){
  // creating the new app module
  var app = angular.module("Rangular", 
  ["ngRoute", "templates", "_CTRL", "_SRVC", "_DIRC",
    "ng_rails_csrf"]);

  var routes = function($routeProvider, $locationProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "home.html",
        controller: "HomeController"
      })
      // profile stuff
      .when("/profile/:id", {
        templateUrl: "user/show.html",
        controller: "UserShowController"
      })
      // EDIT: 03/11/2015 changed the way to edit user
      // no new page for edit because this is JS bitch w00t
      // .when("/profile/:id/edit", {
      //   templateUrl: "user/edit.html",
      //   controller: "UserEditController"
      // })
      // slogs stuff
      .when("/slogs", {
        templateUrl: "slog/index.html",
        controller: "SlogIndexController"
      })
      .when("/slogs/post", {
        templateUrl: "slog/new.html",
        controller: "SlogNewController"
      })
      .when("/404", {
        templateUrl: "static/404.html"
      })
      .otherwise({
        redirectTo: "/"
      }
    );
    
    // $locationProvider.hashPrefix("@");
    // uses html5 strategy 
    // research: http://stackoverflow.com/questions/14319967/angularjs-routing-without-the-hash
    $locationProvider.html5Mode({ enabled: true, requireBase: false });
  };
  
  app.config(routes);
  
  
}());


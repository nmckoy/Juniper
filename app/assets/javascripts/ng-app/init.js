//Start by defining the main module and adding the module dependencies
angular.module(ApplicationConfiguration.applicationModuleName, ApplicationConfiguration.applicationModuleVendorDependencies);

// routes
angular.module(ApplicationConfiguration.applicationModuleName).config(['$routeProvider', function($routeProvider) {
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
    .when("/slogs/:id", {
      templateUrl: "slog/show.html",
      controller: "SlogShowController"
    })
    .when("/404", {
      templateUrl: "static/404.html"
    })
    .otherwise({
      redirectTo: "/"
    }
  );
}]);

// Setting HTML5 Location Mode
angular.module(ApplicationConfiguration.applicationModuleName).config(['$locationProvider',
	function($locationProvider) {
    // $locationProvider.hashPrefix("@");
    // uses html5 strategy 
    // research: http://stackoverflow.com/questions/14319967/angularjs-routing-without-the-hash
    $locationProvider.html5Mode({ enabled: true, requireBase: false });
	}
]);

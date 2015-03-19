(function(){
  var user_model_srvc = angular.module("user_model_srvc", ["ngResource"]);
  
  // optional parameter to pass are
  // currentuser: true - to get current logged in user
  var User = function($resource) {
    return $resource('https://juniper-nmckoy.c9.io/users/:id.json', 
                      { id: "@id" },
                      { update : {method: "PUT"} }
                    );
  };
  
  user_model_srvc.factory("User", User);
}());
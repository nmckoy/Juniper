(function(){

  var ng_rails_csrf = angular.module('ng_rails_csrf', []);
  
  var csrf = function($httpProvider) {
        var authToken;
        authToken = $('meta[name="csrf-token"]').attr('content');
        $httpProvider.defaults.headers.common['X-CSRF-TOKEN'] = authToken;
  };
  
  ng_rails_csrf.config(csrf);
  
}());
(function(){
  
  var csrf = function($httpProvider) {
        var authToken;
        authToken = $('meta[name="csrf-token"]').attr('content');
        $httpProvider.defaults.headers.common['X-CSRF-TOKEN'] = authToken;
  };
  
  angular.module('Rangular').config(csrf);
  
}());
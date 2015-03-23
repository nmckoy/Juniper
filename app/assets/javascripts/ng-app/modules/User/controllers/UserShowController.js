angular.module('_USER')
  .controller('UserShowController', ['$scope', '$log', '$routeParams', '$location', 'User', 'Slog',
    function UserShowController($scope, $log, $routeParams, $location, User, Slog){
      //$log.info("in profilectrl");
      
      $scope.user_slogs = [];
      User.get({id: $routeParams.id})
        .$promise.then(function(data) {
          // success
          $scope.user = data;
        }, function(error) {
          $log.info(error.status);
          if (error.status === 404) {
            $location.path("/404");
          }
      });
      
      Slog.get({user_slogs: true, user_id: $routeParams.id}, 
        function(){
        //$log.info("get callback");
        // $log.info($scope.slogs);
      }).$promise.then(function(data){
        //$log.info("promise callback");
        //$log.info("slogs" + data.slogs);
        $scope.user_slogs = data.slogs;
      }, function(error) {
        // error handling
        $scope.user_slogs = null;
      });
      
      
      
    }
  ]);
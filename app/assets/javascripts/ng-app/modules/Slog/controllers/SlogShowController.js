angular.module('_SLOG')
  .controller('SlogShowController', ['$scope', '$log', '$routeParams', 'Slog', 'User', 
    function SlogShowController($scope, $log, $routeParams, Slog, User){
      
      $scope.slog = null;
      $scope.user = null;
      Slog.get({id: $routeParams.id})
        .$promise.then(function(data) {
          // $log.info(data);
          $scope.slog = data;
          // get user
          User.get({id: $scope.slog.user_id})
            .$promise.then(function(data) {
              $scope.user = data;
            }, function(error) {
          
          });
        }, function(error){
          $log.error('there was an error getting the slog ' +
                      error);
      });
      
      
      
    }
  ]);
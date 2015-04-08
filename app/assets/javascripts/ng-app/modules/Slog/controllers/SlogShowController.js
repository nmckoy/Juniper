angular.module('_SLOG')
  .controller('SlogShowController', ['$scope', '$log', '$routeParams', 'Slog', 'User', 
    function SlogShowController($scope, $log, $routeParams, Slog, User){
      
      Slog.get({id: $routeParams.id, with_user: true})
        .$promise.then(function(data) {
          // $log.info(data);
          $scope.slog = data;
        }, function(error){
          $log.error('there was an error getting the slog ' +
                      error);
          $scope.error = "error";
      });
    }
  ]);
angular.module('_SLOG')
  .controller('SlogIndexController', ['$scope', '$log', '$location', 'Slog', 'User',
    function SlogIndexController($scope, $log, $location, Slog, User){
      
      Slog.query({with_user: true})
        .$promise.then(function(slogs){
          //$log.info("slogssss " + slogs);
          // for (var i in slogs) {
          //   $log.info(slogs[i].user);
          // }
          $scope.slogs = slogs;
        }, function(error) {
          // log error
          $scope.errors = error;
          $scope.slogs = [];
        });
    }
  ]);
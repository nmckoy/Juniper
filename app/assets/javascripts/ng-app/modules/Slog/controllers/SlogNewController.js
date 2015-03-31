angular.module('_SLOG')
  .controller('SlogNewController', ['$scope', '$location', '$log', 'User', 'Slog',
    function SlogNewController($scope, $location, $log, User, Slog) {
      //$log.info('in slognewctrl');
      
      //var user = {};
      $scope.slog_types = [{
          name: 'ride',
          value: 'R'
        },{
          name: 'drive',
          value: 'D'
        }];
        
      User.get({currentuser: true})
        .$promise.then(function(currentuser){
          $log.info(currentuser);
          $scope.currentUser = currentuser;
        }, function(error){
          $log.info(error);
      });
      
      $scope.save = function(){
        var newSlog = new Slog;
        
        newSlog.description = $scope.description;
        newSlog.departure_date = $scope.departure_date;
        newSlog.slog_type = $scope.slog_type;
        newSlog.user_id = $scope.currentUser.id;
        // $log.info(newSlog);
        newSlog.$save(function(success){
          // $log.info(success);
          // $log.info(success.status);
          // $log.info(success.success);
          $location.path('/profile/'+$scope.currentUser.id);
        }, function(error) {
          $log.error('error ' + error);
          $log.error('save failed with error ' + error.data);
          $scope.error = error.data;
          $location.path('/slogs/post');
        });
      };
      
    }
  ]);
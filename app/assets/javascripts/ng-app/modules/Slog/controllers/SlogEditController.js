angular.module('_SLOG')
  .controller('SlogEditController', ['$scope', '$log', '$routeParams', 'Slog',
    function SlogEditController($scope, $log, $routeParams, Slog){
      //$log.info();
    
      $scope.editDescFlag = null;
      // opening input text for editing
      $scope.editDesc = function(currentUser) {
        //$log.info('param is ' + currentUser);
        if (currentUser) {
          $scope.editDescFlag = true;
        }
      };
      
      // watching my flags change
      $scope.$watch('editDescFlag', function() {
        //$log.info('edit flag changed to ' + $scope.editDescFlag);
        if ($scope.editDescFlag === false) {
          update();
        }
      });
      
      var update = function(){
        //$log.info('slog edit update called');
        Slog.get({id: $routeParams.id}, function(slogEdit){
          var saveDesc = slogEdit.description;
          slogEdit.description = $scope.slog.description;
          
          slogEdit.$update().then(function(data){
            $log.info('slog updated with data: ' + data.data);
            
          }, function(error){
            $log.error('error updating slog with error: ' + error.data);
            // set desc back to previous desc
            $scope.slog.description = saveDesc;
            
            $scope.error = error.data;
            
          });
        });
      };
    }
  ]);
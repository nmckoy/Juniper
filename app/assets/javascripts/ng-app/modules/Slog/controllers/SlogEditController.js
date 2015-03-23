angular.module('_SLOG')
  .controller('SlogEditController', ['$scope', '$log', 'Slog', 'User',
    function SlogEditController($scope, $log, Slog, User){
      $log.info('slogedit');
    
      $scope.edit_desc_flag = null;
      // opening input text for editing
      $scope.edit_desc = function() {
        $scope.edit_desc_flag = true;
      };
    }
  ]);
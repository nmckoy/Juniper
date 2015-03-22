(function() {
  
  var SlogEditController = function($log, $scope, Slog, User){
    $log.info("slogedit");
    
    $scope.edit_desc_flag = null;
    // opening input text for editing
    $scope.edit_desc = function() {
      $scope.edit_desc_flag = true;
    };
  };
  
  angular.module("_SLG")
    .controller("SlogEditController", SlogEditController);
}());
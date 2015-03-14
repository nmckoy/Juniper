(function() {
  var slog_index_ctrl = angular.module("slog_index_ctrl", ["_SRVC"]);
  
  var SlogIndexController = function($scope, $log, $location,
                                      Slog, User){
    $scope.lol = 'lol';
    $scope.slogs = null;
    
    Slog.query({with_user: true}).$promise.then(function(slogs){
      //$log.info("slogssss " + slogs);
      // for (var i in slogs) {
      //   $log.info(slogs[i].user);
      // }
      $scope.slogs = slogs;
    }, function(error) {
      // log error
      $scope.slogs = [];
    });
  };
  
  slog_index_ctrl.controller("SlogIndexController", SlogIndexController);
}());
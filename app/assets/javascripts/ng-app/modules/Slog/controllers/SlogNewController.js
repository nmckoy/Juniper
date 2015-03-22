(function(){
  
  var SlogNewController = function($scope, Slog, $location, 
                                    $log, User) {
    $log.info("in slognewctrl");
    $scope.error = null;
    var user = {};
    $scope.slog_types = [{
        name: "ride",
        value: "R"
      },{
        name: "drive",
        value: "D"
      }];
      
    User.get({currentuser: true})
      .$promise.then(function(currentuser){
        // $log.info(currentuser);
        user = currentuser;
      }, function(error){
        $log.info(error);
    });
    
    $scope.saveOrUpdate = function(){
      var newSlog = new Slog;
      
      newSlog.description = $scope.desc;
      newSlog.departure_date = $scope.departure_date;
      newSlog.slog_type = $scope.slog_type;
      newSlog.user_id = user.id;
      // $log.info(newSlog);
      newSlog.$save(function(success){
        // $log.info(success);
        // $log.info(success.status);
        // $log.info(success.success);
        $location.path("/profile/"+user.id);
      }, function(error) {
        $log.error("error " + error);
        $log.error("save failed with error " + error.data);
        $scope.error = error.data;
        $location.path("/slogs/post");
      });
      
    };
    
  };
  
  angular.module("_SLG")
    .controller("SlogNewController", SlogNewController);
}());
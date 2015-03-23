angular.module('_HOME')
  .controller('HomeController', ['$scope', '$log',
    function HomeController($scope, $log) {
      $scope.lol = "from ng controller";
      
      $log.info("homecontroller happened");
    }
  ]);

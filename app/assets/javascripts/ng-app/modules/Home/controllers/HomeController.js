angular.module('_HOME')
  .controller('HomeController', ['$scope', '$log',
    function HomeController($scope, $log) {
      $scope.lol = "lol";
      
      $log.info("homecontroller happened");
    }
  ]);

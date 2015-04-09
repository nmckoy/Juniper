angular.module('_HOME')
  .controller('HomeController', ['$scope', '$log', 'uiGmapGoogleMapApi',
    function HomeController($scope, $log, uiGmapGoogleMapApi) {
      $scope.lol = "lol";
      //$log.info("homecontroller happened");
      $scope.mapOptions = ApplicationConfiguration.mapOptions;
      
      $scope.map = {
        center: {
          latitude: 45,
          longitude: -73
        },
        zoom: 8
      };
      
      uiGmapGoogleMapApi.then(function(maps){
        $log.info('maps log: '+maps);
      });
      
    }
  ]);

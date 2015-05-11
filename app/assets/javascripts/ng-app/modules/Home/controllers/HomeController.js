angular.module('_HOME')
  .controller('HomeController', ['$scope', '$log', 'uiGmapGoogleMapApi',
    function HomeController($scope, $log, uiGmapGoogleMapApi) {
      $scope.lol = "lol";
      //$log.info("homecontroller happened");
      $scope.mapOptions = ApplicationConfiguration.mapOptions;
      
      $scope.map = {
        center: {
          latitude: 38.8930851,
          longitude: -77.0363992
        },
        zoom: 12
      };
      
      uiGmapGoogleMapApi.then(function(maps){
        $log.info('maps log: '+maps);
      });
      
    }
  ]);

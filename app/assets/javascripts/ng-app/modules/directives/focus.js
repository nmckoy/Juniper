
// camel case directive here becomes to snake case on html attribute
angular.module(ApplicationConfiguration.applicationModuleName)
  // idk why i cant rename it from focus yet
  .directive('focus', ['$timeout', '$parse',
    function focus($timeout, $parse) {
      return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            scope.$watch(attrs.focus, function(newValue, oldValue) {
                if (newValue) { element[0].focus(); }
            });
            element.bind("blur", function(e) {
                $timeout(function() {
                    scope.$apply(attrs.focus + "=false"); 
                }, 0);
            });
            element.bind("focus", function(e) {
                $timeout(function() {
                    scope.$apply(attrs.focus + "=true");
                }, 0);
            });
        }
      };
    }]);
describe('HomeController', function() {
  var controller, scope;
  beforeEach(module('Rangular'));
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    controller = $controller('HomeController', {
      $scope: scope
    });
  }));
  
  it('contains string lol in scope', function() {
    expect()
  });
});
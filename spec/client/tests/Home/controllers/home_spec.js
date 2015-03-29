describe('HomeController', function() {
  
  var HomeController, scope;
  
  beforeEach(module(ApplicationConfiguration.applicationModuleName));
  
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    
    HomeController = $controller('HomeController', {
      $scope: scope
    });
    
  }));
  
  it('should have string lol in scope variable lol', function() {
    expect(scope.lol).to.equal('lol');
  });
});
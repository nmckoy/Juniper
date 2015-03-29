describe('SlogShowController', function() {
  
  var SlogShowController, 
      scope, 
      $routeParams, 
      Slog, 
      User,
      $httpBackend,
      sampleSlog,
      sampleUser,
      $controller;
  
  beforeEach(module(ApplicationConfiguration.applicationModuleName));
  
  beforeEach(inject(function(_$controller_, $rootScope, _$httpBackend_, _$routeParams_, _Slog_, _User_){
    
    scope = $rootScope.$new();
    
		$httpBackend = _$httpBackend_;
    $routeParams = _$routeParams_;
    $controller  = _$controller_;
    Slog         = _Slog_;
    User         = _User_;
    
    sampleUser = new User({
      id: '1',
      name: 'init',
      email: 'init@init.com',
      provider: 'init'
    });
    
    sampleSlog = new Slog({
      id: '1',
      user_id: sampleUser.id,
      description: 'init',
      slog_type: 'init',
      departure_date: 'init'
    });

    $routeParams.id = sampleSlog.id;
    
  }));
  
  it('should get one slog', function(done) {
    var mockUserURL = 'https://juniper-nmckoy.c9.io/users/' + sampleUser.id + '.json';
    $httpBackend.when('GET', mockUserURL).respond(sampleUser);
        
    var mockSlogURL = 'https://juniper-nmckoy.c9.io/slogs/' + sampleSlog.id + '.json';
    $httpBackend.when('GET', mockSlogURL).respond(sampleSlog);    
    
    SlogShowController = $controller('SlogShowController', {
      $scope: scope
    });
    
    $httpBackend.flush();

    expect(scope.slog).to.include(sampleSlog);
    
    done();
    
  });
  
  it('should set errors', function(done) {
    var mockSlogURL = 'https://juniper-nmckoy.c9.io/slogs/' + sampleSlog.id + '.json';
    $httpBackend.when('GET', mockSlogURL).respond(500);
    
    SlogShowController = $controller('SlogShowController', {
      $scope: scope
    });
    
    $httpBackend.flush();
    
    expect(scope.error).to.exist;
    
    done();
  });
  
});
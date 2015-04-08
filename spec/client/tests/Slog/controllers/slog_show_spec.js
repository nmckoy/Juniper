describe('SlogShowController', function() {
  
  var SlogShowController, 
      scope, 
      $routeParams, 
      Slog, 
      User,
      $httpBackend,
      sampleSlog,
      sampleUser,
      $controller,
      mockUserURL,
      mockSlogURL;
  
  beforeEach(module(ApplicationConfiguration.applicationModuleName));
  
  beforeEach(inject(function(_$controller_, $rootScope, 
                              _$httpBackend_, _$routeParams_,
                              _Slog_, _User_){
    
    scope = $rootScope.$new();
    
		$httpBackend = _$httpBackend_;
    $routeParams = _$routeParams_;
    $controller  = _$controller_;
    Slog         = _Slog_;
    User         = _User_;
    
    SlogShowController = function(){
      return $controller('SlogShowController', {
        $scope: scope
      });
    };
    
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
      departure_date: '1/1/2015'
    });

    $routeParams.id = sampleSlog.id;
    
    mockUserURL = 'https://juniper-nmckoy.c9.io/api/users/' + sampleUser.id + '.json';
    mockSlogURL = 'https://juniper-nmckoy.c9.io/api/slogs/' + $routeParams.id + '.json?with_user=true';
    
  }));
  
  it('should get one slog', function(done) {
    $httpBackend.when('GET', mockUserURL).respond(sampleUser);
    $httpBackend.when('GET', mockSlogURL).respond(sampleSlog);    
    
    SlogShowController();
    
    $httpBackend.flush();
    
    expect(scope.slog).to.include(sampleSlog);
    
    done();
    
  });
  
  it('should set errors when GET fails', function(done) {
    $httpBackend.when('GET', mockSlogURL).respond(404);
    
    SlogShowController();
    
    $httpBackend.flush();
    
    expect(scope.error).to.exist;
    
    done();
  });
  
});
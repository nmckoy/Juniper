describe('SlogIndexController', function(){
  
  var SlogIndexController,
      scope,
      Slog,
      User,
      $httpBackend,
      $controller,
      sampleUsers,
      sampleSlogs,
      mockSlogsURL;
  
  beforeEach(module(ApplicationConfiguration.applicationModuleName));
  
  beforeEach(inject(function(_$controller_, $rootScope, 
                              _$httpBackend_, _Slog_, _User_){
                                
    mockSlogsURL = 'https://juniper-nmckoy.c9.io/api/slogs.json?with_user=true';
    scope = $rootScope.$new();
    
    $httpBackend = _$httpBackend_;
    $controller  = _$controller_;
    Slog         = _Slog_;
    User         = _User_;
    
    sampleUsers = [new User({
      id: '1',
    }), new User({
      id: '2',
    })];
    
    sampleSlogs = [new Slog({
      id: '1',
      user_id: sampleUsers[0].id,
      description: 'init',
      slog_type: 'init',
      departure_date: 'init',
      user: sampleUsers[0]
    }), new Slog({
      id: '2',
      user_id: sampleUsers[1].id,
      description: 'init2',
      slog_type: 'init2',
      departure_date: 'init2',
      user: sampleUsers[1]
    })];
  }));
  
  it('should get all slogs', function(done) {
    
    $httpBackend.when('GET', mockSlogsURL).respond(sampleSlogs);
    
    SlogIndexController = $controller('SlogIndexController', {
      $scope: scope
    });
    
    $httpBackend.flush();
    
    // array assertion
    expect(scope.slogs).to.deep.include.members(sampleSlogs);
    
    done();
  });
  
  it('should set errors when GET fails', function(done) {
    $httpBackend.when('GET', mockSlogsURL).respond(404);
    
    SlogIndexController = $controller('SlogIndexController', {
      $scope: scope
    });
    
    $httpBackend.flush();
    
    expect(scope.errors).to.exist;
    expect(scope.slogs).to.be.empty;
    
    done();
  });
});
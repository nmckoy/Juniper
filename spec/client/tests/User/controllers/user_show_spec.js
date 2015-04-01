describe('UserShowController', function(){
  
  var UserShowController,
      Slog,
      User,
      scope,
      $controller,
      $routeParams,
      $location,
      $httpBackend,
      mockSlogURL,
      mockUserURL,
      sampleUser, 
      sampleSlogs;
      
  beforeEach(module(ApplicationConfiguration.applicationModuleName));
  
  beforeEach(inject(function($rootScope, _$routeParams_, _$location_,
                              _$controller_, _$httpBackend_,
                                _Slog_, _User_) {
    scope = $rootScope.$new();
    
    $controller  = _$controller_;
    $routeParams = _$routeParams_;
    $location    = _$location_;
    $httpBackend = _$httpBackend_;
    Slog         = _Slog_;
    User         = _User_;
    
    UserShowController = function(){
      return $controller('UserShowController', {
        $scope: scope
      });
    };
    
    sampleUser = new User({
      id: '1',
      name: 'init',
      email: 'init@init.com',
      provider: 'init'
    });
    
    sampleSlogs = {
      slogs:
        [new Slog({
          id: '1',
          user_id: sampleUser.id,
          description: 'init',
          slog_type: 'init',
          departure_date: '1/1/2015'
        }), new Slog({
          id: '2',
          user_id: sampleUser.id,
          description: 'init2',
          slog_type: 'init',
          departure_date: '1/1/2015'
        })]
    };
    
    $routeParams.id = sampleUser.id;
    
    mockSlogURL = 'https://juniper-nmckoy.c9.io/slogs.json?user_id='+$routeParams.id;
    mockUserURL = 'https://juniper-nmckoy.c9.io/users/'+$routeParams.id+'.json';
  }));
  
  it('should start with an empty list of slogs',
    function(done){
      UserShowController();
      
      expect(scope.user_slogs).to.be.empty;
      
      done();
    }
  );
  
  it('should GET user',
    function(done) {
      $httpBackend.when('GET', mockUserURL)
        .respond(sampleUser);
      $httpBackend.when('GET', mockSlogURL)
        .respond(sampleSlogs);
        
      UserShowController();
      
      $httpBackend.flush();
      
      expect(scope.user).to.include(sampleUser);
      
      done();
    }
  );
  
  it('should go to 404 page if user doesnt exist',
    function(done){
      $httpBackend.when('GET', mockUserURL)
        .respond(404); // cant find a user
      $httpBackend.when('GET', mockSlogURL)
        .respond(sampleSlogs);
        
      UserShowController();
      
      $httpBackend.flush();
      
      expect($location.path()).to.equal('/404');
      
      done();
    }
  );
  
  it('should get slogs for that user',
    function(done){
      $httpBackend.when('GET', mockUserURL)
        .respond(sampleUser);
      $httpBackend.when('GET', mockSlogURL)
        .respond(sampleSlogs);
        
      UserShowController();
      
      $httpBackend.flush();
      
      expect(scope.user_slogs).to.deep.include.members(sampleSlogs.slogs);
      
      done();
    }
  );
  
  it('should set user slogs to null if GET fails',
    function(done){
      $httpBackend.when('GET', mockUserURL)
        .respond(sampleUser);
      $httpBackend.when('GET', mockSlogURL)
        .respond(500);
        
      UserShowController();
      
      $httpBackend.flush();
      
      expect(scope.user_slogs).to.not.exist;
      
      done();
    }
  );
  
});
describe('SlogEditController', function(){
  
  var SlogEditController,
      SlogShowController,
      Slog,
      User,
      scope,
      $controller,
      $httpBackend,
      $routeParams,
      sampleSlog,
      sampleUser;
        
  beforeEach(module(ApplicationConfiguration.applicationModuleName));

  beforeEach(inject(function($rootScope, _$controller_, 
                              _$httpBackend_, _$routeParams_,
                                _Slog_, _User_){
    scope = $rootScope.$new();
    
    $controller  = _$controller_;
    $httpBackend = _$httpBackend_;
    $routeParams = _$routeParams_;
    Slog         = _Slog_;
    User         = _User_;
    
    SlogEditController = function(){
      return $controller('SlogEditController', {
        $scope: scope
      });
    };
    
    SlogShowController = function(){
      return $controller('SlogShowController', {
        $scope: scope
      });
    };
    
    sampleUser = new User({
      
    });
    
    sampleSlog = new Slog({
      id: '1',
      user_id: sampleUser.id,
      description: 'init',
      slog_type: 'init',
      departure_date: '1/1/2015',
      user: {
        id: '1',
        name: 'init',
        email: 'init@init.com',
        currentuser: true,
        provider: 'init'
      }
    });
    
    $routeParams.id = sampleSlog.id;
    
    //mockUserURL = 'https://juniper-nmckoy.c9.io/api/users/' + sampleUser.id + '.json';
    mockSlogURL = 'https://juniper-nmckoy.c9.io/api/slogs/' + $routeParams.id + '.json';
    
  }));
  
  it('description flag should not exist on init', 
    function(done){
      SlogEditController();
      
      expect(scope.editDescFlag).to.not.exist;
      
      done();
    }
  );
  
  it('editDesc should set edit flag to true when currentuser',
    function(done){
      SlogEditController();
      
      scope.editDesc(sampleSlog.user.currentuser);
      
      expect(scope.editDescFlag).to.be.true;
      
      done();
    }
  );
  
});
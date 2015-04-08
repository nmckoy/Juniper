describe('SlogNewController', function() {
  
  var SlogNewController,
      Slog, 
      User, 
      scope,
      $controller,
      $httpBackend,
      $location,
      $log,
      sampleCurrentUser,
      sampleSlogTypes,
      sampleSlog,
      mockCurrentUserURL,
      mockSlogURL;
  
  beforeEach(module(ApplicationConfiguration.applicationModuleName));
  
  beforeEach(inject(function($rootScope, _$controller_, _$httpBackend_,
                              _$log_, _$location_, _Slog_, _User_){
    
    scope = $rootScope.$new();
    
		$httpBackend = _$httpBackend_;
    $controller  = _$controller_;
    $location    = _$location_;
    $log         = _$log_;
    Slog         = _Slog_;
    User         = _User_;
    
    SlogNewController = function(){
      return $controller('SlogNewController', {
        $scope: scope
      });
    };
    
    sampleSlogTypes = [{
          name: 'ride',
          value: 'R'
        },{
          name: 'drive',
          value: 'D'
        }];
    
    sampleCurrentUser = new User({
      id: '1',
      name: 'init',
      email: 'init@init.com',
      provider: 'init',
      currentuser: true
    });
    
    sampleSlog = new Slog({
      user_id: sampleCurrentUser.id,
      description: 'init',
      slog_type: 'init',
      departure_date: '1/1/2015'
    });

    mockCurrentUserURL = 'https://juniper-nmckoy.c9.io/api/users.json?currentuser=true';
    mockSlogURL = 'https://juniper-nmckoy.c9.io/api/slogs.json';
    
  })); // end setup
  
  it('should get current logged in user', 
    function(done) {
      $httpBackend.when('GET', mockCurrentUserURL)
        .respond(sampleCurrentUser);
      
      // initialize controller
      SlogNewController();
      
      $httpBackend.flush();
      
      expect(scope.currentUser).to.include(sampleCurrentUser);
      expect(scope.currentUser.currentuser).to.equal(true);
      
      done();
    }
  );
  
  it('should have two slog types of Ride and Drive', 
    function(done) {
      // initialize controller
      SlogNewController();
      
      expect(scope.slog_types).to.have.length.of(2);
      // .eql is deeply equal
      expect(scope.slog_types).to.eql(sampleSlogTypes);
        
      done();
    }
  );
  
  it('save() should POST a new slog with inputs and locate to current user url', 
    function(done) {
      var sampleSlogData     = new Slog(sampleSlog);
      var sampleSlogResponse = new Slog(sampleSlog);
      
      $httpBackend.when('GET', mockCurrentUserURL)
        .respond(sampleCurrentUser);
      
      // initialize controller
      SlogNewController();
      
      //$httpBackend.flush();
      $httpBackend.expect('POST', mockSlogURL, sampleSlogData)
        .respond(sampleSlogResponse);
        
      // settings inputs and variables that needs to be saved
      scope.description      = sampleSlogData.description;
      scope.departure_date   = sampleSlogData.departure_date;
      scope.slog_type        = sampleSlogData.slog_type;
      // mocking currentUser in scope
      scope.currentUser      = new User(sampleCurrentUser);
      
      scope.save();
      $httpBackend.flush();
      
      expect($location.path()).to.equal('/profile/'+scope.currentUser.id);
    
      done();
    }
  );
  
  it('save() should set errors and return back to post when slog post is unsuccessful', function(done) {
      var sampleSlogData = new Slog(sampleSlog);
      
      $httpBackend.when('GET', mockCurrentUserURL)
        .respond(sampleCurrentUser);
      
      SlogNewController();
      
      $httpBackend.expect('POST', mockSlogURL, sampleSlogData)
        .respond(422); // unprocessable entity from rails
        
      // settings inputs and variables that needs to be saved
      scope.description      = sampleSlogData.description;
      scope.departure_date   = sampleSlogData.departure_date;
      scope.slog_type        = sampleSlogData.slog_type;
      // mocking currentUser in scope
      scope.currentUser      = new User(sampleCurrentUser);
        
      scope.save();
      $httpBackend.flush();
      
      // errors not implemented
      //expect(scope.error).to.exist;
      expect($location.path()).to.equal('/slogs/post');
      
      done();
  });
  
});
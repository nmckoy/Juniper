describe('UserEditController', function(){
  
  var UserEditController,
      User,
      scope,
      $routeParams,
      $controller,
      $location,
      $httpBackend,
      $log,
      sampleUser,
      mockUserURL;
      
  beforeEach(module(ApplicationConfiguration.applicationModuleName));
  
  beforeEach(inject(function($rootScope, _$controller_, _$location_,
                              _$routeParams_, _$httpBackend_, 
                                _$log_, _User_){
    
    scope = $rootScope.$new();
    
    $routeParams = _$routeParams_;
    $controller  = _$controller_;
    $httpBackend = _$httpBackend_;
    $location    = _$location_;
    User         = _User_;
    
    UserEditController = function(){
      return $controller('UserEditController', {
        $scope: scope
      });
    };
    
    sampleUser = new User({
      id: '1',
      name: 'init',
      email: 'init@init.com',
      provider: 'init'
    });
    
    $routeParams.id = sampleUser.id;
    
    mockUserURL = 'https://juniper-nmckoy.c9.io/api/users/'+$routeParams.id+'.json';
  }));
  
  it('edit flags should not exist on init',
    function(done){
      // controller init
      UserEditController();
      
      expect(scope.edit_email_flag).to.not.exist;
      expect(scope.edit_name_flag).to.not.exist;
      
      done();
    }
  );
  
  it('edit_name() should set edit name flag to true',
    function(done) {
      // controller init
      UserEditController();
      
      scope.edit_name();
      expect(scope.edit_name_flag).to.be.true;
      
      done();
    }
  );
  
  it('edit_email() should set edit email flag to true',
    function(done) {
      // controller init
      UserEditController();
      
      scope.edit_email();
      expect(scope.edit_email_flag).to.be.true;
      
      done();
    }
  );
  
  // it('should update user name when name is changed',
  //   function(done) {
  //     // response data for put
  //     var sampleUserData = new User(sampleUser);
      
  //     $httpBackend.when('GET', mockUserURL)
  //       .respond(sampleUser);
  //     $httpBackend.when('PUT', mockUserURL)
  //       .respond(sampleUserData);
      
  //     // controller init
  //     UserEditController();
      
  //     scope.user_name      = sampleUserData.name;
  //     // mocking blur flag
  //     scope.edit_name_flag = false;
      
  //     expect(scope.edit_name_flag).to.be.false;
      
  //     UserEditController.update('name');
  //     $httpBackend.flush();
      
  //     expect($log.info).to.contain('success');
  //   }
  // );
});
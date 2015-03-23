angular.module('_USER')
  .controller('UserEditController', ['$scope', '$log', '$routeParams', '$location', 'User',
    function UserEditController($scope, $log, $routeParams, $location, USer){
      $scope.error = null;
      //$log.info('in usereditctrl');
      
      $scope.edit_name_flag = null;
      $scope.edit_email_flag = null;
      // opening input text for editing
      $scope.edit_name = function() {
        $scope.edit_name_flag = true;
      };
      $scope.edit_email = function(){
        $scope.edit_email_flag = true;
      };
      
      // watching my flags change
      $scope.$watch('edit_name_flag', function() {
        if ($scope.edit_name_flag === false) {
          update('name');
        }
      });
      $scope.$watch('edit_email_flag', function() {
        if ($scope.edit_email_flag === false){
          update('email');
        }
      });
      
      var update = function(prop){
        User.get({id: $routeParams.id}, function(user_edit){
          var saved_name = user_edit.name;
          var saved_email = user_edit.email;
          if (prop === 'name') {
            user_edit.name = $scope.user.name;
          } else if (prop === 'email') {
            user_edit.email = $scope.user.email;
          }
          
          // $log.info('new user name is ' + user_edit.name);
          // $log.info('name ' + user_edit.name + 
          //          '\nemail ' + user_edit.email);
          
          // resource instace methods return $promises
          user_edit.$update().then(function(data) {
            // success
            // var datatype = typeof data
            $log.info('updated successfully with data: '
                        +  data.data);
            // this is why callbacks are important
            //$location.path('/profile/' + $scope.user.id);
          }, function(error) {
            // error
            // var errortype = typeof error;
            $log.error('error updating user with error: '
                        + error.data);
            $scope.user.name = saved_name;
            $scope.user.email = saved_email;
            $scope.error = error.data;
            //$location.path('/profile/' + $scope.user.id + '/edit');
          }); // end update
        }); // end get
      };
      
      
    }
  ]);
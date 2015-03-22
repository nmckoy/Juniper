// optional parameter to pass are
// currentuser: true - to get current logged in user
angular.module('_USR').factory('User', ['$resource', function($resource) {
  return $resource('https://juniper-nmckoy.c9.io/users/:id.json', {
    id: "@id"
  }, {
    update: {
      method: "PUT"
    }
  });
}]);
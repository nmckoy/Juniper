// optional parameter to pass are
// currentuser: true - to get current logged in user
angular.module('_USER')
  .factory('User', ['$resource', function User($resource) {
    return $resource(ApplicationConfiguration.apiUrl + '/users/:id.json', {
      id: "@id"
    }, {
      update: {
        method: "PUT"
      }
    });
  }]);
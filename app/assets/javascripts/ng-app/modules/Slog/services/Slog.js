// optional parameters to pass are
// user_id: 'any user id'
// with_user: true
angular.module('_SLOG')
  .factory('Slog', ['$resource', function Slog($resource) {
    return $resource(ApplicationConfiguration.apiUrl + 'slogs/:id.json', {
      id: '@id'
    }, {
      update: {
        method: 'PUT'
      }
    });

    // EDIT: 03/11/2015 - passing query parameters to rails
    // instead to handle return of slogs
    //
    // specific method to get slogs by userid
    // returns and object of array of objects lol
    // object array is user_slogs
    //
    // e.g. promise.data.user_slogs[]
    // var user_slogs = function(){
    //   return $resource('https://juniper-nmckoy.c9.io/slogs/user/:id.json',
    //                     { id: '@id' },
    //                     {update: {method: 'PUT'} }
    //                   );
    // };

    // return {
    //   // btw these return promises
    //   resource: resource,
    //   user_slogs: user_slogs
    // };
  }]);
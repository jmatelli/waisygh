'use strict';

export default class ApiProvider {
  constructor() {
    this.apiPath = '/api';
  }

  $get($http, $q) {
    const deferred = $q.defer();

    $http({

    })
      .then(
        (res) => {
          return deferred.resolve(res);
        },
        (res) => {
          return deferred.reject(res);
        }
      )
    ;

    return deferred.promise;
  }
}

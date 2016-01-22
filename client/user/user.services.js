'use strict';

export default class UserService {
  constructor($http, $q, API_HOST) {
    this._$http = $http;
    this._$q = $q;
    this.endpoint = API_HOST + 'users';
  }

  getUser(id) {
    var deferred = this._$q.defer();

    this._$http.get(this.endpoint + '/' + id)
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

  createUser(data) {
    var deferred = this._$q.defer();

    this._$http.post(this.endpoint, data)
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

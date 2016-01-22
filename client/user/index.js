'use strict';

import angular from 'angular';
import UserService from './user.services';

export default angular.module('waisygh.user', [])
  .service('UserService', UserService)
  .name
;

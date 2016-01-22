'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from './signup.routes';
import controller from './signup.controller';

import user from '../user';

require('./signup.styl');

export default angular.module('waisygh.signup', [uiRouter, user])
  .config(routes)
  .controller('SignUpController', controller)
  .name
;

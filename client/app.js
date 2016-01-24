'use strict';

import angular from 'angular';
import ngMaterial from 'angular-material';
import ngMdIcons from 'angular-material-icons';
import ngMessages from 'angular-messages';
import uiRouter from 'angular-ui-router';

import signUp from './signup';
import user from './user';
import {routes, material} from './app.configs';

require('../node_modules/angular-material/angular-material.css');
require('./app.styl');
require('./header.styl');

angular
  .module('waisygh', [
    // angular dependencies
    ngMaterial,
    ngMdIcons,
    ngMessages,
    uiRouter,

    // app dependencies
    signUp,
    user
  ])
  .constant('API_HOST', '/api/')
  .config(material)
  .config(routes)
;

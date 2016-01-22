'use strict';

import angular from 'angular';
import ngMaterial from 'angular-material';
import ngMdIcons from 'angular-material-icons';
import uiRouter from 'angular-ui-router';

import signUp from './signup';
import user from './user';
import routes from './app.routes';

require('../node_modules/angular-material/angular-material.css');
require('./app.styl');
require('./header.styl');

angular
  .module('waisygh', [
    ngMaterial,
    ngMdIcons,
    uiRouter,
    signUp,
    user
  ])
  .constant('API_HOST', '/api/')
  .config(($mdThemingProvider, $mdIconProvider) => {
    $mdThemingProvider.theme('default')
      .primaryPalette('purple')
      .accentPalette('blue', {
        'default': '500'
      })
    ;
    $mdIconProvider
      .defaultIconSet('assets/mdi.svg')
    ;
  })
  .config(routes)
;

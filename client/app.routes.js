'use strict';

export default function($locationProvider, $urlRouterProvider, $stateProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('waisygh', {
      url: '/',
      views: {
        'toolbar': {
          template: require('./toolbar/toolbar.tpl.html')
        }
      }
    })
  ;
}

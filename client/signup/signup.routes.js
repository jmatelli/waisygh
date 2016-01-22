'use strict';

export default function($stateProvider) {
  $stateProvider
    .state('waisygh.signup', {
      url: 'signup',
      views: {
        'content@': {
          template: require('./signup.tpl.html'),
          controller: 'SignUpController',
          controllerAs: 'signup'
        }
      }
    })
  ;
}

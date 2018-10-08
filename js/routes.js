angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('contacts', {
    url: '/page1',
    templateUrl: 'templates/contacts.html',
    controller: 'contactsCtrl'
  })

  .state('rocco', {
    url: '/page2',
    templateUrl: 'templates/rocco.html',
    controller: 'roccoCtrl'
  })

  .state('miguelTongol', {
    url: '/page3',
    templateUrl: 'templates/miguelTongol.html',
    controller: 'miguelTongolCtrl'
  })

  .state('peter', {
    url: '/page4',
    templateUrl: 'templates/peter.html',
    controller: 'peterCtrl'
  })

  .state('reyvie', {
    url: '/page5',
    templateUrl: 'templates/reyvie.html',
    controller: 'reyvieCtrl'
  })

  .state('eugene', {
    url: '/page6',
    templateUrl: 'templates/eugene.html',
    controller: 'eugeneCtrl'
  })

  .state('henryUncle', {
    url: '/page7',
    templateUrl: 'templates/henryUncle.html',
    controller: 'henryUncleCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});
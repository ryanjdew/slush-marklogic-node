(function () {
  'use strict';

  angular.module('app.root', [
    // inject dependencies
    'app.login',
    'app.map',
    'app.messageBoard',
    'app.user',
    'ui.router',

    // child states
    'app.create',
    'app.detail',
    'app.landing',
    'app.search',
    'app.user'
  ]);
}());

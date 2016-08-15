'use strict';

/**
 * @ngdoc function
 * @name imdbApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the imdbApp
 */
angular.module('imdbApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

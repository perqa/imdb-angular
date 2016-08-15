'use strict';

/**
 * @ngdoc service
 * @name imdbApp.data
 * @description
 * # data
 * Service in the imdbApp.
 */
angular.module('imdbApp')
  .service('imdbService', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
        this.getData = function () {
            return $http.get('data/imdb.json');
        };
  });

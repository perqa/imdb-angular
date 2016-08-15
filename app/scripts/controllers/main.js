'use strict';

/**
 * @ngdoc function
 * @name imdbApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the imdbApp
 */
angular.module('imdbApp')
  .controller('MainCtrl', function ($scope, imdbService) {
    $scope.data = {};
    $scope.genres = {};
    $scope.writers = {};
    $scope.countries = {};
    $scope.genre = '';
    $scope.writer = '';
    $scope.country = '';
    $scope.selectedMovie = {};
    imdbService.getData().then(function(imdb){
        $scope.data = imdb.data;
        angular.forEach($scope.data.Movies, function(value){
            addFilter($scope.genres, value.Genre);
            addFilter($scope.writers, value.Writer);
            addFilter($scope.countries, value.Country);
        });
    });
   
    function addFilter(filter, str){
        var arr; 
            arr = str.replace(/^\s*|\s*$/g,'').split(/\s*,\s*/);
            while (arr.length>0) {
                filter[arr.pop()] = 1;
            }
    }

    $scope.setMovie = function(movie){
        if ($scope.selectedMovie.imdbID === movie.imdbID){
            $scope.selectedMovie.imdbID = -1;
            return;  
        } 
        $scope.selectedMovie = angular.copy(movie);
        delete $scope.selectedMovie.Poster;
        delete $scope.selectedMovie.Type;
        delete $scope.selectedMovie.Response;
    };

    $scope.filter = function(movie){
        return  (!$scope.genre || movie.Genre.indexOf($scope.genre)>-1) && 
                (!$scope.country || movie.Country.indexOf($scope.country)>-1) &&
                (!$scope.writer || movie.Writer.indexOf($scope.writer)>-1);
    };

  });

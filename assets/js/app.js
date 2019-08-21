// Define the `shopupTestApp` module
var shopupTestApp = angular.module('shopupTestApp', []);

// Define the `ProgressBarController` controller on the `shopupTestApp` module
shopupTestApp.controller('ProgressBarController', function shopupTestApp($scope) {
  $scope.rangeFirst = 20;
  $scope.rangeSecond = 80;

  $scope.progressFirst = 80;
  $scope.progressSecond = 40;
});
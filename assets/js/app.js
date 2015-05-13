var app = angular.module('TournamentApp', ['ngMaterial']);

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
  .primaryPalette('green')
  .accentPalette('orange');
});

app.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){

  $scope.toggleNav = function () {
    $mdSidenav('left').toggle();
  };

  $scope.close = function () {
    $mdSidenav('left').close();
  };

}]);

/**
 * Created by wcu200 on 3/5/16.
 */
angular.module('homeModule', [])
  .config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
    $routeProvider .when('/home',{
      templateUrl: 'views/home/home-partial.html',
      controller: 'homeCtrl'
    })
    $routeProvider .when('/',{
      templateUrl: 'views/home/home-partial.html',
      controller: 'homeCtrl'
    })
    $locationProvider.html5Mode(true);
  }])
  .controller('homeCtrl',['$scope', function($scope) {
    $scope.active = 'active';
    console.log('now in homeCtrl and setting the active flag to true');

  }]);

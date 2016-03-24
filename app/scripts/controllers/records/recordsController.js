/**
 * Created by wcu200 on 3/5/16.
 */
 angular.module('recordsModule', [])
  .config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
    $routeProvider .when('/records',{
      templateUrl: 'views/records/records-partial.html',
      controller: 'recordsCtrl'
    })
     $locationProvider.html5Mode(true);
  }])
  .controller('recordsCtrl', [function() {
    console.log('now in recordsCtrl and setting the active flag to true');
}]);

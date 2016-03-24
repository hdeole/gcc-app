/**
 * Created by wcu200 on 3/7/16.
 */
angular.module('contactusModule', [])
  .config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
    $routeProvider .when('/contactUs',{
      templateUrl: 'views/contactus/contactus-partial.html',
      controller: 'contactusCtrl'
    })
    $locationProvider.html5Mode(true);
  }])
  .controller('contactusCtrl', [function() {
    console.log('now in contactusCtrl and setting the active flag to true');
  }]);

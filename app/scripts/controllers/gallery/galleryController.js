/**
 * Created by wcu200 on 3/7/16.
 */
angular.module('galleryModule', [])
  .config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
    $routeProvider .when('/gallery',{
      templateUrl: 'views/gallery/gallery-partial.html',
      controller: 'galleryCtrl'
    })
    $locationProvider.html5Mode(true);
  }])
  .controller('galleryCtrl', ['$http', '$log','$scope',function($http,$log,$scope) {
    console.log('now in galleryCtrl and setting the active flag to true');


    $http({
      url: 'resources/team_roaster.json',
      method: 'get'
    })
      .then(function (retObj) {
        var responseJSON = retObj.data;
        $log.log('Retrieved team data!' + responseJSON.team.name);
        $scope.players = responseJSON.team.roaster;
        $scope.playerRow = _.chunk($scope.players, 4);
        $log.log('players are ' + $scope.players);

      });
    console.log('now in rosterCtrl and setting the active flag to true');

  }]);

angular.module('rosterModule', ['ui.bootstrap'])
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.when('/roster', {
      templateUrl: 'views/roster/roster-partial.html',
      controller: 'rosterCtrl'
    })
    $locationProvider.html5Mode(true);
  }])
  .controller('rosterCtrl', ['$http', '$scope', '$log', '$uibModal', function ($http, $scope, $log, $uibModal) {

    $http({
      url: 'resources/team_roaster.json',
      method: 'get'
    })
      .then(function (retObj) {
        var responseJSON = retObj.data;
        $log.log('Retrieved team data!' + responseJSON.team.name);
        $scope.players = responseJSON.team.roaster;
        $scope.playerRow = _.chunk($scope.players, 5);
        $log.log('players are ' + $scope.players);

      });
    console.log('now in rosterCtrl and setting the active flag to true');




    $scope.animationsEnabled = true;

    $scope.open = function (player) {
      console.log('selected player -:'+player.playerName);
      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'myModalContent.html',
        controller: 'ModalInstanceCtrl',
        player: player,
        windowClass: 'app-modal-window',
        resolve: {
          players: function () {
            return $scope.players;
          },
          player: function(){
            return player;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        console.log('selected itme :'+selectedItem);
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

    $scope.toggleAnimation = function () {
      $scope.animationsEnabled = !$scope.animationsEnabled;
    };

  }]);


angular.module('rosterModule').controller('ModalInstanceCtrl', function ($http, $log ,$scope, $uibModalInstance, players,player) {


  $http({
    url: 'resources/player_profile.json',
    method: 'get'
  })
    .then(function (retObj) {
      var responseJSON = retObj.data;
      $log.log('Retrieved player data!' + responseJSON);
      $scope.playerProfile = responseJSON.player;
      $log.log('player data ' + $scope.playerProfile);

    });




  console.log('ModalInstanceCtrl is called..'+player.playerName);
  $scope.players = players;
  $scope.player = player;
  $scope.playerProfile = $scope.playerProfile;
  $scope.selected = {
    playerProfile: $scope.playerProfile
  };

  $scope.ok = function () {
    $uibModalInstance.close($scope.selected.playerProfile);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
/**
 * Created by wcu200 on 3/5/16.
 */

'use strict';

/**
 * @ngdoc overview
 * @name teamAngularSiteApp
 * @description
 * # teamAngularSiteApp
 *
 * Main module of the application.
 */
angular
  .module('teamAngularSiteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'controllerModule'

  ])
  .config(function(){
    console.log('loading teamAngularSiteApp');


  })
  .controller('mainCntrl', ['$scope', '$log', function ($scope, $log) {

    $log.log('inside the main.... controller');

    $scope.links = {

      link1: {href: 'home', text: 'Home' , class:$scope.active},
      link2: {href: 'records', text: 'Records', class:$scope.active},
      link3: {href: 'roster', text: 'Roster', class:$scope.active},
      link4: {href: 'gallery', text: 'Gallery', class:$scope.active},
      link5: {href: 'contactUs', text: 'Contact Us', class:$scope.active}

    };

  }])
;

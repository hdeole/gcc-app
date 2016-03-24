'use strict';

/**
 * @ngdoc function
 * @name teamAngularSiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the teamAngularSiteApp
 */
angular
  .module('controllerModule', ['ngRoute','homeModule','recordsModule','rosterModule','galleryModule','contactusModule'])
  .config(function () {
    console.log('loding controllerModule active ');
    //$routeProvider
    //  .when('#/home', {
    //    templateUrl: 'views/home/home-partial.html'
    //  })
    //  .when('#/records', {
    //    templateUrl: '../views/records/records-partial.html',
    //    controller : recordsCtrl
    //  })
    //  .otherwise({
    //    redirectTo: '#/home'
    //  });
  })


;




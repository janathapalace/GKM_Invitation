var app = angular.module('testApp',['ui.router','angular-carousel-3d']).config(
  ["$stateProvider", "$urlRouterProvider",
    function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise("/");
      $stateProvider
        .state("home", {
          url: "/",
          templateUrl: "views/home.html",
          controller:'homeController',
          controllerAs : "homeCtrl"
        })
        .state("about", {
          url: "/aboutus",
          templateUrl: "/views/about.html"
      })
    }
  ]);

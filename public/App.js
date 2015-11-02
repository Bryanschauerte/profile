var App = angular.module('profileApp', ['ngRoute', 'ngMaterial'])
.config(function($routeProvider, $mdThemingProvider){




  $routeProvider
    .when('/home', {

      templateUrl: './app/views/home.html'
    })
    .when('/Technology', {
      templateUrl: './app/views/smallProject.html'

    })
    .when('/Projects', {
      templateUrl: './app/views/largeProject.html'


    })
    .otherwise({
      redirectTo: '/home'
    }),



  $mdThemingProvider.theme('default')
              .primaryPalette('deep-purple', {
                'default': '500', //#673AB7
                'hue-1': '400', //#7E57C2
                'hue-2': '200', //#B39DDB
                'hue-3': '50' //#EDE7F6
              })
              .backgroundPalette('red', {
                'default': '500', //#F44336
                'hue-1': '400',//#EF5350
                'hue-2': '300', //#E57373
                'hue-3': '100' //#FFCDD2
              })
              .accentPalette('brown', {
                'default': '400', //#8D6E63
                'hue-1': '200',  //#BCAAA4
                'hue-2': '100',  //#D7CCC8
                'hue-3': '50'   //#EFEBE9
              });


});
//   app.config([
//     '$interpolateProvider', function($interpolateProvider) {
//       return $interpolateProvider.startSymbol('{(').endSymbol(')}');
//     }
//   ]);
//
//   app.config(function ($locationProvider) {
//   $locationProvider.html5Mode(true);
// });

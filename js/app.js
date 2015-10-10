var app = angular.module('profileApp', ['ngRoute', 'ngMaterial'])
.config(function($routeProvider, $mdThemingProvider){




  $routeProvider
    .when('/home', {
      templateUrl: 'http://bryanschauerte.github.io/templates/home.html'
    })
    .when('/smallProject', {
      templateUrl: 'http://bryanschauerte.github.io/templates/smallProject.html'

    })
    .when('/largeProject', {
      templateUrl: 'http://bryanschauerte.github.io/templates/largeProject.html'

    })
    .otherwise({
      redirectTo: '/home'
    }),



  $mdThemingProvider.theme('default')
              .primaryPalette('deep-purple', {
                'default': '100',
                'hue-1': '300',
                'hue-2': '600',
                'hue-3': '900'
              })
              .backgroundPalette('blue-grey', {
                'default': '50',
                'hue-1': '100',
                'hue-2': '600',
                'hue-3': 'A100'
              })
              .accentPalette('brown', {
                'default': '300',
                'hue-1': '100',
                'hue-2': '600',
                'hue-3': 'A100'
              });


});
  app.config([
    '$interpolateProvider', function($interpolateProvider) {
      return $interpolateProvider.startSymbol('{(').endSymbol(')}');
    }
  ]);

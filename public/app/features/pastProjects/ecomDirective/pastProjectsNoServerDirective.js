angular.module('profileApp').directive('pastServerlessDirective', function(){

  return{
    templateUrl: "./app/features/pastProjects/ecomDirective/pastProjectsNoServer.html",
    controller: 'pastProjectsNoServerCtrl',
    controllerAs: 'pp',
    bindToController: true,
    attribute: "E",
    scope: {
      props: '='
    }

  }

})

angular.module('profileApp').directive('pastProjectDirective', function(){

  return{
    templateUrl: "./app/features/pastProjects/libBrowsingDirective/pastProjects.html",
    controller: 'pastProjectsCtrl',
    controllerAs: 'pp',
    bindToController: true,
    attribute: "E",
    scope: {
      props: '='
    }

  }

})

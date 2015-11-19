angular.module('profileApp').directive('groupProject', function(){

  return{
    templateUrl: "./app/features/pastProjects/groupProject/groupProject.html",
    controller: 'groupProjectCtrl',
    controllerAs: 'gp',
    bindToController: true,
    attribute: "E",
    scope: {
      props: '='
    }

  }

})

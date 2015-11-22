angular.module('profileApp').directive('boarderDirective', function(){

  return {
    templateUrl:"./app/features/topBoarder/boarderTemplate.html",
    controller: 'boarderCtrl',
    controllerAs: "is",
    bindToController: true,
    attribute: 'E',
    scope: {
      props: "="
    }
  }


})

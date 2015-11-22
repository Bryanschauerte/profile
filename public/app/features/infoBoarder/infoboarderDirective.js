angular.module('profileApp').directive('infoboarderDirective', function(){

  return {
    templateUrl:"./app/features/infoBoarder/infoboarderTemplate.html",
    controller: 'infoBoarderCtrl',
    controllerAs: "is",
    bindToController: true,
    attribute: 'E',
    scope: {
      props: "="
    }
  };


});

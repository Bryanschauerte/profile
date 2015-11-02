angular.module('profileApp').directive('infoDirective', function(){
  return {
    templateUrl:'./app/features/informationDirective/informationTemp.html',
    controller: 'infoCtrl',
    controllerAs: 'ic',
    bindToController:true,
    attribute: "E",
    scope: {
      props: '='
    }


  }
})

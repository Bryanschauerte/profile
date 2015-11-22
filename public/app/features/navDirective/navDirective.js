angular.module('profileApp').directive('navDirective', function(){

  return {
    templateUrl:"./app/features/navDirective/navTemplate.html",
    controller: 'navCtrl',
    controllerAs: "nc",
    bindToController: true,
    attribute: 'E',
    scope: {
      props: "="
    }
  };


});

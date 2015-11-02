angular.module('profileApp').directive('skillsDirective', function(){


  return {
    templateUrl: "./app/features/skillsDirective/skillsTemplate.html",
    controller: "skillsDirectiveCtrl",
    controllerAs: "sd",
    bindToController: true,
    attribute: "E",
    scope: {
      props: "="
    }
  }


})

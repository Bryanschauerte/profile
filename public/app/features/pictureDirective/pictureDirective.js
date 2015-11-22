angular.module('profileApp').directive('pictureDirective', function(){

  return {
    templateUrl: "./app/features/pictureDirective/pictureDirective.html",
    controller: 'pictureDirectiveCtrl',
    controllerAs: 'pd',
    bindToController: true,
    attribute: "E",
    scope: {
      props: "="
    }

  };

});

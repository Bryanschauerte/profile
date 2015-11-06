angular.module('profileApp').directive('dThree', function(){

return {
  templateUrl: './app/features/dthree/dThree.html',
  controller: 'dThreeCtrl',
  controllerAs: 'dt',
  bindToController: true,
  attribute: 'AE',
  scope: {
    props: '='
  }
};


})

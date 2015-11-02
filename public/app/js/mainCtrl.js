var app = angular.module('profileApp').controller('mainCtrl', function($scope){

$scope.test = "askdjflasdjflaksdjflk";

  $scope.pictureToShow = "./images/IMG_1067.jpg";

  $scope.pictureIndex = 0;


  $scope.rotatePictures = function(){
    $scope.picturesArray = ["./images/IMG_1072.jpg", "./images/Pianome.JPG", "./images/IMG_1067.jpg"];

    if($scope.pictureIndex >= $scope.picturesArray.length){
      $scope.pictureIndex = 0;
    }else {
      $scope.pictureIndex +=1;
    }
    $scope.pictureToShow = $scope.picturesArray[$scope.pictureIndex];



  }

// ng-style="{'background-image': 'url(/styles/images/profile.png)'}"


})

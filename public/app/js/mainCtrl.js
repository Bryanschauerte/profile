var app = angular.module('profileApp').controller('mainCtrl', function($scope){


  $(document).ready(function(){
    $('.parallax').parallax();
    console.log("para done");
  });

  $(".rotate").textrotator({
    animation: "spin", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
    separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
    speed: 1500 // How many milliseconds until the next word show.
  });

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

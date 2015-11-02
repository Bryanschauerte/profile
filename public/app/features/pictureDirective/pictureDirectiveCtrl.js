angular.module('profileApp').controller('pictureDirectiveCtrl', function($scope){





    $scope.pictureToShow = "./app/images/IMG_1067.jpg";

    $scope.pictureIndex = 0;


    $scope.rotatePictures = function(){
      $scope.picturesArray = ["./app/images/IMG_1072.jpg", "./app/images/Pianome.JPG", "./app/images/IMG_1067.jpg"];

      if($scope.pictureIndex >= $scope.picturesArray.length){
        $scope.pictureIndex = 0;
      }else {
        $scope.pictureIndex +=1;
      }
      $scope.pictureToShow = $scope.picturesArray[$scope.pictureIndex];



    }


})

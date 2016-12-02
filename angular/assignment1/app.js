(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){
    $scope.message = "";
    $scope.UserLunch = "";
    $scope.error = "";
    $scope.color = "";
    $scope.ValidLunch = function(){
      if ($scope.UserLunch.match(/(^,|,\s*,|,,|,$)/g)){
        $scope.error = "Data can not be empty";
      }else{
        $scope.error = "";
      }
    };
    $scope.checkIfTooMuch = function(){
    $scope.splitLunch = $scope.UserLunch.split(',') ;
      if($scope.UserLunch == ""){
        $scope.message = "Please enter data first";
        $scope.color = 'red';
      }
      else if($scope.error != ""){
        $scope.message = "Please fix errors";
        $scope.color = 'red';
      }
      else if($scope.splitLunch.length > 3){
        $scope.message = "Too much!";
        $scope.color = 'green';
      }
      else{
        $scope.message = "Enjoy!";
        $scope.color = 'green';
      }

    };

  };

})();

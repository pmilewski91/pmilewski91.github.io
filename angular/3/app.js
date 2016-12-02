(function () {
'use strict';

angular.module('DIApp', [])
.controller('DIController', DIController);

function DIController ($scope, $filter) {
  $scope.name = "Yaakov";

  $scope.upper = function(){
    var upCase = $filter('lowercase');
    $scope.name = upCase($scope.name);
  };
}

})();

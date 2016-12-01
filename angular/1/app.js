(function (){
'use strick';
  angular.module('myFirstApp', [])

  .controller('MyFirstController', function ($scope) {
    $scope.name = "Pawelec";
    $scope.hello = function(){
      return 'Hello '+$scope.name;
    };
  });
})();

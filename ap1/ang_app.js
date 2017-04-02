var app = angular.module('myApp', []);
app.controller('myLib', function($scope) {

$scope.homeShow = true;
function log(){
  $scope.homeShow = false;
}
$scope.searchF = function() {
  ListSearchRenderUpdate($('#search').val());
  $scope.homeShow = false;
  if($('#search').val()==""){
    $('#lastAddShow').show();
    $scope.homeShow = true;
    $('.navbar-nav li').removeClass('active');
    $('#home').parent().addClass('active');
    ListAllRenderUpdate();
  }
};
  $scope.navActive = function(e){
    $('.navbar-nav li').removeClass('active');
    $(e.target).parent().addClass('active');
    SubcategoriesRenderUpdate($(e.target).data('menu'));
    switch ($(e.target).data('menu')) {
      case "home":
      ListAllRenderUpdate();
        $('#lastAddShow').show();
        $scope.homeShow = true;
        break;
      case "lunch":
        ListRenderUpdate($(e.target).data('menu'), $(e.target).html());
        $scope.homeShow = false;
        break;
      case "dessert":
        ListRenderUpdate($(e.target).data('menu'), $(e.target).html());
        $scope.homeShow = false;
        break;
      case "breakfast":
        ListRenderUpdate($(e.target).data('menu'), $(e.target).html());
        $scope.homeShow = false;
        break;
      case "snack":
        ListRenderUpdate($(e.target).data('menu'), $(e.target).html());
        $scope.homeShow = false;
        break;
      case "preserve":
        ListRenderUpdate($(e.target).data('menu'), $(e.target).html());
        $scope.homeShow = false;
        break;
      case "other":
        ListRenderUpdate($(e.target).data('menu'), $(e.target).html());
        $scope.homeShow = false;
        break;
      default:
        ListAllRenderUpdate();
        $scope.homeShow = true;
    }
  };
});
app.directive('navigation', function(){
  return {
    templateUrl: 'modules/nav.html?v=1.0.6'
  }
});

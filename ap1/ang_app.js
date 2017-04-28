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

  $scope.loginFun = function(){
    $('#loading').css({'display':'block'});
    let loginApp = document.querySelector('#loginApp').value;
    let passApp = document.querySelector('#passApp').value;
    checkUser(loginApp, passApp);
  }
  $scope.registrationFun = function(){
    $('#loading').css({'display':'block'});
    let loginApp = document.querySelector('#loginApp').value;
    let passApp = document.querySelector('#passApp').value;

    if(loginApp.length >= 3 && passApp.length >= 3){
      $.ajax({
        url: 'https://api.mlab.com/api/1/databases/przepisy/collections/users?apiKey=Sj7Ov5G_CDq68W2dPY5mNBIOybU14QLw',
        success: function(result){
          let exist = true;
          for(let dbUser of result){
            if(loginApp !== dbUser.name){

                exist = false;

            }else{
                exist = true;
                alert("Taki użytkownik już istnieje");
                $('#loading').css({'display':'none'});
                return;
            }
          }
          if (!exist){
            $.ajax( {
              url: `https://api.mlab.com/api/1/databases/przepisy/collections/users?apiKey=Sj7Ov5G_CDq68W2dPY5mNBIOybU14QLw`,
            data: JSON.stringify([ {"name":loginApp, "pass": passApp} ]),
            type: "POST",
            contentType: "application/json",
            success: function(){
              alert("Utworzono konto");
              checkUser(loginApp, passApp);
              $('#loading').css({'display':'none'});
            },
            error: function(){
              alert("Wystąpił błąd");
              $('#loading').css({'display':'none'});
            }});
          }
         },
        error: function(){
          alert('Bład połączenia z bazą danych!');
          $('#loading').css({'display':'none'});
        }});
    }else{
      alert("Login i hasło muszą mieć minimum 3 znaki");
      $('#loading').css({'display':'none'});
    }

  }
  $scope.addRecipe = function(){
    RecipeRenderUpdate();
  }
});
app.directive('navigation', function(){
  return {
    templateUrl: 'modules/nav.html?v=1.0.9'
  }
});

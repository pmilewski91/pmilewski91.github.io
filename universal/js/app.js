
angular.module('app', [])
  .controller('aplication', aplication);

  aplication.$inject = ['$scope'];

  function aplication($scope){
    //Login
    $scope.logName = "";
    $scope.logPassword = "";
    var zalogowany = false;
    $scope.login = function(){
      if(zalogowany === false){
        $('#login').animate({top:'300px'});
        $('#login').css({display:'block'});
      }

    };
    $scope.loginExit = function(){
      $('#login').css({display:'none', top:'-1000px'});
    };
    $scope.validation = function(){
      var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

      if($scope.logName !== "" && $scope.logName !== undefined &&
      filter.test($scope.logName) &&
       $scope.logPassword !== "" && $scope.logPassword !== undefined){
        alert('Zalogowałeś się');
        $('.menu ul li:last-child div span').html($scope.logName);
        $('#login').css({display:'none', top:'-1000px'});
        zalogowany = true;
      }else{
        alert('Błędne logowanie');
      }
    };
    //Submenu
    $scope.i_o = function(){
      $('.ramowka, .months').fadeOut();
      $('.i-o').fadeIn();
      $('.submenu a').removeClass('sub-active');
      $('section.parallax > nav > ul > li:nth-child(1) > a').addClass('sub-active');
        console.log($(this));
    };
    $scope.ramowka = function(){
      $('.ramowka, .months').fadeIn();
      $('.i-o').fadeOut();
      $('.submenu a').removeClass('sub-active');
      $('section.parallax > nav > ul > li:nth-child(2) > a').addClass('sub-active');
    };

  }

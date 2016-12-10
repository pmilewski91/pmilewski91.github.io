

angular.module('App', [])
.controller('Validation', Validation);

  Validation.$inject=['$scope'];
  function Validation($scope){
    $scope.name = "";
    $scope.nameError="";
    $scope.mail = "";
    $scope.mailError="";
    $scope.age = "";
    $scope.ageError="";
    $scope.style = {
      name: {
        "display" : "none"
      },
      mail: {
        "display" : "none"
      },
      age: {
        "display" : "none"
      }
    };

    // Name validation
    $scope.validName = function(){
      if($scope.name.length > 2 && isNaN($scope.name)){
        $scope.style['name'] = {"display" : "none"}
          $scope.nameError="";
          return true;
      }else{
          $scope.nameError="Błąd: Twoje imię musi posiadać przynajmniej 3 litery";
          $scope.style['name'] = {"display" : "block"}
          return false;
      }
    }
    // Mail validation
    $scope.validMail = function(){
      if ($scope.mail.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)){
        $scope.style['mail'] = {"display" : "none"}
        $scope.mailError="";
        return true;
      }else{
        $scope.style['mail'] = {"display" : "block"}
        $scope.mailError="Błąd: Nie prawidłowy email";
      }
    }
    // Age validation
    $scope.validAge = function(){
      if(!isNaN($scope.age) && $scope.age >= 18 && $scope.age.length < 4){
        $scope.style['age'] = {"display" : "none"}
        $scope.ageError="";
        return true;
      }else{
        $scope.style['age'] = {"display" : "block"}
        $scope.ageError="Błąd: Nie prawidłowy wiek (musisz mieć przynajmniej 18lat)";
      }
    }

    //Final validation
    $scope.valid = function(){
      $scope.validName();
      $scope.validMail();
      $scope.validAge();
      if($scope.validName() && $scope.validMail() && $scope.validAge()){
        $('.form_box').fadeOut('slow');
        $('button').fadeOut('slow');
        $('.thx').delay("slow").fadeIn('slow');
      }
    };
  }

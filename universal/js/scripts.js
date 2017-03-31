$(document).ready(function(){
  var slide = 0;
  $('.mob-nav').click(function(){

    if(slide===0){
      $('.menu ul').slideDown();
      slide =1;
    }else{
      $('.menu ul').slideUp();
      slide =0;
    }
  });

  $('.months ul li').click(function(){
    $('.months ul li').removeClass('active');
    $(this).addClass('active');
  });
});

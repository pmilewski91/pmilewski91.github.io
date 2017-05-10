
$(document).ready(function(){
  var header_height = window.innerHeight;
  var header_width = window.innerWidth;
  $(window).resize(function(){
  if(header_width > 767){
    //header height
    $('header').css({'height':header_height});
    //.header_article vertically center in the header
    $('.header_article').css({'margin-top':(header_height/2 - $('.header_article').height())});
  }
})
  // fixed navbar
  $(window).bind('scroll', function(){
    if($(this).scrollTop() > $('nav').height()) {
      $('nav').addClass('navbar-fixed-top');
   }else if($(this).scrollTop() < 20){
     if($('nav').hasClass('navbar-fixed-top')){
       $('nav').removeClass('navbar-fixed-top');
     }
   }
});
}

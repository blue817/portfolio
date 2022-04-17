$(function(){

//메뉴
$('header a').click(function(e){
  e.preventDefault();
});
$('.menu_btn').click(function(){

if($('.menu_btn').hasClass('on')){
  $('.menu_btn').removeClass('on');
  $('.gnb_area').removeClass('active');
}else{
  $('.menu_btn').addClass('on');
  $('.gnb_area').addClass('active');
}
});

// top버튼

$('footer .top').click(function(e){
  e.preventDefault();
  $('body, html').stop().animate({scrollTop:0},500);
});

});
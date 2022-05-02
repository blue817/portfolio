$(function(){

$(window).scroll(function(){
  let scrollPos = $(window).scrollTop();
  if( scrollPos > 20 ){
    $('header').addClass('fixed');
  }else{
    $('header').removeClass('fixed');
  }
});  

// 메뉴버튼
$('.menu_btn').click(function(e){
  e.preventDefault();
  $('.gnb_area').addClass('active');
  $('body').addClass('hidden');
});

$('.close_btn').click(function(e){
e.preventDefault();
$('body').removeClass('hidden');
$('.gnb_area').removeClass('active');
});


// 서브메뉴 
$('.gnb_area a').click(function(e){
e.preventDefault(); });

$('.list>a').click(function(){
  h = $(this).siblings('.sub').find('ul').height();
if( $(this).siblings('.sub').height() > 0){
 $('.sub').stop().animate({height:0}, 300);
 $('.list').removeClass('on'); 
}else{
  $('.sub').stop().animate({height:0}, 300);
  $('.list').removeClass('on'); 
  $(this).siblings('.sub').stop().animate({height:h},400);
  $(this).parent('.list').addClass('on');
}
});

// lang_box

$('.label').click(function(e){
  e.preventDefault(); 

 langBox = $(this).parent('.lang_box');
  if( langBox.hasClass('active') ){
    $(langBox).removeClass('active');
  }else{
    $(langBox).addClass('active');
  }
});

$('.option_items').click(function(e){
  e.preventDefault();
  txt = $(this).text();
  $('.label').text(txt);
  $(langBox).removeClass('active');
});


}); //End
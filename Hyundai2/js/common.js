$(function(){

// navi
$(window).scroll(function(){

  let scrollPos = $(window).scrollTop();
  if(scrollPos > 20){
    $('header').addClass('fixed');
  }else{
    $('header').removeClass('fixed');
  }
});
$('nav li').click(function(){
  $('.navi nav li').hasClass('active')?
  $(this).removeClass('active'):
  $(this).addClass('active');
});

$('.m_btn').click(function(e){
 e.preventDefault();

 ($('.m_btn').hasClass('on'))?
 ($('.m_btn').removeClass('on'), $('nav>ul').removeClass('on')):
 ($('.m_btn').addClass('on'),$('nav>ul').addClass('on') );
});

// lang_box
$('.lang_box').click(function(e){
  e.preventDefault();
  if( $('.lang_box').hasClass('active') ){
    $('.lang_box').removeClass('active');
    $('.lang_btn').removeClass('active');
  }else{
    $('.lang_box').addClass('active');
    $('.lang_btn').addClass('active');
  }
})
$('.option_items').click(function(e){
  e.preventDefault();
    $('.option_items').removeClass('on');
    $(this).addClass('on');
});

// Side_menu
$(window).scroll(function(){
  curr = $(window).scrollTop();
  area00 = $('.main_vis').offset().top - $(window).height()/2;
  area01 = $('.service').offset().top - $(window).height()/2;
  area02 = $('.history').offset().top - $(window).height()/2;
  area03 = $('.pr_area').offset().top - $(window).height()/2;
  area04 = $('.news').offset().top - $(window).height()/2;
  area05 = $('.contact').offset().top - $(window).height()/2;
  $('.side_menu li').removeClass('active');
  if( curr >= area05 ){
    $('.side_menu li').eq(5).addClass('active').addClass('wt_txt');
  }else if(curr >= area04){
    $('.side_menu li').eq(4).addClass('active').addClass('bl_txt');
  }else if(curr >= area03){
    $('.side_menu li').eq(3).addClass('active').addClass('wt_txt');
  }else if(curr >= area02){
    $('.side_menu li').eq(2).addClass('active').addClass('wt_txt');
  }else if(curr >= area01){
    $('.side_menu li').eq(1).addClass('active').addClass('bl_txt');
  }else{
    $('.side_menu li').eq(0).addClass('active').addClass('wt_txt');
  }
})
$('.side_menu button').click(function(){
 target = $(this).parents('li').data('target')
 off = $('.' + target).offset().top - 60 + 'px';
 $('html, body').stop().animate({scrollTop:off}, 400)
});

$('footer .top').click(function(e){
e.preventDefault();

$('body, html').stop().animate({scrollTop:0}, 500)
});

});
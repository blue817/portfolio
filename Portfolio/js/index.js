$(function(){

$('.menu_btn').click(function(){
 
  if( $('.gnb_wrap').hasClass('on') ){
    $('.gnb_wrap').removeClass('on');
    $('.menu_btn').removeClass('on');
    $('.navi ul').removeClass('on');
  }else{
    $('.gnb_wrap').addClass('on');
    $('.menu_btn').addClass('on');
    $('.navi ul').addClass('on');
  }
});

num_arr=['1', '2', '3', '4', '5','6'];

  // 슬라이더
  const mainSlider = new Swiper('.swiper', {
    speed: 900,
    loop: true,
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },
    autoplay: {
      delay: 5000
    },
    on: {
      init: function () { //초기화 셋팅
        idx = this.realIndex +1; 
        $('.curr').text('0' + idx);
        $('.total').text('0' + ($('.swiper-slide').length - 2));
        act();
      },
    }
  });
  $('.pause_btn').on('click',function(){
    mainSlider.autoplay.stop();
    $('.pause_btn').removeClass('on');
    $('.play_btn').addClass('on');
    $('.ani_line span').stop();
  });
  $('.play_btn').on('click',function(){
    mainSlider.autoplay.start();
    $('.play_btn').removeClass('on');
    $('.pause_btn').addClass('on');
   ani();
  });
// information Box
$('.info_btn').click(function(){
  mainSlider.autoplay.stop();
  $('.pause_btn').removeClass('on');
  $('.play_btn').addClass('on');
  $('.ani_line span').stop();
  $(this).parents('.tit_box').siblings('.information_box').addClass('on');
  $(this).removeClass('on');
});
$('.information_box .inf_close').click(function(){
  mainSlider.autoplay.start();
  $('.play_btn').removeClass('on');
  $('.pause_btn').addClass('on');
  ani();
  $('.information_box').removeClass('on');
  $(this).parent().siblings('.tit_box').find('info_btn').addClass('on');
});
mainSlider.on('slideChange', function () {
  idx = this.realIndex+1; 
  if(idx == 1){
    $('.curr_title').css({
      top : '0'
    })
  
  }else if(idx == 2){
    $('.curr_title').css({
      top : '-30px'
    })
  
  }else if(idx == 3){
   $('.curr_title').css({
     top : '-60px'
    })

  }else if(idx == 4){
     $('.curr_title').css({
      top : '-90px'
   })
  }else if(idx == 5){
    $('.curr_title').css({
      top : '-120px'
    })
  }  else if(idx == 6){
    $('.curr_title').css({
      top : '-150px'
    })
  }
    $('.curr').text('0' + idx);
    $('.total').text('0' + ($('.swiper-slide').length - 2));
    act();
   });
  function ani(){
  $('.ani_line span').css({width:'0'}).stop().animate({ 
      width: '100%'
    }, 5000, function(){
     mainSlider.slideNext();
  });
  }
  function act(){
   if($('.pause_btn').hasClass('on')){
   ani();
   }
 }
   
});
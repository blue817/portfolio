$(function(){

// Group01 MainSlide
const mainSlide = new Swiper('.main_slide .swiper',{
  loop: true,
  pagination:{
    el:'.pagination',
    type:"fraction"
  },
  navigation:{
    nextEl: '.next',
    prevEl: '.prev'
  },
  autoplay:{
    delay: 3000,
    disableOnInteraction: false
  }
});

$('.main_slide .pause_btn').click(function(){
 mainSlide.autoplay.stop();
 $('.main_slide .pause_btn').addClass('active');
 $('.main_slide .play_btn').addClass('active');
});
$('.main_slide .play_btn').click(function(){
  mainSlide.autoplay.start();
  $('.main_slide .pause_btn').removeClass('active');
  $('.main_slide .play_btn').removeClass('active');
});
$('.main_slide .txt_mode').click(function(){
  mainSlide.autoplay.stop();
  $('.main_slide .txt_con').addClass('active');
  $(this).addClass('active');
  $('.main_slide .slide_mode').addClass('active');
  $('.main_slide .pause_btn').addClass('active');
  $('.main_slide .play_btn').addClass('active');
});
$('.main_slide .slide_mode').click(function(){
  mainSlide.autoplay.start();
  $('.main_slide .txt_con').removeClass('active');
  $(this).removeClass('active');
  $('.main_slide .txt_mode').removeClass('active');
  $('.main_slide .pause_btn').removeClass('active');
  $('.main_slide .play_btn').removeClass('active');
});


// Group02 orgSlide

//Notice_area Tabs
$('.notice_area .menu_act').click(function(e){
  e.preventDefault();
  $('.menu_act').removeClass('active');
  $(this).addClass('active');
  $('.notice_area .content').removeClass('active');
  $(this).siblings('.content').addClass('active');
});


// ORG Slide
const orgSlide = new Swiper('.org .swiper',{
  loop: true,
  pagination:{
    el:'.pagination',
    type:"fraction"
  },
  navigation:{
    nextEl: '.next',
    prevEl: '.prev'
  },
  autoplay:{
    delay: 3000,
    disableOnInteraction: false
  }
});
  
$('.org .pause_btn').click(function(){
  orgSlide.autoplay.stop();
  $('.org .pause_btn').addClass('active');
  $('.org .play_btn').addClass('active');
 });
 $('.org .play_btn').click(function(){
   orgSlide.autoplay.start();
   $('.org .pause_btn').removeClass('active');
   $('.org .play_btn').removeClass('active');
 });
 $('.org .txt_mode').click(function(){
   orgSlide.autoplay.stop();
   $('.org .txt_con').addClass('active');
   $(this).addClass('active');
   $('.org .slide_mode').addClass('active');
   $('.org .pause_btn').addClass('active');
   $('.org .play_btn').addClass('active');
 });
 $('.org .slide_mode').click(function(){
   orgSlide.autoplay.start();
   $('.org .txt_con').removeClass('active');
   $(this).removeClass('active');
   $('.org .txt_mode').removeClass('active');
   $('.org .pause_btn').removeClass('active');
   $('.org .play_btn').removeClass('active');
 });
 

// Group03 
const groupSlide = new Swiper('.group03 .swiper',{
  pagination:{
    el:'.group03 .pagination',
    type:"fraction"
  },
  navigation:{
    nextEl: '.next',
    prevEl: '.prev'
  },

});

// Event Slide
const eventSlide = new Swiper('.event_area .swiper',{
  spaceBetween:10,

  pagination:{
    el:'.pagination',
    clickable:true,
  },
  breakpoints: {
  1025: {
      slidesPerView: 4,
  },
  769: {
      slidesPerView: 2,
      spaceBetween: 20
    },
  577: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    320: {
      slidesPerView: 1,
    }
  }
});


// Group04 SeongnamSlide
const seongnamSlide = new Swiper('.seongnam_news .swiper',{
  loop: true,
  spaceBetween:30,
  pagination:{
    el:'.pagination',
    type:"fraction"
  },
  navigation:{
    nextEl: '.next',
    prevEl: '.prev'
  },
  autoplay:{
    delay: 3000,
    disableOnInteraction: false
  }
});

$('.seongnam_news .pause_btn').click(function(){
  seongnamSlide.autoplay.stop();
  $('.seongnam_news .pause_btn').addClass('active');
  $('.seongnam_news .play_btn').addClass('active');
 });
 $('.seongnam_news .play_btn').click(function(){
   seongnamSlide.autoplay.start();
   $('.seongnam_news .pause_btn').removeClass('active');
   $('.seongnam_news .play_btn').removeClass('active');
 });

// Group05
$('.link_box h4').click(function(e){  
  e.preventDefault();
if (window.matchMedia('(max-width: 1024px)').matches) {
  if($(this).hasClass('active')){
    $('.link_box h4').removeClass('active');
    $('.link_box .content').removeClass('active');
  }else{
    $('.link_box h4').removeClass('active');
    $('.link_box .content').removeClass('active');
    $(this).addClass('active');
    $(this).siblings('.content').addClass('active');
  }
}
});

});

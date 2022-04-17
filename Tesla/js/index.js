$(function(){

gsap.registerPlugin(ScrollTrigger);

// Main vis

gsap.to('.main_vis .visual_wrapper',{
  scrollTrigger:{
    trigger: '.main_vis', 
    start: 'top 30%',
    end:'+=1000',
    scrub: 2
    },
   y:'10%'
  });
  gsap.fromTo('.main_vis .tit_box',{
    y:'0',
    opacity: 1,
   },{ 
   scrollTrigger:{
   trigger: '.main_vis', 
   start: 'top -80px',
   end:'+=500',
   scrub:1,
  },
   y:'150%',
   opacity: 0
   });

// // Pdt Area
gsap.fromTo('.pdt_area>.pdt_tit',{
 
  y:'-110%'
 },{ 
   scrollTrigger:{
 trigger: '.pdt_area', 
 start: 'top 80%',
 end:'+=500',
 scrub:2},
 y:'0'
 } );
gsap.fromTo('.pdt_area>.pdt_bg',{

  y:'-30%'
 },{ 
   scrollTrigger:{
 trigger: '.pdt_area', 
 start: 'top 70%',
 end:'+=400',
 scrub:2},
 y:'0'
 });

gsap.fromTo('.pdt_slider',{
  y:'-50%'
 },{ 
   scrollTrigger:{
 trigger: '.pdt_area', 
 start: 'top 70%',
 end:'+=400',
 scrub:2},
 y:'0'
 } );


const pdtSlider = new Swiper('.pdt_slider', {
  loop: true,
  centeredSlides: true,
  slidesPerView:2.4,
  pagination: {
    el: '.pdt_area .pagination',
    type: "progressbar"
  },
  navigation: {
    nextEl: '.pdt_slider .next',
    prevEl: '.pdt_slider .prev'
  },

});
//슬라이드 인덱스
pdtSlider.on('slideChange', function(){
  idx = this.realIndex + 1;
  $('.pdt_tit .tit').removeClass('active');
  $('.pdt_tit .tit0' + idx).addClass('active');
  $('.pdt_btn .btn_group').removeClass('active');
  $('.pdt_btn .btn_group0' + idx).addClass('active');
});

// // About Area

gsap.fromTo('.about_bg',{

  y:'-20%'
 },{ 
   scrollTrigger:{
 trigger: '.about', 
 start: 'top 100%',
 end:'bottom',
 scrub:2},
 y:'0'
 } );
 gsap.fromTo('about .txt_wrap',{
  y:'-20%'
 },{ 
   scrollTrigger:{
 trigger: '.about', 
 start: 'top 100%',
 end:'bottom',
 scrub:1},
 y:'0'
 } );

 gsap.to('.txt_wrap>div .txt02',{
  scrollTrigger:{
    trigger: '.about',  
    start: 'top 40%',
    end:'+=500',  
    scrub:1
    },
  stagger: 0.4, 
  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
  });


const storySlider = new Swiper('.story_slider', {
  slidesPerView: 'auto',
  pagination: {
    el: '.our_story .pagination',
    type: "progressbar"
  },
  navigation: {
    nextEl: '.our_story .next',
    prevEl: '.our_story .prev'
  }
});

const prmtSlider = new Swiper('.prmt_slider', {
  loop:true,
  slidesPerView: 'auto'
});


// Contact

$('#input_email').focus(function(e){
  e.preventDefault();
h = $('.hide_group').children('.hide').height();
$('.hide_group').stop().animate({height:h},500);
});

$('label.txt').click(function(){
  ($('input:checkbox').is(":checked"))?
  $('label.txt').removeClass('on'):
  $('label.txt').addClass('on');
});

$('#consulting').submit(function(){
  if($('#input_email').val() == '' ){
    alert('이메일을 입력해주세요');
    return false;
  }else if($('#input_name').val() == '' ){
    alert('이름을 입력해주세요');
    return false;
  }else if($('#input_lastname').val() == ''){
    alert('성을 입력해주세요')
    return false;
  }else if($("input:checkbox[name=legal]").is(":checked") != true) {
    alert('체크를 해주세요')
    return false;
  }
 alert('문의접수가 정상적으로 접수되었습니다.')
 return;
});








}); // End
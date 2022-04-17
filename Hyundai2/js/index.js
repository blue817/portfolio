$(function(){
 AOS.init();

// Main_vis
main_num_arr = ['02' ,'03', '04', '01'];
main_txt_arr = ['주택분야','토목분야','기타','건축분야'];
main_sub_arr = ['Housing Field','Civil Works','Other Works','Building Works'];
var main_slider = new Swiper('.main_vis .swiper', {
  loop: true,
  loopedSlides: 2,
  navigation: {
      nextEl: ".next",
      prevEl: ".prev"
    },
    pagination: {
      el: '.pagination',
      clickable: true
    },
    on: {
      init: function(){
        idx = this.realIndex;
        $('.next .next_num').text(main_num_arr[idx]);
        $('.next .main_cate').text(main_txt_arr[idx]);
        $('.next .area').text(main_sub_arr[idx]);
      }
    },
});
main_slider.on('slideChange', function(){
  idx = this.realIndex;
  $('.main_vis .main_bg').removeClass('on');
  $('.main_vis .main_bg0' + [idx + 1]).addClass('on');
  $('.next .next_num').text(main_num_arr[idx]);
  $('.next .main_cate').text(main_txt_arr[idx]);
  $('.next .area').text(main_sub_arr[idx]);
});

// Service
gsap.registerPlugin(ScrollTrigger); 

gsap.fromTo('.service .tit', {
y: '-30%',
},{ 
scrollTrigger:{
trigger: '.service',
start: 'top 90%',
end:'bottom',
scrub:2
},
y:'75%',
});

// History
gsap.fromTo('.history .his_bg',{
  y: '-30%'
},{
  scrollTrigger:{
    trigger: '.history',
    start: 'top 70%',
    end:'+=1000',
    scrub: 2
  },
  y: '0' 
  });

const hist_slider = new Swiper(".history .swiper", {
    slidesPerView: 4,
    breakpoints: {
      1300: {
         slidesPerView: 4,
         spaceBetween:20,
         loop:false
       },
       1024: {
        slidesPerView: 4,
        spaceBetween:10,
      },

       768: {
         slidesPerView: 3,
         spaceBetween:10,

       },
       576: {
         slidesPerView: 2,
         spaceBetween: 20,         
       },
       320: {
         slidesPerView: 1,
         spaceBetween: 10,  
       }
     },
    pagination: {
      el: '.pagination',
      clickable: true
    }
});

function numberCounter(target_frame, target_number) {
  this.count = 0; this.diff = 0;
  this.target_count = parseInt(target_number);
  this.target_frame = document.getElementById(target_frame);
  this.timer = null;
  this.counter();
};
numberCounter.prototype.counter = function() {
  var self = this;
  this.diff = this.target_count - this.count;
   
  if(this.diff > 0) {
      self.count += Math.ceil(this.diff / 5);
  }
  this.target_frame.innerHTML = this.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
   
  if(this.count < this.target_count) {
      this.timer = setTimeout(function() { self.counter(); }, 40);
  } else {
      clearTimeout(this.timer);
  }
};
scroll_on = 0;
$(window).scroll(function(){
  curr = $(window).scrollTop();
  target = $('.history').offset().top - $(window).height()/2;
  if(curr >= target){
    if(scroll_on == 0){
      new numberCounter("num01", 76);
      new numberCounter("num02", 62);
      new numberCounter("num03", 850);
      new numberCounter("num04", 11);
      scroll_on = 1;
    }
  } });
// PR_Area
gsap.fromTo('.pr_area', {
backgroundColor: '#7ebea9'
},{
  scrollTrigger:{
    trigger:'.pr_area',
    start:'top 30%',
    end: '+=1200',
    scrub:3},
    backgroundColor: '#275775'
  });
$('.youtube_btn').click(function(e){
  e.preventDefault();
  $('.youtube_bg').addClass('active');
  $('.youtube_wrap').append('<iframe width="560" height="315" src="https://www.youtube.com/embed/RKlbViql5i0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
});
$('.close_btn').click(function(e){
e.preventDefault();
$('.youtube_bg').removeClass('active');
$('.youtube_wrap iframe').remove();
})
// News
const news_slider = new Swiper(".news .swiper", {
  slidesPerView: 5,
  mousewheel: true,
  breakpoints: {
    1301: {
       slidesPerView: 5,
       spaceBetween:30,
     },
     1024: {
      slidesPerView: 3.2,
      spaceBetween:20,
    },
     768: {
       slidesPerView: 2.5,
      spaceBetween:20,
     },
     576: {
       slidesPerView: 2,
       spaceBetween:10,
     },
     320: {
       slidesPerView: 1.3,
       spaceBetween:10,
     }
   }
});
// Contact
gsap.fromTo('.contact .bg', {
y: '-20%'
},{ 
  scrollTrigger:{
    trigger: '.contact',
    start:'top 30%',
    end:'bottom',
    scrub:3
  },
  y: '0%'
});
// CheckBox
$('.legal_chk label').click(function(){
  ($('input:checkbox').is(":checked"))?
  $('.legal_chk label').removeClass('on'):
  $('.legal_chk label').addClass('on');
});
$('#consulting').submit(function(){
if($('input[name="name"]').val() == ""){
  (alert('이름을 입력해주세요!'))
  return false;
} else if($('input[name="phone"]').val() == ""){
 alert('연락처를 입력해주세요')
 return false;
 }else if($('input:checkbox').is(":checked") == false){
 alert('체크를 해주세요')
 return false;
}
 alert('문의접수가 정상적으로 완료되었습니다.')
});
});
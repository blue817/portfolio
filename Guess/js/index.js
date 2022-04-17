 $(function(){

  // popup 
  const popSlide = new Swiper('.pop_slider', {
    pagination: {
      el: '.pagination',
      type: "fraction"
    }
  });
$('.close_day, .close_now').click(function(){
  $('.popup_wrap').addClass('active');
})

// bookmark
$('.heart_box').click(function(){
  ($(this).children('.heart_mark').hasClass('active'))?
  $(this).children('.heart_mark').removeClass('active'):
  $(this).children('.heart_mark').addClass('active');
});

// main_vis
const mainSlide = new Swiper('.main_vis .swiper', {
  loop:true,
  pagination: {
    el: '.pagination',
    type: "fraction",
  }
});

// // Fall21
const fallSlide = new Swiper('.fall_slide', {
loop: false,
slidesPerView: 'auto',
spaceBetween: 10,
});

// Counter JS
function numberCounter(target_frame, target_number) {
  this.count = 0;  this.diff = 0;
  this.target_count = parseInt(target_number);
  this.target_frame = document.getElementById(target_frame);
  this.timer = null;
  this.counter();
};
  numberCounter.prototype.counter = function() {
    var self = this;
    this.diff = this.target_count - this.count;
    if(this.diff > 0){
      self.count += Math.ceil(this.diff / 5);
    }
    this.target_frame.innerHTML = this.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    if(this.count < this.target_count){
      this.timer = setTimeout(function(){self.counter();}, 20);
    }else{
      clearTimeout(this.timer);
    }
  };
  scroll_on = 0;

  $(window).scroll(function(){
    curr = $(window).scrollTop();
    target = $('.fall21').offset().top - $(window).height()/2;
    if(curr >= target){
      if(scroll_on == 0){
        new numberCounter("num01", 766);
        scroll_on = 1;
      }
    }
  });

//Best Items
const bestSlide = new Swiper('.best_items .swiper', {
  centeredSlides: true, 
  slidesPerView: 1,
  navigation: {
    nextEl: '.best_items .next',
    prevEl: '.best_items .prev',
  },
  loop: true
});

// // Denim Items

const denimSlide = new Swiper('.denim_content .swiper', {
  centeredSlides: true, 
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
  loop: true,
  pagination: {
    el: '.pagination',
    type: "progressbar",
  }
});
 // 슬라이더 탭
$('.denim_nav li').click(function(e){
  e.preventDefault();
    $('.denim_nav li').removeClass('active');
    $(this).addClass('active');
    
    target = $(this).data('target');
    $('.denim_content .swiper').removeClass('active');
    $('#' + target).addClass('active');
});


// // md_slider

const mdSlide = new Swiper('.md_items .swiper', {
  loop: true,
  spaceBetween: 10,
  pagination: {
    el: '.pagination',
    type: 'bullets',
    clickable: true,
},

});
// 슬라이더 탭
$('.md_nav li').click(function(e){
  e.preventDefault();
  $('.md_nav li').removeClass('active');
  $(this).addClass('active');

  target = $(this).data('target');
  $('.md_content .swiper').removeClass('active');
  $('#' + target).addClass('active');
});


// exclu Slider

const excluSlide = new Swiper('.exclu .swiper', {
  spaceBetween: 10
});


// // Trend Tab
$('.trend_nav li').click(function(e){
  e.preventDefault();
  $('.trend_nav li').removeClass('active');
  $(this).addClass('active');

  target = $(this).data('target');
  $('.trend_content .trend_list').removeClass('active');
  $('#' + target).addClass('active');
});

// // Rainking Slider

const rankSlide = new Swiper('.ranking .swiper', {
  spaceBetween: 10,
    pagination: {
      el: '.ranking .swiper .pagination',
      type: 'bullets',
      clickable: true,
  },
});

// // Ranking Tab
$('.rank_nav li').click(function(e){
  e.preventDefault();
  $('.rank_nav li').removeClass('active');
  $(this).addClass('active');

  target = $(this).data('target');
  $('.ranking .swiper').removeClass('active');
  $('.' + target).addClass('active');
});


// g_tv Slider

const gtvSlide = new Swiper('.g_tv .swiper', {
  loop: true,
  slidesPerView: 1.8,
  centeredSlides: true, 
  spaceBetween: 10,
  pagination: {
    el: '.pagination',
    type: "fraction",
  },
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false
  }
});

$('.g_tv .youtube_btn').click(function(e){
  e.preventDefault();
  $('.youtube_wrap').addClass('active');
  $('.pop_tv').append('<iframe width="560" height="315" src="https://www.youtube.com/embed/wmH_RbWF0_A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')

});
$('.g_tv .close_btn').click(function(e){
  e.preventDefault();
$('.youtube_wrap').removeClass('active');
});

 });
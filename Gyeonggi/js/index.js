$(function(){

  const group02_slide = new Swiper('.group02 .swiper', {

    loop: true,
    pagination: {
      el: '.group02 .pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.group02 .next',
      prevEl: '.group02 .prev',
    },

  });
  const play01 = document.querySelector('.group02 .play_btn');
  const pause01 = document.querySelector('.group02 .pause_btn');

  $(play01).click(function(){
    group02_slide.autoplay.start();
    $(play01).removeClass('active');
    $(pause01).removeClass('active');
  });
  $(pause01).click(function(){
    group02_slide.autoplay.start();
    $(play01).addClass('active');
    $(pause01).addClass('active');
  });


  const group03_slide = new Swiper('.group03 .swiper', {
    loop:true,
    spaceBetween:30,
    slidesPerView:'auto',
    navigation: {
      nextEl: '.group03 .next',
      prevEl: '.group03 .prev',
    },

  });


  const news_slider = new Swiper('.news_slider .swiper', {
    
    loop:true,
    loopedSlides: 5,
    slidesPerView:4,
    spaceBetween: 30,
    pagination: {
      el: '.news_slider .pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.news_slider .next',
      prevEl: '.news_slider .prev',
    },
    autoplay: {
      delay: 2500,
    },
    breakpoints: {

     1023: {
        slidesPerView: 4,
        spaceBetween: 30
      },

     450: {
        slidesPerView: 2,
        spaceBetween: 20
      },

      320: {
        slidesPerView: 1,
        spaceBetween: 30
      }
    }
      
  });

  const play02 = document.querySelector('.news_slider .play_btn');
  const pause02 = document.querySelector('.news_slider .pause_btn');

  $(play02).click(function(){
    news_slider.autoplay.start();
    $(play02).removeClass('active');
    $(pause02).removeClass('active');
  });
  $(pause02).click(function(){
    news_slider.autoplay.stop();
    $(play02).addClass('active');
    $(pause02).addClass('active');

});

// Notice Area
$('.notice_area h3').click(function(e){
  e.preventDefault();
  $('.notice_area h3').removeClass('active');
  $('.notice_area .content').removeClass('active');
  $(this).addClass('active');
  $(this).siblings('.content').addClass('active');
})






});
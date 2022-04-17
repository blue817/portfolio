$(function(){

// Header
// Co_Banner
let dayClose = document.querySelector('.co_closebtn');
let coBanner = document.querySelector('.co_banner');
dayClose.addEventListener('click', function(){
  coBanner.classList.add('off');
});

let inputCheck = document.querySelector('input[id="input_check"]');
let day_label = document.querySelector('.day_close label');

day_label.addEventListener('click',function(){
  if(inputCheck.checked==true){
    day_label.classList.remove('active');
  }else{
    day_label.classList.add('active');
  }
});


// LangBox
let langBox = document.querySelector('.util_area .lang_box');
let label = document.querySelector('.lang_box .label');
let optionItems = document.querySelectorAll('.lang_box .option_items');

langBox.addEventListener('click', function(){
if(langBox.classList.contains('active')){
  langBox.classList.remove('active');
}else{
  langBox.classList.add('active');
}
});
optionItems.forEach(function(item){
  item.addEventListener('click', function(){
    label.innerHTML = item.textContent;
    if( item.classList.contains('active') ){
      item.classList.remove('active');
    }else{
      for(let i = 0; i< optionItems.length; i++){
        optionItems[i].classList.remove('active');
      }
      item.classList.add('active');
    }
  });
});
// Cate Select
let cateSelect = document.querySelector('.search_container .cate_select');
let searchCate = document.querySelector('.cate_select .search_cate');
let cateItem = document.querySelectorAll('.cate_select .cate_items');

cateSelect.addEventListener('click', function(){
  if(cateSelect.classList.contains('active')){
    cateSelect.classList.remove('active');
  }else{
    cateSelect.classList.add('active');
  }
});
cateItem.forEach(function(item){
  item.addEventListener('click', function(){
    searchCate.innerHTML = item.textContent;
 });
});

// Search Area keywordSlide
const keywordSlide = new Swiper('.key_word_wrap .swiper',{
  loop: true,
  slidesPerView:'auto',
  spaceBetween:10,
  navigation:{
    prevEl: '.key_word_wrap .prev i',
    nextEl: '.key_word_wrap .next i',
  },
  autoplay:{
    delay: 3000,
    disableOnInteraction: false
  }
});

// Gnb Area

$('.mobile_btn').click(function(e){
  e.preventDefault();
    $('.gnb_wrap').addClass('active');
    $('body').addClass('hidden');
    $('.mbg_cover').addClass('active');
    $('.util_area').addClass('on');
  });
  $('.gnb_wrap h1 i').click(function(e){
    e.preventDefault();
    $('.gnb_wrap').removeClass('active');
    $('body').removeClass('hidden');
    $('.mbg_cover').removeClass('active');
    $('.util_area').removeClass('on');
});




$('.gnb_area nav>ul>li').hover(function(){
  if (window.matchMedia('(min-width: 1025px)').matches) {
    $('.lnb').removeClass('active');
    $(this).children('.lnb').addClass('active');
    $('.bg_cover').addClass('active');
  }
  },function(){
        $('.lnb').removeClass('active');
        $('.bg_cover').removeClass('active');
  });
  $('.gnb_area nav>ul>li').click(function(e){
    e.preventDefault();
    if (window.matchMedia('(max-width: 1024px)').matches) {
     h = $(this).children('.lnb').children('ul').height();
     if( $(this).children('.lnb').height()>0 ){
      $('.lnb').stop().animate({height:0},400);
      $('nav>ul>li').removeClass('active');
    } else{
      $('.lnb').stop().animate({height:0},400);
      $('nav>ul>li').removeClass('active');
      $(this).children('.lnb').stop().animate({height:h},400);
      $(this).addClass('active');
     }
    }
    });
if (window.matchMedia('(min-width: 1025px)').matches) {
 $(window).scroll(function(){ 
    let curr = $(window).scrollTop();
    let scrollPos = $('.gnb_wrap').offset().top;
    if(curr > scrollPos){
    $('.gnb_wrap').addClass('on');
    }else if(curr < 20){
    $('.gnb_wrap').removeClass('on');
    }
  });
  }
if (window.matchMedia('(max-width: 1024px)').matches) {
$(window).scroll(function(){
    let curr1 = $(window).scrollTop();
    let scrollPos1 = $('.m_group').offset().top;
    if(curr1 > scrollPos1){
    $('.m_group').addClass('active');
    }else if(curr1 < 20){
    $('.m_group').removeClass('active');
   }
  });
 }
// 창변경시 리로드
let currWidth = window.outerWidth;
window.addEventListener('resize',debounce(() =>{ 
  if(currWidth > window.outerWidth || currWidth < window.outerWidth){
        location.reload();
   }
},300));
 
function debounce (callback, wait){
  let timeout;
  return function(...args){
  const context = this;
  clearTimeout(timeout);
  timeout = setTimeout(() => callback.apply(context, args), wait);
}
}


// Footer

$('.f_top>ul>li').click(function(e){
  e.preventDefault();
  if (window.matchMedia('(min-width: 1025px)').matches) {
  if($(this).hasClass('active')){
    $('.f_menu').removeClass('active');
    $('.f_top>ul>li').removeClass('active');
  }else{
    $('.f_menu').removeClass('active');
    $('.f_top>ul>li').removeClass('active');
    $(this).addClass('active');
    $(this).find('.f_menu').addClass('active');
  }
}
})

$('.f_top>ul>li').click(function(e){
  if (window.matchMedia('(max-width: 1024px)').matches) {
let fMenu_h = $(this).find('.f_menu').children('ul').innerHeight();
if($(this).find('.f_menu').height()>0){
  $('.f_menu').stop().animate({height:0},300);
  $('.f_top>ul>li').removeClass('active');
}else{
  $('.f_menu').stop().animate({height:0},300);
  $(this).find('.f_menu').stop().animate({height:fMenu_h},300)
  $(this).addClass('active');
}
  }
});


});
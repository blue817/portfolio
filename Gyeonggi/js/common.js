$(function(){
  $('.day_close button').click(function(){
    $('.co_banner').addClass('off');
  });

  $('.util_area .lang_box').click(function(e){
    e.preventDefault();
    if($('.lang_box').hasClass('active')){
      $('.lang_box').removeClass('active');
    }else{
      $('.lang_box').addClass('active');
    }
  });
  $('.lang_box .option_items').click(function(e){
    e.preventDefault();
    textItem = $(this).text()
    $('.lang_box .label').text(textItem);
    $('.lang_box').removeClass('active');
  })
 $(window).scroll(function(){
  let curPos = $(window).scrollTop();
  navFixed = $('.navi').offset().top;
  if(curPos > navFixed){
    $('.navi').addClass('fixed');
  }else if(curPos < 20){
    $('.navi').removeClass('fixed');
  }
 })
const pcMenu01 = document.querySelectorAll('.gnb>.inner>ul>li');
const reset01 = function(){
  for(let i = 0; i<pcMenu01.length; i++){
    pcMenu01[i].classList.remove('on');
  };
};

const pcMenu = function(){
  pcMenu01.forEach(function(item){
   console.log(item);
   item.addEventListener('mouseover',function(){
    reset01();
    item.classList.add('on');
   })
  item.addEventListener('mouseleave',function(){
    reset01();
  })
 })

}


const gnbArea = document.querySelector('.navi .gnb');
const mBtn = document.querySelector('.mobile_btn');
const bodyE = document.querySelector('body');
mBtn.addEventListener('click',function(e){
  e.preventDefault();
  gnbArea.classList.add('active');
  bodyE.classList.add('hidden');
});
const mClose = document.querySelector('.close_mobile');
mClose.addEventListener('click',function(e){
  e.preventDefault();
  gnbArea.classList.remove('active');
  bodyE.classList.remove('hidden');
});
const mMenu01 = document.querySelectorAll('.gnb>.inner>ul>li');
const lnbList = gnbArea.querySelectorAll('.lnb>li');
const reset02 = function(){
  for(let r = 0; r<mMenu01.length; r++){
   mMenu01[r].classList.remove('active');
   }
}
const reset03 = function(){
  for(let w = 0; w<lnbList.length; w++){
   lnbList[w].classList.remove('open');
   }
}
const mMenu = function(){
  mMenu01.forEach(function(item){
   item.addEventListener('click',function(e){
     e.preventDefault();
     if(item.classList.contains('active')){

     }else{
       reset02();
       item.classList.add('active');
     }
   });
  })
 }
const mSub = function(){
    lnbList.forEach(function(ev){
    ev.addEventListener('click',function(e){
      e.preventDefault();
      console.log(lnbList);
      if(ev.classList.contains('open')){
      ev.classList.remove('open');
      }else{
        reset03();
        ev.classList.add('open');
     }
    })
   })
}

if (window.matchMedia('(max-width: 1023px)').matches) {
  mMenu();
  mSub();
}
if (window.matchMedia('(min-width: 1024px)').matches) {
  pcMenu();
}

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

  $('.pop_btn').click(function(e){
    e.preventDefault();
    $('.pop_wrap').addClass('active');
    $('body').addClass('hidden');
  });
  $('.pop_close').click(function(e){
    e.preventDefault();
    $('.pop_wrap').removeClass('active');
    $('body').removeClass('hidden');
  });

  let menuTab01 = $('.pop_01').position().top - 250;
  let menuTab02 = $('.pop_02').position().top - 250;
  let menuTab03 = $('.pop_03').position().top - 250;
  let menuTab04 = $('.pop_04').position().top - 250;
  let menuTab05 = $('.pop_05').position().top - 250;
  let menuTab06 = $('.pop_06').position().top - 250;
  let menuTab07 = $('.pop_07').position().top - 250;
  $('.pop_lnb>ul').scroll(function(){
    let curr  = $('.pop_lnb>ul').scrollTop() ;
      $('.pop_gnb li').removeClass('active');
    if(curr >= menuTab07 - $('.pop_lnb>ul').height()/2) {
      $('.menu_07').addClass('active');
    }else if(curr >= menuTab06 ){
      $('.menu_06').addClass('active');
    }else if(curr >= menuTab05 ){
      $('.menu_05').addClass('active');
    }else if(curr >= menuTab04 ){
      $('.menu_04').addClass('active');
    }else if(curr >= menuTab03 ){
      $('.menu_03').addClass('active');
    }else if(curr >= menuTab02){
      $('.menu_02').addClass('active');
    }else if(curr >= menuTab01){
      $('.menu_01').addClass('active');
    }
  })
  $('.menu_01').click(function(){
    $('.pop_lnb>ul').stop().animate({scrollTop:menuTab01},400);
  })
  $('.menu_02').click(function(){
    $('.pop_lnb>ul').stop().animate({scrollTop:menuTab02},400);
  })
  $('.menu_03').click(function(){
    $('.pop_lnb>ul').stop().animate({scrollTop:menuTab03},400);
  })
  $('.menu_04').click(function(){
    $('.pop_lnb>ul').stop().animate({scrollTop:menuTab04},400);
  })
  $('.menu_05').click(function(){
    $('.pop_lnb>ul').stop().animate({scrollTop:menuTab05},400);
  })
  $('.menu_06').click(function(){
    $('.pop_lnb>ul').stop().animate({scrollTop:menuTab06},400);
  })
  $('.menu_07').click(function(){
    $('.pop_lnb>ul').stop().animate({scrollTop:menuTab07},400);
  })



  // Footer
 $('footer nav>ul>li').click(function(e){
  e.preventDefault(); 
  if($(this).hasClass('active')){
    $('footer nav>ul>li').removeClass('active');
    $('footer nav .f_sub').removeClass('active');
  }else{
   $('footer nav>ul>li').removeClass('active');
   $('footer nav .f_sub').removeClass('active');
  $(this).addClass('active');
  $(this).children('.f_sub').addClass('active');
  }

 })

 $('.family_site h3').click(function(){
  if($('.site_board').hasClass('active')){
    $('.site_board').removeClass('active')
  }else{
    $('.site_board').addClass('active')
  }
 });







});
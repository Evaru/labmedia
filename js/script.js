$(document).on('click','.container__page__list li',function(){
    $('.container__page__list li').removeClass('active__page');
    $(this).addClass('active__page');
});

//burger menu
$(document).on("click",".menu__burger",function () {
    $(this).closest('.menu').toggleClass('menu_state_open');
    $('.menu ul').toggleClass('menu_state_open');
  })
  $(document).on("click",".menu li",function () {
    $(this).closest('.menu').toggleClass('menu_state_open');
  })
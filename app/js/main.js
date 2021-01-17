$(function () {
  $('.answers-questions__item-title').on('click', function () {
    $(this).siblings().slideToggle();
    $(this).toggleClass('answers-questions__item-title--active');
  });
 
})
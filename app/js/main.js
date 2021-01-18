$(function () {
  $('.answers-questions__item-title').on('click', function () {
    $(this).siblings().slideToggle();
    $(this).toggleClass('answers-questions__item-title--active');
  });

  $('.stages__link').on('click', function () {
    $(this).nextAll().slideToggle();
    $(this).toggleClass('stages__link--active');
  });
 
})
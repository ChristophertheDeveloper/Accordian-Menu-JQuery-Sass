$(document).ready(function () {

    $('.accordion-header').click(function () {
        $('.accordion .accordion-body').slideUp();
      $(this).next('.accordion-body').slideDown();
      
      $('.accordion .accordion-header .icon').text('+');
      $(this).children('.icon').text ('-');

          });

});
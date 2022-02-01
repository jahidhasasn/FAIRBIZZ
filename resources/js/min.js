const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

  //smooth scrool
  $(function(){
    $('.main-menu ul li a').on('click', function(){
      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
  
      }, 1000);
      return false;

    });
  });
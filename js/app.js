
$(document).ready(function() {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');
  
  hamburger.addEventListener('click', function() {
    menu.classList.toggle('open');
  });

    $('.carousel').slick({
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      dots: true,
      fade: true,
      cssEase: 'linear',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            dots: false
          }
        }
      ]
    });
  
});


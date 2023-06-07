$(document).ready(function() {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');
  const links = document.querySelectorAll('.menu a');
  
  hamburger.addEventListener('click', function() {
    menu.classList.toggle('open');
  });
  
  links.forEach(function(link) {
    link.addEventListener('click', function() {
      menu.classList.remove('open');
    });
  });
  

  $('.carousel').slick({
    autoplay: true, // Agregado: Inicia el carousel automáticamente
    autoplaySpeed: 2000,
    infinite: true,
    dots: true,
    fade: true,
    arrows: false,
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

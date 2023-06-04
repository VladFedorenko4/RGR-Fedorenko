
document.addEventListener("DOMContentLoaded", function(){
   document.getElementById("burger").addEventListener("click", function(){
    document.querySelector("header").classList.toggle("open")
   } )
})



// slider
$(document).ready(function() {
  var slides = $('.slide');
  var currentSlide = 0;
  var slideInterval = setInterval(nextSlide, 3000); // Інтервал між зміною слайдів (в мілісекундах)

  showSlide(currentSlide);

  function showSlide(index) {
    slides.hide();
    slides.eq(index).fadeIn();
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  $('#prevBtn').click(function() {
    prevSlide();
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 2000);
  });

  $('#nextBtn').click(function() {
    nextSlide();
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 2000);
  });
});

$(document).ready(function() {
  $('#showMoreBtn').click(function() {
    $('.gallery-item.hidden').slice(0, 6).removeClass('hidden');
    if ($('.gallery-item.hidden').length === 0) {
      $('#showMoreBtn').hide();
    }
  });
});


/* Your JS here. */
console.log('Hello World!')

let slideIndex = 1;
showSlides(slideIndex);


window.plusSlides = function(n) {
  showSlides(slideIndex += n);
}


window.currentSlide = function(n) {   
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
} 





window.addEventListener("scroll", function() {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 40) {
    navbar.classList.add("shrink");
  } else {
    navbar.classList.remove("shrink");
  }
});






document.addEventListener('DOMContentLoaded', function() {
  const hero = document.getElementById('hero');
  const modal = document.getElementById('modal');
  const video = document.getElementById('vid');
  const close = document.getElementById('x');

  function openModal() {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = '';
    video.pause();
  }


  hero.addEventListener('click', openModal);



  close.addEventListener('click', function(click) { 
    click.stopPropagation();
    closeModal();
  });

  document.getElementById('modal-container').addEventListener('click', function(click) {
      click.stopPropagation();
    });

});







document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll("#navbar a");

  function Highlight(link) {
    links.forEach(curr => curr.classList.remove("highlight"));
    if (link) link.classList.add("highlight");
  }

  function lastVisibleSection() {
    let fit = null;

    links.forEach(link => {
      const section = document.querySelector(link.getAttribute("href"));
      if (!section) return;

      const rectangle = section.getBoundingClientRect();
      if (rectangle.top < window.innerHeight && rectangle.bottom > 0) {
        if (!fit || rectangle.top > fit.rect.top) fit = { link, rect: rectangle };
      }
    });

    return fit ? fit.link : null;
  }

  function update() {
    Highlight(lastVisibleSection());
  }

  window.addEventListener("scroll", update);
  window.addEventListener("resize", update);
  update();
});







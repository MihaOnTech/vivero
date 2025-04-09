document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling para enlaces de la navegación
  const navLinks = document.querySelectorAll('.navbar a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      scrollToSection(targetId);
    });
  });

  // Función para hacer scroll a una sección determinada
  window.scrollToSection = function(id) {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Funcionalidad del carrusel
  let slideIndex = 0;
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      dots[i].classList.remove('active');
      if (i === index) {
        slide.classList.add('active');
        dots[i].classList.add('active');
      }
    });
  }

  function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  }

  // Cambiar de slide automáticamente cada 5 segundos
  setInterval(nextSlide, 5000);

  // Eventos para los dots (puntos de navegación del carrusel)
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      slideIndex = parseInt(dot.getAttribute('data-slide'));
      showSlide(slideIndex);
    });
  });

  // Mensaje visual tras enviar el formulario
  const contactForm = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');

  if (contactForm && formMessage) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      formMessage.classList.remove('hidden');
      formMessage.classList.add('show');

      this.reset();

      setTimeout(() => {
        formMessage.classList.remove('show');
        formMessage.classList.add('hidden');
      }, 4000);
    });
  }
});

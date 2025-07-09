document.addEventListener("DOMContentLoaded", function () {
  // Funcionalidad del menú hamburguesa
  const toggle = document.getElementById("menu-toggle");
  toggle.addEventListener("change", function () {
    document.body.classList.toggle("menu-open", toggle.checked);
  });

  // Funcionalidad del botón de Preguntas Frecuentes
  const faqToggle = document.getElementById('faqToggle');
  const faqPopup  = document.getElementById('faqPopup');
  faqToggle.addEventListener('click', () => {
    faqPopup.style.display = faqPopup.style.display === 'block' ? 'none' : 'block';
  });

  // Envío del formulario del globo de preguntas
  const faqSendButton = document.getElementById('faqSend');
  faqSendButton.addEventListener('click', () => {
    const name    = document.getElementById('faqName').value.trim();
    const email   = document.getElementById('faqEmail').value.trim();
    const message = document.getElementById('faqMessage').value.trim();
    if (!name || !email || !message) {
      alert('Por favor, completa todos los campos.');
    } else {
      alert('¡Mensaje enviado! Gracias por contactarnos.');
      document.getElementById('faqName').value    = '';
      document.getElementById('faqEmail').value   = '';
      document.getElementById('faqMessage').value = '';
      faqPopup.style.display = 'none';
      // Aquí podrías hacer un fetch() a tu backend
    }
  });

  // Toggle FAQ en sección de preguntas frecuentes
  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function () {
      this.parentElement.classList.toggle('active');
    });
  });

  // Carrusel de cursos destacados
  const carousel = document.getElementById('cursos-tendencias-carousel');
  const items = carousel.querySelectorAll('.carousel-item');
  const prevBtn = document.querySelector('.cursos-tendencias-prev');
  const nextBtn = document.querySelector('.cursos-tendencias-next');
  let currentIndex = 0;
  const visibleItems = 3; // Cambia según el diseño responsivo

  function updateCarousel() {
    items.forEach((item, idx) => {
      if (idx >= currentIndex && idx < currentIndex + visibleItems) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

  function showPrev() {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  }

  function showNext() {
    if (currentIndex < items.length - visibleItems) {
      currentIndex++;
      updateCarousel();
    }
  }

  prevBtn.addEventListener('click', showPrev);
  nextBtn.addEventListener('click', showNext);

  updateCarousel();
});

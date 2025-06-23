// Funcionalidades del carrusel "Mis rutas" en index.html

document.addEventListener("DOMContentLoaded", function () {
  const rutasCarousel = document.getElementById('mis-rutas-carousel');
  const rutasNextBtn = document.querySelector('.mis-rutas-next');
  const rutasPrevBtn = document.querySelector('.mis-rutas-prev');
  const rutasScrollAmount = 340;

  function getRutasGuardadas() {
    // Las rutas deben estar guardadas en localStorage bajo la clave 'rutasUsuario'
    // Ejemplo de estructura: ['Ruta 1', 'Ruta 2', ...]
    const rutas = JSON.parse(localStorage.getItem('rutasUsuario') || '[]');
    // Convertimos a objetos para mostrar en el carrusel
    return rutas.map(nombre => ({
      nombre,
      cursos: 0,
      descripcion: 'Ruta Personalizada',
      icono: 'fa-route'
    }));
  }

  function renderRutasCarousel() {
    if (!rutasCarousel) return;
    rutasCarousel.innerHTML = "";
    const rutas = getRutasGuardadas();
    if (rutas.length === 0) {
      rutasCarousel.innerHTML = `<div style="color:#bdbdbd;padding:24px 0;">No tienes rutas creadas aún.</div>`;
      return;
    }
    rutas.forEach((ruta, idx) => {
      const item = document.createElement('div');
      item.className = 'ruta-carousel-item';
      item.style.cursor = 'pointer';
      item.innerHTML = `
        <div class="ruta-card">
          <div class="ruta-icon"><i class="fas ${ruta.icono}"></i></div>
          <div class="ruta-info">
            <div class="ruta-nombre">${ruta.nombre}</div>
            <div class="ruta-detalles">${ruta.cursos} cursos &nbsp; <span class="ruta-descripcion">${ruta.descripcion}</span></div>
          </div>
          <div class="ruta-arrow"><i class="fas fa-arrow-right"></i></div>
        </div>
      `;
      // Redirige a mis_rutas.html con el nombre de la ruta como hash y scroll al detalle
      item.addEventListener('click', () => {
        window.location.href = `mis_rutas.html#${encodeURIComponent(ruta.nombre)}`;
      });
      rutasCarousel.appendChild(item);
    });
  }

  renderRutasCarousel();

  if (rutasNextBtn && rutasCarousel) {
    rutasNextBtn.addEventListener('click', () => {
      rutasCarousel.scrollBy({ left: rutasScrollAmount, behavior: 'smooth' });
    });
  }
  if (rutasPrevBtn && rutasCarousel) {
    rutasPrevBtn.addEventListener('click', () => {
      rutasCarousel.scrollBy({ left: -rutasScrollAmount, behavior: 'smooth' });
    });
  }
});

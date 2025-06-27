import { dataCursos } from './datacursos.js';

// Nombres de los cursos que quieres mostrar en el carrusel
const cursosRecomendados = [
  "Fundamentos de Machine Learning",
  "Fundamentos de Deep Learning",
  "Procesamiento de Lenguaje Natural",
  "Visión por Computadora",
  "Data Science"
];

const carousel = document.getElementById('cursos-recomendados-carousel');
if (carousel) {
  carousel.innerHTML = cursosRecomendados.map(nombre => {
    const curso = dataCursos.find(c => c.nombre === nombre);
    if (!curso) return '';
    return `
      <div class="carousel-item">
        <img src="${curso.imagen}" alt="${curso.nombre}">
        ${curso.pro ? '<span class="badge-pro">PRO</span>' : ''}
        <div class="carousel-title">${curso.nombre}</div>
        <div class="carousel-progress">Por ${curso.profesor}</div>
        <a href="info_all_cursos.html?nombre=${encodeURIComponent(curso.nombre)}" class="btn-outline">Ver curso</a>
      </div>
    `;
  }).join('');
}
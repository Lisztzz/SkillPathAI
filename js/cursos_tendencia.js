import { dataCursos } from './datacursos.js';

// Nombres de los cursos que quieres mostrar en el carrusel
const cursosTendencia = [
  "Procesamiento de Lenguaje Natural",
  "Visión por Computadora",
  "Fundamentos de Machine Learning",
  "Tecnología y Sostenibilidad",
  "Marketing Digital",
  "Data Science"
];

const carousel = document.getElementById('cursos-tedencia-carousel');
if (carousel) {
  carousel.innerHTML = cursosTendencia.map(nombre => {
    const curso = dataCursos.find(c => c.nombre === nombre);
    if (!curso) return '';
    return `
      <div class="carousel-item">
        <img src="${curso.imagen}" alt="${curso.nombre}">
        ${curso.pro ? '<span class="badge-pro">PRO</span>' : ''}
        <div class="carousel-title">${curso.nombre}</div>
        <div class="carousel-progress">Por ${curso.profesor}</div>
        <a href="info_all_cursos.html?nombre=${encodeURIComponent(curso.nombre)}" class="btn-outline">Descubrir</a>
      </div>
    `;
  }).join('');
}
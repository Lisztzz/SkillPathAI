import { dataCursos } from './datacursos.js';

const grid = document.querySelector('.cursos-grid');
if (grid) {
  grid.innerHTML = dataCursos.map(curso => `
    <a href="info_all_cursos.html?nombre=${encodeURIComponent(curso.nombre)}" class="curso-link">
      <div class="curso-card">
        <img src="${curso.imagen}" alt="${curso.nombre}" class="curso-img">
        ${curso.pro ? '<span class="badge-pro">PRO</span>' : ''}
        <div class="curso-info">
          <h3 class="curso-titulo">${curso.nombre}</h3>
          <p class="curso-descripcion">${curso.descripcion}</p>
        </div>
      </div>
    </a>
  `).join('');
}
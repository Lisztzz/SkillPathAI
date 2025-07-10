import { cursosDetalle } from './curso_gratis_o_pro.js';

function getCursoFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('nombre');
}

const nombreCurso = getCursoFromURL();
const curso = cursosDetalle.find(c => c.nombre === nombreCurso);

if (curso) {
  document.querySelector('.curso-pro-titulo').textContent = curso.nombre;
  document.querySelector('.curso-pro-desc').innerHTML = curso.descripcion_larga;
  document.querySelector('.badge-nivel').textContent = curso.nivel || '';
  document.querySelector('.badge-tiempo').textContent = curso.duracion || '';
  document.querySelector('.badge-profesor').textContent = curso.profesor || '';
  document.querySelector('.badge-modulo').textContent = `${curso.modulos} módulos`;

  // Mostrar o no la insignia PRO
  const badgePro = document.querySelector('.badge-pro');
  if (curso.pro) {
    badgePro.style.display = 'inline-block';
  } else {
    badgePro.style.display = 'none';
  }

  // Botón de acción
  const btn = document.querySelector('.btn-accion');
  if (curso.pro && !curso.puedeEmpezar) {
    btn.textContent = 'Mejorar a Pro';
    btn.disabled = false;
    btn.classList.add('btn-mejorar-pro');
    btn.classList.remove('btn-comenzar');
    btn.onclick= function() {
      window.location.href = 'home.html#precios';
    };
  } else {
    btn.textContent = 'Comenzar curso';
    btn.disabled = false;
    btn.classList.add('btn-comenzar');
    btn.classList.remove('btn-mejorar-pro');
    btn.onclick = function() {
      // Navegar al primer módulo del curso
      window.location.href = `detalle_modulo.html?curso=${encodeURIComponent(curso.nombre)}&modulo=1`;
    };
  }
} else {
  document.querySelector('.curso-pro-main').innerHTML = '<h2>Curso no encontrado</h2>';
}
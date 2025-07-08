// Renderizado de módulos del curso en info_all_cursos.html
import { dataCursos } from './datacursos.js';

// Función para obtener el curso desde la URL
function getCursoFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('nombre');
}

// Función para filtrar y obtener los módulos de un curso específico
function obtenerModulosCurso(nombreCurso) {
  const curso = dataCursos.find(c => c.nombre === nombreCurso);
  if (!curso) return [];

  const modulos = [];
  
  // Buscar módulos en el curso (considerando typos como "moudlo1")
  for (let i = 1; i <= curso.modulos; i++) {
    const moduloTexto = curso[`modulo${i}`] || curso[`moudlo${i}`];
    if (moduloTexto) {
      modulos.push({
        numero: i,
        titulo: moduloTexto
      });
    }
  }
  
  return modulos;
}

// Función para renderizar los módulos en la lista
function renderizarModulos() {
  const nombreCurso = getCursoFromURL();
  const modulosLista = document.querySelector('.modulos-lista');
  const curso = dataCursos.find(c => c.nombre === nombreCurso);
  
  if (!modulosLista || !curso) return;
  
  // Limpiar lista existente
  modulosLista.innerHTML = '';
  
  // Obtener módulos del curso
  const modulos = obtenerModulosCurso(nombreCurso);
  
  if (modulos.length === 0) {
    modulosLista.innerHTML = '<li style="color: #8CCCCF; text-align: center; padding: 1rem;">No hay módulos disponibles</li>';
    return;
  }
  
  // Renderizar cada módulo
  modulos.forEach(modulo => {
    const li = document.createElement('li');
    li.innerHTML = `
      <a href="detalle_modulo.html?curso=${encodeURIComponent(nombreCurso)}&modulo=${modulo.numero}" 
         style="text-decoration: none; color: inherit; display: block; width: 100%; height: 100%;">
        <div class="modulo-numero">Módulo ${modulo.numero}</div>
        <div class="modulo-titulo">${modulo.titulo}</div>
        <div style="margin-top: 0.5rem; color: #00F7FF; font-size: 0.9rem;">
          <i class="fas fa-play-circle"></i> Ver módulo
        </div>
      </a>
    `;
    
    // Agregar hover effect
    li.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px)';
      this.style.boxShadow = '0 4px 15px rgba(0, 247, 255, 0.3)';
    });
    
    li.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = 'none';
    });
    
    modulosLista.appendChild(li);
  });
}

// Función para actualizar el contador de módulos en las etiquetas
function actualizarContadorModulos() {
  const nombreCurso = getCursoFromURL();
  const curso = dataCursos.find(c => c.nombre === nombreCurso);
  const badgeModulo = document.querySelector('.badge-modulo');
  
  if (curso && badgeModulo) {
    badgeModulo.textContent = `${curso.modulos} módulos`;
  }
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  // Pequeño delay para asegurar que otros scripts hayan terminado
  setTimeout(() => {
    renderizarModulos();
    actualizarContadorModulos();
  }, 100);
});

// Exportar funciones para uso en otros archivos si es necesario
export { obtenerModulosCurso, renderizarModulos, actualizarContadorModulos };

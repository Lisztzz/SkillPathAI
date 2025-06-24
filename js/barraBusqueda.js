import { dataCursos } from './datacursos.js';

document.addEventListener("DOMContentLoaded", function () {
  // Selecciona todos los inputs de búsqueda en todos los navbars
  const searchInputs = document.querySelectorAll('.search-form input[type="text"]');

  searchInputs.forEach(searchInput => {
    let resultsBox = null;

    // Crear el contenedor de resultados si no existe
    function ensureResultsBox() {
      if (!resultsBox) {
        resultsBox = document.createElement('div');
        resultsBox.className = 'search-results-box';
        resultsBox.style.position = 'absolute';
        resultsBox.style.background = '#23242a';
        resultsBox.style.color = '#fff';
        resultsBox.style.width = '100%';
        resultsBox.style.maxHeight = '320px';
        resultsBox.style.overflowY = 'auto';
        resultsBox.style.borderRadius = '0 0 12px 12px';
        resultsBox.style.boxShadow = '0 4px 16px rgba(0,0,0,0.13)';
        resultsBox.style.zIndex = '1000';
        resultsBox.style.display = 'none';
        resultsBox.style.top = '100%';
        resultsBox.style.left = '0';
        resultsBox.style.fontSize = '1rem';
        resultsBox.style.padding = '0';
        resultsBox.style.margin = '0';
        resultsBox.style.borderTop = '1px solid #2E696B';
        const parent = searchInput.closest('.navbar-busqueda') || searchInput.parentElement;
        parent.style.position = 'relative';
        parent.appendChild(resultsBox);
      }
    }

    function showResults(results) {
      ensureResultsBox();
      if (results.length === 0) {
        resultsBox.innerHTML = '<div class="search-result-item" style="padding:12px 18px; color:#8CCCCF;">No se encontraron cursos.</div>';
      } else {
        resultsBox.innerHTML = results.map(curso => `
          <div class="search-result-item" 
               data-nombre="${encodeURIComponent(curso.nombre)}"
               style="display:flex; align-items:center; gap:12px; padding:12px 18px; cursor:pointer; border-bottom:1px solid #214A4A;">
            <img src="${curso.imagen}" alt="${curso.nombre}" style="width:38px; height:38px; border-radius:8px; object-fit:cover; background:#1a3a3a;">
            <div style="flex:1;">
              <div style="font-weight:600; color:#fff;">${curso.nombre}</div>
              <div style="font-size:0.95rem; color:#8CCCCF;">${curso.pro ? 'PRO' : 'Gratis'}</div>
            </div>
          </div>
        `).join('');
      }
      resultsBox.style.display = 'block';
    }

    function hideResults() {
      if (resultsBox) resultsBox.style.display = 'none';
    }

    function buscarCursos(query) {
      const q = query.trim().toLowerCase();
      if (!q) return [];
      return dataCursos.filter(curso => curso.nombre.toLowerCase().includes(q));
    }

    ensureResultsBox();

    // Mostrar resultados al escribir
    searchInput.addEventListener('input', function () {
      const value = searchInput.value;
      if (value.trim().length === 0) {
        hideResults();
        return;
      }
      const resultados = buscarCursos(value);
      showResults(resultados);
    });

    // Delegar click en el resultsBox para redirigir correctamente
    resultsBox.addEventListener('mousedown', function (e) {
      const item = e.target.closest('.search-result-item');
      if (item && item.hasAttribute('data-nombre')) {
        const nombre = decodeURIComponent(item.getAttribute('data-nombre'));
        // Limpia el input de búsqueda antes de redirigir
        searchInput.value = '';
        window.location.href = `info_all_cursos.html?nombre=${encodeURIComponent(nombre)}`;
      }
    });

    // Ocultar resultados al hacer click fuera
    document.addEventListener('mousedown', function (e) {
      if (resultsBox && !e.target.closest('.navbar-busqueda')) {
        hideResults();
      }
    });

    // Ocultar resultados al perder foco
    searchInput.addEventListener('blur', function () {
      setTimeout(hideResults, 150);
    });
  });
});

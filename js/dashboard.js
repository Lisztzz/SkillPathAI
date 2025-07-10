import { FiltroModulos } from './filtrarModulos.js';
const filtroModulos = new FiltroModulos();

document.addEventListener("DOMContentLoaded", function () {
  // Manejar el menú hamburguesa
  const menuToggle = document.getElementById('menu-toggle');
  const offcanvasMenu = document.getElementById('offcanvas-menu');
  const offcanvasOverlay = document.getElementById('offcanvas-overlay');
  const closeOffcanvas = document.querySelector('.close-offcanvas');
  
  function showOffcanvas() {
    offcanvasMenu.style.right = '0';
    offcanvasOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  
  function hideOffcanvas() {
    offcanvasMenu.style.right = '-260px';
    offcanvasOverlay.classList.remove('active');
    document.body.style.overflow = '';
    menuToggle.checked = false;
  }
  
  if (menuToggle && offcanvasMenu) {
    menuToggle.addEventListener('change', function() {
      if (this.checked) {
        showOffcanvas();
      } else {
        hideOffcanvas();
      }
    });
  }
  
  if (closeOffcanvas) {
    closeOffcanvas.addEventListener('click', function() {
      hideOffcanvas();
    });
  }
  
  if (offcanvasOverlay) {
    offcanvasOverlay.addEventListener('click', function() {
      hideOffcanvas();
    });
  }

  // Sidebar toggle
  const sidebar = document.getElementById("sidebar");
  const sidebarToggle = document.getElementById("sidebarToggle");
  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener("click", () => {
      sidebar.classList.toggle("collapsed");
      document.body.classList.toggle("sidebar-collapsed");
      if (sidebar.classList.contains("collapsed")) {
        sidebarToggle.innerHTML = "&gt;";
      } else {
        sidebarToggle.innerHTML = "&lt;&lt;";
      }
      sidebarToggle.style.display = "flex";
      sidebarToggle.style.alignItems = "center";
      sidebarToggle.style.justifyContent = "center";
    });
  }

  // --- NAVBAR AVATAR MENU PERSONALIZADO (igual que perfil.js) ---
  const avatarDesktop = document.getElementById('avatarDesktop');
  const avatarMenu = document.getElementById('avatarMenu');
  // Actualiza el icono de perfil en el navbar si hay uno guardado
  const savedAvatar = localStorage.getItem('perfilAvatar');
  if (savedAvatar) {
    const navbarAvatar = avatarDesktop.querySelector('img');
    if (navbarAvatar) navbarAvatar.src = savedAvatar;
  }
  function construirMenuAvatar() {
    let nombreMostrar = localStorage.getItem('perfilNombre') || 'Usuario';
    avatarMenu.innerHTML = `
      <div style="padding: 16px 18px 8px 18px; color: #8CCCCF; font-weight: bold; font-size: 1.1rem;">Hola ${nombreMostrar}</div>
      <button class="avatar-menu__item" id="btnMiPerfil" style="width:100%;text-align:left;padding:10px 18px;background:none;border:none;color:#fff;font-size:1rem;cursor:pointer;">Mi perfil</button>
      <hr style="border:0;border-top:1px solid #2E696B;margin:8px 0;">
      <button class="avatar-menu__item" id="logoutBtn" style="width:100%;text-align:left;padding:10px 18px;background:none;border:none;color:#e74c3c;font-size:1rem;cursor:pointer;">Cerrar sesión</button>
    `;
    avatarMenu.querySelector('#btnMiPerfil').onclick = function() {
      window.location.href = 'perfil.html';
    };
    avatarMenu.querySelector('#logoutBtn').onclick = function() {
      window.location.href = 'index.html';
    };
  }
  if (avatarDesktop && avatarMenu) {
    avatarDesktop.addEventListener('click', function (e) {
      e.stopPropagation();
      construirMenuAvatar();
      avatarMenu.style.display = avatarMenu.style.display === 'block' ? 'none' : 'block';
    });
    document.addEventListener('click', function (e) {
      if (avatarMenu.style.display === 'block' && !avatarDesktop.contains(e.target)) {
        avatarMenu.style.display = 'none';
      }
    });
  }

  // Envío del formulario de preguntas frecuente
  const faqSendButton = document.getElementById('faqSend');
  if (faqSendButton) {
    faqSendButton.addEventListener("click", () => {
      const name = document.getElementById('faqName').value.trim();
      const email = document.getElementById('faqEmail').value.trim();
      const message = document.getElementById('faqMessage').value.trim();
      const faqPopup = document.getElementById('faqPopup');

      if (!name || !email || !message) {
        alert('Por favor, completa todos los campos.');
      } else {
        alert('¡Mensaje enviado! Gracias por contactarnos.');
        // Limpiar los campos
        document.getElementById('faqName').value = '';
        document.getElementById('faqEmail').value = '';
        document.getElementById('faqMessage').value = '';
        if (faqPopup) faqPopup.style.display = 'none';
      }
    });
  }

  // Mostrar/ocultar el popup de preguntas frecuentes
  const faqToggle = document.getElementById('faqToggle');
  const faqPopup = document.getElementById('faqPopup');

  if (faqToggle && faqPopup) {
    faqToggle.addEventListener('click', () => {
      faqPopup.style.display = faqPopup.style.display === 'block' ? 'none' : 'block';
    });

    // Opcional: cerrar el popup al hacer clic fuera de él
    document.addEventListener('click', (e) => {
      if (
        faqPopup.style.display === 'block' &&
        !faqPopup.contains(e.target) &&
        !faqToggle.contains(e.target)
      ) {
        faqPopup.style.display = 'none';
      }
    });
  }

  // Gráfico de horas estudiadas por día
  const ctx = document.getElementById('studyChart').getContext('2d');
  const studyChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['L', 'M', 'M', 'J', 'V', 'S', 'D'], // Lunes a Domingo
      datasets: [{
        label: 'Horas',
        data: [1, 2, 1.5, 0, 2.5, 3, 1], // Ejemplo de horas por día
        backgroundColor: '#8CCCCF',
        borderRadius: 8,
        maxBarThickness: 32
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: '#8CCCCF', font: { weight: 'bold' } }
        },
        y: {
          beginAtZero: true,
          max: 12,
          ticks: {
            stepSize: 1,
            color: '#8CCCCF',
            callback: function(value) { return value + 'h'; }
          },
          grid: { color: '#214A4A' }
        }
      }
    }
  });

  // --- Configuración de objetivo diario ---
  let dailyGoal = 2; // valor inicial
  let hoursToday = 1; // puedes actualizar esto según tus datos reales

  const goalSettingsBtn = document.getElementById('goalSettingsBtn');
  const goalSettingsPopup = document.getElementById('goalSettingsPopup');
  const goalInput = document.getElementById('goalInput');
  const saveGoalBtn = document.getElementById('saveGoalBtn');
  const cancelGoalBtn = document.getElementById('cancelGoalBtn');
  const goalHoursText = document.getElementById('goalHoursText');
  const goalProgressCircle = document.getElementById('goalProgressCircle');
  const goalSettingsOverlay = document.getElementById('goalSettingsOverlay');

  function updateGoalDisplay() {
    goalHoursText.textContent = `${hoursToday}/${dailyGoal}h`;
    // Actualiza el círculo de progreso
    const total = dailyGoal;
    const progress = Math.min(hoursToday / total, 1);
    const dasharray = 2 * Math.PI * 100; // circunferencia
    const dashoffset = dasharray * (1 - progress);
    goalProgressCircle.setAttribute('stroke-dasharray', dasharray);
    goalProgressCircle.setAttribute('stroke-dashoffset', dashoffset);
  }

  function showGoalPopup(show) {
    goalSettingsPopup.style.display = show ? 'block' : 'none';
    goalSettingsOverlay.style.display = show ? 'block' : 'none';
  }

  if (goalSettingsBtn && goalSettingsPopup && goalInput && saveGoalBtn && goalSettingsOverlay) {
    goalSettingsBtn.addEventListener('click', function(e) {
      goalInput.value = dailyGoal;
      showGoalPopup(goalSettingsPopup.style.display !== 'block');
      e.stopPropagation();
    });

    goalSettingsPopup.addEventListener('click', function(e) {
      e.stopPropagation();
    });

    goalSettingsOverlay.addEventListener('click', function() {
      showGoalPopup(false);
    });

    saveGoalBtn.addEventListener('click', function() {
      const val = parseInt(goalInput.value, 10);
      if (val >= 1 && val <= 24) {
        dailyGoal = val;
        updateGoalDisplay();
        showGoalPopup(false);
      } else {
        alert('Por favor ingresa un valor entre 1 y 24.');
      }
    });

    cancelGoalBtn.addEventListener('click', function() {
      showGoalPopup(false);
    });

    document.addEventListener('click', function(e) {
      if (
        goalSettingsPopup.style.display === 'block' &&
        !goalSettingsPopup.contains(e.target) &&
        e.target !== goalSettingsBtn
      ) {
        showGoalPopup(false);
      }
    });
  }

  updateGoalDisplay();

  // Ajustar la altura del canvas del gráfico
  const canvas = document.getElementById('studyChart');
  canvas.height = canvas.parentElement.offsetHeight || 220;

  // --- CARGAR MIS RUTAS ---
  function cargarMisRutas() {
    const cursosContainer = document.getElementById('cursosEstudiadosContainer');
    const cursosVacio = document.getElementById('cursosEstudiadosVacio');
    
    // Obtener datos de localStorage
    const rutasUsuario = JSON.parse(localStorage.getItem('rutasUsuario') || '[]');
    const cursosPorRuta = JSON.parse(localStorage.getItem('cursosPorRuta') || '{}');
    
    if (rutasUsuario.length === 0) {
      cursosContainer.style.display = 'none';
      cursosVacio.style.display = 'flex';
      return;
    }
    
    cursosContainer.style.display = 'block';
    cursosVacio.style.display = 'none';
    cursosContainer.innerHTML = '';
    
    // Crear una sección para cada ruta
    rutasUsuario.forEach(nombreRuta => {
      const cursosEnRuta = cursosPorRuta[nombreRuta] || [];
      
      // Crear contenedor de la ruta
      const rutaContainer = document.createElement('div');
      rutaContainer.className = 'ruta-container';
      rutaContainer.style.cssText = `
        margin-bottom: 24px;
        background: #1a3d3f;
        border-radius: 12px;
        padding: 20px;
        border: 1px solid #2E696B;
      `;
      
      // Título de la ruta
      const rutaTitulo = document.createElement('div');
      rutaTitulo.className = 'ruta-titulo';
      rutaTitulo.style.cssText = `
        display: flex;
        align-items: center;
        margin-bottom: 16px;
        font-size: 1.2rem;
        font-weight: bold;
        color: #8CCCCF;
      `;
      rutaTitulo.innerHTML = `
        <i class="fas fa-route" style="margin-right: 10px; color: #00F7FF;"></i>
        ${nombreRuta}
        <span style="margin-left: 12px; font-size: 0.9rem; color: #8CCCCF; font-weight: normal;">
          (${cursosEnRuta.length} curso${cursosEnRuta.length !== 1 ? 's' : ''})
        </span>
      `;
      
      rutaContainer.appendChild(rutaTitulo);
      
      // Contenedor de cursos
      const cursosGrid = document.createElement('div');
      cursosGrid.className = 'cursos-grid';
      cursosGrid.style.cssText = `
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 12px;
      `;
      
      if (cursosEnRuta.length === 0) {
        const sinCursos = document.createElement('div');
        sinCursos.style.cssText = `
          color: #8CCCCF;
          font-style: italic;
          text-align: center;
          padding: 20px;
        `;
        sinCursos.textContent = 'No hay cursos en esta ruta';
        cursosGrid.appendChild(sinCursos);
      } else {
        // Crear card para cada curso
        cursosEnRuta.forEach(nombreCurso => {
          let stats = filtroModulos.obtenerEstadisticasProgreso(nombreCurso);
          const progresoCurso = stats ? stats.porcentaje : 0;
          
          const cursoCard = document.createElement('div');
          cursoCard.className = 'curso-card';
          cursoCard.style.cssText = `
            background: #214A4A;
            border-radius: 8px;
            padding: 16px;
            border: 1px solid #2E696B;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            cursor: pointer;
          `;
          
          cursoCard.innerHTML = `
            <div style="display: flex; align-items: center; margin-bottom: 12px;">
              <i class="fas fa-book" style="color: #00F7FF; margin-right: 10px; font-size: 1.1rem;"></i>
              <div style="color: #fff; font-weight: 500; flex: 1; font-size: 0.95rem;" title="${nombreCurso}">
                ${nombreCurso.length > 25 ? nombreCurso.substring(0, 25) + '...' : nombreCurso}
              </div>
            </div>
            <div style="display: flex; align-items: center; gap: 10px;">
              <span style="color: #8CCCCF; font-size: 0.9rem; font-weight: bold;">
                ${progresoCurso}%
              </span>
              <div style="flex: 1; background: #1a3d3f; height: 6px; border-radius: 3px; overflow: hidden;">
                <div style="
                  width: ${progresoCurso}%;
                  height: 100%;
                  background: linear-gradient(90deg, #00F7FF, #8CCCCF);
                  transition: width 0.3s ease;
                "></div>
              </div>
            </div>
          `;
          
          // Hover effects
          cursoCard.addEventListener('mouseenter', () => {
            cursoCard.style.transform = 'translateY(-2px)';
            cursoCard.style.boxShadow = '0 4px 12px rgba(0, 247, 255, 0.2)';
          });
          
          cursoCard.addEventListener('mouseleave', () => {
            cursoCard.style.transform = 'translateY(0)';
            cursoCard.style.boxShadow = 'none';
          });
          
          // Click para ir al curso
          cursoCard.addEventListener('click', () => {
            window.location.href = `info_all_cursos.html?nombre=${encodeURIComponent(nombreCurso)}`;
          });
          
          cursosGrid.appendChild(cursoCard);
        });
      }
      
      rutaContainer.appendChild(cursosGrid);
      cursosContainer.appendChild(rutaContainer);
    });
  }
  
  // Cargar rutas al inicializar
  cargarMisRutas();

});

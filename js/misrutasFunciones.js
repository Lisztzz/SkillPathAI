document.addEventListener('DOMContentLoaded', function () {
  const btnAgregarRuta = document.querySelector('.btn-accion_ruta');
  const modal = document.getElementById('modalRutas');
  const lista = document.getElementById('listaRutas');
  const cerrar = document.getElementById('cerrarModalRutas');

  if (btnAgregarRuta && modal && lista && cerrar) {
    btnAgregarRuta.addEventListener('click', function () {
      // Obtén las rutas actuales
      const rutas = JSON.parse(localStorage.getItem('rutasUsuario') || '[]');
      // Llena el listado de rutas como botones
      lista.innerHTML = rutas.length
        ? rutas.map(r => `<li><button class="ruta-link-btn" data-nombre="${r}">${r}</button></li>`).join('')
        : '<li style="color:#888;">No tienes rutas creadas.</li>';
      modal.style.display = 'flex';

      // Agrega el event listener a cada botón de ruta
      lista.querySelectorAll('.ruta-link-btn').forEach(btn => {
        btn.onclick = function () {
          // Obtén el nombre del curso actual desde el DOM
          const nombreCurso = document.querySelector('.curso-pro-titulo').textContent.trim();
          const nombreRuta = btn.getAttribute('data-nombre');
          // Guarda el curso en la ruta seleccionada en localStorage
          let cursosPorRuta = JSON.parse(localStorage.getItem('cursosPorRuta') || '{}');
          if (!cursosPorRuta[nombreRuta]) cursosPorRuta[nombreRuta] = [];
          if (nombreCurso && !cursosPorRuta[nombreRuta].includes(nombreCurso)) {
            cursosPorRuta[nombreRuta].push(nombreCurso);
          }
          localStorage.setItem('cursosPorRuta', JSON.stringify(cursosPorRuta));
          modal.style.display = 'none';
          alert(`Curso "${nombreCurso}" agregado a la ruta "${nombreRuta}"`);

          // Actualiza el contador de cursos en la ruta correspondiente
          document.querySelectorAll('.ruta-item').forEach(item => {
            const nombreDiv = item.querySelector('div > div');
            if (nombreDiv && nombreDiv.textContent.trim() === nombreRuta) {
              const contador = item.querySelector('.contador-cursos');
              if (contador) {
                contador.textContent = cursosPorRuta[nombreRuta].length;
              }
            }
          });
        };
      });
    });

    cerrar.onclick = function () {
      modal.style.display = 'none';
    };

    // Cierra el modal al hacer click fuera del contenido
    modal.onclick = function(e) {
      if (e.target === modal) modal.style.display = 'none';
    };
  }
});

// Sidebar collapse functionality (igual que en index)
document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("sidebar");
  const sidebarToggle = document.getElementById("sidebarToggle");
  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener("click", () => {
      sidebar.classList.toggle("collapsed");
      document.body.classList.toggle("sidebar-collapsed");
      sidebarToggle.innerHTML = sidebar.classList.contains("collapsed") ? "&gt;&gt;" : "&lt;&lt;";
    });
  }
  // Redirección del botón "Explorar Cursos" al listado de cursos
  const explorarBtn = document.getElementById('explorarCursosBtn');
  if (explorarBtn) {
    explorarBtn.onclick = function() {
      window.location.href = "lista_cursos.html";
    };
  }
});

// Utilidades para localStorage
function obtenerRutas() {
  return JSON.parse(localStorage.getItem('rutasUsuario') || '[]');
}
function guardarRutas(rutas) {
  localStorage.setItem('rutasUsuario', JSON.stringify(rutas));
}

// Renderizar rutas al cargar
function renderizarRutas() {
  var rutas = obtenerRutas();
  var rutasContainer = document.getElementById('rutasContainer');
  var estadoVacio = document.getElementById('estadoVacio');
  rutasContainer.innerHTML = '';
  if (rutas.length === 0) {
    if (estadoVacio) estadoVacio.style.display = 'flex';
  } else {
    if (estadoVacio) estadoVacio.style.display = 'none';
    rutas.forEach(function(nombre) {
      crearRuta(nombre, false);
    });
  }
  // Si hay hash en la URL, mostrar el detalle de esa ruta automáticamente
  if (window.location.hash) {
    const rutaHash = decodeURIComponent(window.location.hash.substring(1));
    if (rutas.includes(rutaHash)) {
      setTimeout(function() {
        mostrarDetalleRuta(rutaHash);
      }, 0);
    }
  }
}

// Modifico crearRuta para aceptar un flag de guardar
function crearRuta(nombre, guardar = true) {
  var rutasContainer = document.getElementById('rutasContainer');
  var estadoVacio = document.getElementById('estadoVacio');
  if (estadoVacio) estadoVacio.style.display = 'none';

  // Obtener cantidad de cursos para la ruta
  let cursosPorRuta = JSON.parse(localStorage.getItem('cursosPorRuta') || '{}');
  let cantidadCursos = (cursosPorRuta[nombre] || []).length;

  var ruta = document.createElement('div');
  ruta.className = 'ruta-item';
  ruta.style.display = 'flex';
  ruta.style.alignItems = 'center';
  ruta.style.gap = '16px';
  ruta.style.margin = '32px 0 0 0';
  ruta.style.padding = '16px 24px';
  ruta.style.borderRadius = '16px';
  ruta.innerHTML = `
    <div style="background:#2E696B; color:#fff; width:56px; height:56px; border-radius:16px; display:flex; align-items:center; justify-content:center; font-size:2rem; font-weight:bold;">${nombre[0].toUpperCase()}</div>
    <div>
      <div style="font-size:1.2rem; font-weight:bold; color:#fff;">${nombre}</div>
      <div class="ruta-cursos-contador" style="font-size:0.95rem; color:#8CCCCF;">Ruta Personalizada | <span class="contador-cursos">${cantidadCursos}</span> Cursos</div>
    </div>
    <div style="flex:1;"></div>
    <div style="width:180px; display:flex; align-items:center; gap:8px;">
      <span style="color:#8CCCCF; font-size:0.95rem;">0%</span>
      <div style="flex:1; height:6px; background:#214A4A; border-radius:4px;"></div>
      <button class="eliminarRutaBtn" style="background:none; border:none; color:#8CCCCF; font-size:2.3rem; cursor:pointer;" title="Eliminar ruta">&#128465;</button>
    </div>
  `;
  rutasContainer.appendChild(ruta);

  // Eliminar ruta
  ruta.querySelector('.eliminarRutaBtn').onclick = function(e) {
    e.stopPropagation();
    // Confirmación personalizada con colores de la paleta
    const confirmBox = document.createElement('div');
    confirmBox.style.position = 'fixed';
    confirmBox.style.left = '0';
    confirmBox.style.top = '0';
    confirmBox.style.width = '100vw';
    confirmBox.style.height = '100vh';
    confirmBox.style.background = 'rgba(26,58,58,0.75)'; // Fondo más oscuro de la paleta
    confirmBox.style.display = 'flex';
    confirmBox.style.alignItems = 'center';
    confirmBox.style.justifyContent = 'center';
    confirmBox.style.zIndex = '99999';
    confirmBox.innerHTML = `
      <div style="background:#1a3a3a; color:#fff; border-radius:18px; padding:36px 32px; box-shadow:0 4px 24px rgba(0,0,0,0.18); text-align:center; min-width:320px; border:2px solid #214A4A;">
        <div style="font-size:1.25rem; margin-bottom:18px; color:#8CCCCF;">¿Estás seguro de que quieres eliminar esta ruta?</div>
        <div style="display:flex; gap:18px; justify-content:center;">
          <button id="confirmEliminarRutaSi" style="background:#e74c3c; color:#fff; border:none; border-radius:8px; padding:10px 28px; font-size:1.1rem; cursor:pointer; transition:background 0.2s;">Sí</button>
          <button id="confirmEliminarRutaNo" style="background:#8CCCCF; color:#1a3a3a; border:none; border-radius:8px; padding:10px 28px; font-size:1.1rem; cursor:pointer; transition:background 0.2s;">No</button>
        </div>
      </div>
    `;
    document.body.appendChild(confirmBox);

    document.getElementById('confirmEliminarRutaSi').onclick = function() {
      rutasContainer.removeChild(ruta);
      var rutas = obtenerRutas();
      rutas = rutas.filter(function(r) { return r !== nombre; });
      guardarRutas(rutas);
      mostrarNotificacionEliminada && mostrarNotificacionEliminada();
      // Elimina los cursos asociados a la ruta
      let cursosPorRuta = JSON.parse(localStorage.getItem('cursosPorRuta') || '{}');
      delete cursosPorRuta[nombre];
      localStorage.setItem('cursosPorRuta', JSON.stringify(cursosPorRuta));
      if (rutasContainer.children.length === 0 && estadoVacio) {
        estadoVacio.style.display = 'flex';
      }
      document.body.removeChild(confirmBox);
    };
    document.getElementById('confirmEliminarRutaNo').onclick = function() {
      document.body.removeChild(confirmBox);
    };
  };
  // Redirigir al hacer click en la ruta (excepto en la basurita)
  ruta.onclick = function(e) {
    if (!e.target.classList.contains('eliminarRutaBtn')) {
      mostrarDetalleRuta(nombre);
    }
  };
  // Guardar en localStorage si corresponde
  if (guardar) {
    var rutas = obtenerRutas();
    rutas.push(nombre);
    guardarRutas(rutas);

    let cursosPorRuta = JSON.parse(localStorage.getItem('cursosPorRuta') || '{}');
    if (!cursosPorRuta[nombre]) {
      cursosPorRuta[nombre] = [];
      localStorage.setItem('cursosPorRuta', JSON.stringify(cursosPorRuta));
    }
  }
}

function mostrarNotificacionRuta() {
  ocultarNotificacionEliminada();
  var notif = document.getElementById('notificacionRuta');
  notif.style.display = 'flex';
  notif.style.visibility = 'visible';
}
function ocultarNotificacionRuta() {
  var notif = document.getElementById('notificacionRuta');
  notif.style.display = 'none';
  notif.style.visibility = 'hidden';
}
ocultarNotificacionRuta();
document.getElementById('cerrarNotificacionRuta').onclick = ocultarNotificacionRuta;

function mostrarNotificacionEliminada() {
  ocultarNotificacionRuta();
  var notif = document.getElementById('notificacionEliminada');
  notif.style.display = 'flex';
  notif.style.visibility = 'visible';
}
function ocultarNotificacionEliminada() {
  var notif = document.getElementById('notificacionEliminada');
  notif.style.display = 'none';
  notif.style.visibility = 'hidden';
}
ocultarNotificacionEliminada();
document.getElementById('cerrarNotificacionEliminada').onclick = ocultarNotificacionEliminada;

// Sobrescribo el evento de crear para usar el nuevo crearRuta
document.getElementById('crearRutaModal').onclick = function() {
  var input = document.getElementById('nombreNuevaRuta');
  var btn = document.getElementById('crearRutaModal');
  if (!input.value.trim()) {
    btn.style.backgroundColor = '#e74c3c';
    btn.style.color = '#fff';
    setTimeout(function(){
      btn.style.backgroundColor = '';
      btn.style.color = '';
    }, 1000);
    input.focus();
    return;
  }
  crearRuta(input.value.trim(), true);
  document.getElementById('modalNuevaRuta').style.display = 'none';
  input.value = '';
  mostrarNotificacionRuta();
};

// Mostrar detalle de ruta en la misma página
function mostrarDetalleRuta(nombre) {
  document.getElementById('rutasContainer').style.display = 'none';
  var estadoVacio = document.getElementById('estadoVacio');
  var detalleRuta = document.getElementById('detalleRuta');
  var nombreRutaDetalle = document.getElementById('nombreRutaDetalle');
  if (nombreRutaDetalle) nombreRutaDetalle.textContent = nombre;
  if (detalleRuta) detalleRuta.style.display = 'block';
  // Oculta el header con el botón "Crear una ruta"
  var header = document.getElementById('headerMisRutas');
  if (header) header.style.display = 'none';

  // Obtener cursos de la ruta seleccionada
  let cursosPorRuta = JSON.parse(localStorage.getItem('cursosPorRuta') || '{}');
  let cursos = cursosPorRuta[nombre] || [];

  // Selecciona el contenedor donde se mostrarán los cursos (puedes crear uno si no existe)
  let cursosDiv = document.getElementById('detalleCursos');
  if (!cursosDiv) {
    cursosDiv = document.createElement('div');
    cursosDiv.id = 'detalleCursos';
    detalleRuta.appendChild(cursosDiv);
  }
  // Mostrar u ocultar el mensaje de "no hay cursos"
  const mensajeVacio = detalleRuta.querySelector('h2');
  const parrafoVacio = detalleRuta.querySelector('p');
  const explorarBtn = document.getElementById('explorarCursosBtn');
  if (cursos.length > 0) {
    if (estadoVacio) estadoVacio.style.display = 'none';
    if (mensajeVacio) mensajeVacio.style.display = 'none';
    if (parrafoVacio) parrafoVacio.style.display = 'none';
    if (explorarBtn) explorarBtn.style.display = 'none';
    cursosDiv.style.display = 'block';
    // Muestra solo los nombres de los cursos
    cursosDiv.style.position = 'absolute';
    cursosDiv.style.top = '295px'; // Ajusta según tu diseño
    cursosDiv.style.left = '280px';
    cursosDiv.style.right = '800px';
    cursosDiv.style.margin = '0 auto';
    cursosDiv.style.zIndex = '5';
    cursosDiv.innerHTML = cursos.map(nombreCurso => `
      <div style="
      display:flex;
      align-items:center;
      gap:4px;
      margin:22px 0 0 0;
      padding:16px 10px;
      border-radius:20px;
      background:#214A4A;
      cursor:pointer;
      ">
      <div style="
        background:#2E696B;
        color:#fff;
        width:56px;
        height:56px;
        border-radius:16px;
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:2rem;
        font-weight:bold;
        flex-shrink:0;
      ">${nombreCurso[0].toUpperCase()}</div>
      <div>
        <a href="info_all_cursos.html?nombre=${encodeURIComponent(nombreCurso)}" 
          style="font-size:1.2rem; font-weight:bold; color:#fff; text-decoration:none;">
          ${nombreCurso}
        </a>
      </div>
      <div style="flex:1;"></div>
      </div>
    `).join('');
  } else {
    cursosDiv.innerHTML = '';
    cursosDiv.style.display = 'none';
    if (mensajeVacio) mensajeVacio.style.display = '';
    if (parrafoVacio) parrafoVacio.style.display = '';
    if (explorarBtn) explorarBtn.style.display = '';
    if (estadoVacio) estadoVacio.style.display = 'flex';
  }
}

function volverAListaRutas() {
  document.getElementById('detalleRuta').style.display = 'none';
  document.getElementById('rutasContainer').style.display = '';
  var rutas = obtenerRutas();
  var estadoVacio = document.getElementById('estadoVacio');
  if (rutas.length === 0 && estadoVacio) estadoVacio.style.display = 'flex';
  // Muestra el header con el botón "Crear una ruta"
  var header = document.getElementById('headerMisRutas');
  if (header) header.style.display = 'flex';
}

// Inicializar botón volver
function inicializarBotones() {
  document.getElementById('abrirModalRuta').onclick = function() {
    document.getElementById('modalNuevaRuta').style.display = 'flex';
  };
  var btnCentro = document.getElementById('abrirModalRutaCentro');
  if (btnCentro) {
    btnCentro.onclick = function() {
      document.getElementById('modalNuevaRuta').style.display = 'flex';
    };
  }
  document.getElementById('cerrarModalRuta').onclick = function() {
    document.getElementById('modalNuevaRuta').style.display = 'none';
  };
  document.getElementById('modalNuevaRuta').onclick = function(e) {
    if (e.target === this) this.style.display = 'none';
  };
  var cerrarNotif = document.getElementById('cerrarNotificacionRuta');
  if (cerrarNotif) cerrarNotif.onclick = ocultarNotificacionRuta;
  var cerrarNotifElim = document.getElementById('cerrarNotificacionEliminada');
  if (cerrarNotifElim) cerrarNotifElim.onclick = ocultarNotificacionEliminada;
  var volverBtn = document.getElementById('volverRutas');
  if (volverBtn) volverBtn.onclick = volverAListaRutas;
}
// Llamar después de renderizar rutas
renderizarRutas();
inicializarBotones();
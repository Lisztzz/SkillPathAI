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
      <div style="font-size:0.95rem; color:#8CCCCF;">Ruta Personalizada | 0 Cursos</div>
    </div>
    <div style="flex:1;"></div>
    <div style="width:180px; display:flex; align-items:center; gap:8px;">
      <span style="color:#8CCCCF; font-size:0.95rem;">0%</span>
      <div style="flex:1; height:6px; background:#214A4A; border-radius:4px;"></div>
      <button class="eliminarRutaBtn" style="background:none; border:none; color:#8CCCCF; font-size:1.2rem; cursor:pointer;" title="Eliminar ruta">&#128465;</button>
    </div>
  `;
  rutasContainer.appendChild(ruta);
  // Eliminar ruta
  ruta.querySelector('.eliminarRutaBtn').onclick = function(e) {
    e.stopPropagation();
    rutasContainer.removeChild(ruta);
    var rutas = obtenerRutas();
    rutas = rutas.filter(function(r) { return r !== nombre; });
    guardarRutas(rutas);
    mostrarNotificacionEliminada && mostrarNotificacionEliminada();
    if (rutasContainer.children.length === 0 && estadoVacio) {
      estadoVacio.style.display = 'flex';
    }
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
  if (estadoVacio) estadoVacio.style.display = 'none';
  document.getElementById('detalleRuta').style.display = 'block';
  document.getElementById('nombreRutaDetalle').textContent = nombre;
  // Oculta el header con el botón "Crear una ruta"
  var header = document.getElementById('headerMisRutas');
  if (header) header.style.display = 'none';
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

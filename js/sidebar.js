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
});

// Funciones de notificaciones seguras (no fallan si el elemento no existe)
function mostrarNotificacionRuta() {
  ocultarNotificacionEliminada();
  var notif = document.getElementById('notificacionRuta');
  if (notif) {
    notif.style.display = 'flex';
    notif.style.visibility = 'visible';
  }
}
function ocultarNotificacionRuta() {
  var notif = document.getElementById('notificacionRuta');
  if (notif) {
    notif.style.display = 'none';
    notif.style.visibility = 'hidden';
  }
}
function mostrarNotificacionEliminada() {
  ocultarNotificacionRuta();
  var notif = document.getElementById('notificacionEliminada');
  if (notif) {
    notif.style.display = 'flex';
    notif.style.visibility = 'visible';
  }
}
function ocultarNotificacionEliminada() {
  var notif = document.getElementById('notificacionEliminada');
  if (notif) {
    notif.style.display = 'none';
    notif.style.visibility = 'hidden';
  }
}

// Inicialización segura de eventos de cierre de notificaciones
document.addEventListener("DOMContentLoaded", function () {
  ocultarNotificacionRuta();
  ocultarNotificacionEliminada();

  var cerrarNotif = document.getElementById('cerrarNotificacionRuta');
  if (cerrarNotif) cerrarNotif.onclick = ocultarNotificacionRuta;

  var cerrarNotifElim = document.getElementById('cerrarNotificacionEliminada');
  if (cerrarNotifElim) cerrarNotifElim.onclick = ocultarNotificacionEliminada;
});
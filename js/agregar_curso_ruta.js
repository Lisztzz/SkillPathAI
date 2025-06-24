document.addEventListener('DOMContentLoaded', function () {
  const btnRutas = document.querySelector('.btn-accion_ruta');
  const modal = document.getElementById('modalRutas');
  const cerrar = document.getElementById('cerrarModalRutas');
  const lista = document.getElementById('listaRutas');

  if (btnRutas && modal && cerrar && lista) {
    btnRutas.addEventListener('click', function () {
      // Obtiene rutas de localStorage
      const rutas = JSON.parse(localStorage.getItem('rutasUsuario') || '[]');
      lista.innerHTML = rutas.length
        ? rutas.map(r => `<li>${r}</li>`).join('')
        : '<li style="color:#888;">No tienes rutas creadas.</li>';
      modal.style.display = 'flex';
    });

    cerrar.addEventListener('click', function () {
      modal.style.display = 'none';
    });

    // Cierra el modal al hacer click fuera del contenido
    modal.addEventListener('click', function (e) {
      if (e.target === modal) modal.style.display = 'none';
    });
  }
});
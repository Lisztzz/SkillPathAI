document.addEventListener('DOMContentLoaded', function () {
  const avatar = document.getElementById('avatarDesktop');
  const menu = document.getElementById('avatarMenu');
  const logoutBtn = document.getElementById('logoutBtn');

  if (avatar && menu) {
    avatar.addEventListener('click', function (e) {
      e.stopPropagation();
      menu.classList.toggle('show');
    });

    // Cierra el menú al hacer clic fuera
    document.addEventListener('click', function () {
      menu.classList.remove('show');
    });

    // acción de logout
    if (logoutBtn) {
      logoutBtn.addEventListener('click', function () {
        window.location.href = 'landing.html'; 
      });
    }
  }
});
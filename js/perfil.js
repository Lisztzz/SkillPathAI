document.addEventListener("DOMContentLoaded", function () {
  const avatar = document.querySelector('.perfil-avatar');
  const perfilHeader = document.querySelector('.perfil-header');
  let editIcon = null;
  let fileInput = null;
  let wrapper = null;

  // Crear el input file oculto
  function ensureFileInput() {
    if (!fileInput) {
      fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.accept = 'image/png, image/jpeg';
      fileInput.style.display = 'none';
      fileInput.addEventListener('change', function (e) {
        const file = e.target.files[0];
        if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
          const reader = new FileReader();
          reader.onload = function (evt) {
            avatar.src = evt.target.result;
            // Opcional: guardar en localStorage para persistencia
            localStorage.setItem('perfilAvatar', evt.target.result);
          };
          reader.readAsDataURL(file);
        }
      });
      document.body.appendChild(fileInput);
    }
  }

  // Crear el icono de lápiz
  function ensureEditIcon() {
    if (!editIcon) {
      editIcon = document.createElement('div');
      editIcon.innerHTML = '<i class="fas fa-pen"></i>';
      editIcon.style.position = 'absolute';
      editIcon.style.top = '50%';
      editIcon.style.left = '50%';
      editIcon.style.transform = 'translate(-50%, -50%)';
      editIcon.style.background = 'rgba(34,36,42,0.65)';
      editIcon.style.color = '#8CCCCF';
      editIcon.style.borderRadius = '50%';
      editIcon.style.width = '38px';
      editIcon.style.height = '38px';
      editIcon.style.display = 'flex';
      editIcon.style.alignItems = 'center';
      editIcon.style.justifyContent = 'center';
      editIcon.style.cursor = 'pointer';
      editIcon.style.transition = 'opacity 0.2s';
      editIcon.style.opacity = '0.85';
      editIcon.style.fontSize = '1.3rem';
      editIcon.style.zIndex = '10';
      editIcon.title = 'Editar foto de perfil';
      editIcon.addEventListener('click', function (e) {
        e.stopPropagation();
        ensureFileInput();
        fileInput.click();
      });
      // Evita que desaparezca al pasar el mouse sobre el lápiz
      editIcon.addEventListener('mouseenter', function (e) {
        showEditIcon();
      });
      editIcon.addEventListener('mouseleave', function (e) {
        // No ocultar aquí, dejar que el wrapper controle
      });
    }
  }

  // Posicionar el icono sobre el avatar y envolver el avatar si es necesario
  function ensureWrapper() {
    if (!wrapper) {
      wrapper = document.createElement('div');
      wrapper.style.position = 'relative';
      wrapper.style.display = 'inline-block';
      wrapper.className = 'perfil-avatar-edit';
      avatar.parentNode.insertBefore(wrapper, avatar);
      wrapper.appendChild(avatar);
      wrapper.appendChild(editIcon);
      // Evento para mostrar/ocultar el lápiz en todo el área del icono
      wrapper.addEventListener('mouseenter', showEditIcon);
      wrapper.addEventListener('mouseleave', hideEditIcon);
      // Click en cualquier parte del icono permite editar
      wrapper.addEventListener('click', function (e) {
        if (e.target === wrapper || e.target === avatar) {
          ensureFileInput();
          fileInput.click();
        }
      });
    }
  }

  function showEditIcon() {
    ensureEditIcon();
    ensureWrapper();
    editIcon.style.display = 'flex';
  }

  function hideEditIcon() {
    if (editIcon) editIcon.style.display = 'none';
  }

  // Cargar imagen de perfil desde localStorage si existe
  const savedAvatar = localStorage.getItem('perfilAvatar');
  if (savedAvatar) {
    avatar.src = savedAvatar;
    // Cambia también el icono del navbar
    const navbarAvatar = document.querySelector('.navbar-avatar-desktop img');
    if (navbarAvatar) navbarAvatar.src = savedAvatar;
  }

  // Cargar nombre, correo y bio desde localStorage si existen
  const nombrePerfilInput = document.getElementById('nombrePerfil');
  const emailPerfilInput = document.getElementById('emailPerfil');
  const bioPerfilInput = document.getElementById('bioPerfil');
  if (nombrePerfilInput) nombrePerfilInput.value = localStorage.getItem('perfilNombre') || '';
  if (emailPerfilInput) emailPerfilInput.value = localStorage.getItem('perfilEmail') || '';
  if (bioPerfilInput) bioPerfilInput.value = localStorage.getItem('perfilBio') || '';

  // Inicializar wrapper e icono
  ensureEditIcon();
  ensureWrapper();

  // --- NAVBAR AVATAR MENU PERSONALIZADO ---
  const avatarDesktop = document.getElementById('avatarDesktop');
  const avatarMenu = document.getElementById('avatarMenu');
  let nombreGuardado = localStorage.getItem('perfilNombre') || '';

  // Elimina cualquier alerta anterior del formulario
  const perfilForm = document.getElementById('perfilForm');
  if (perfilForm) {
    perfilForm.onsubmit = null; // Elimina el handler anterior si existe
    perfilForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (nombrePerfilInput && nombrePerfilInput.value.trim()) {
        localStorage.setItem('perfilNombre', nombrePerfilInput.value.trim());
        nombreGuardado = nombrePerfilInput.value.trim();
      }
      if (emailPerfilInput) {
        localStorage.setItem('perfilEmail', emailPerfilInput.value.trim());
      }
      if (bioPerfilInput) {
        localStorage.setItem('perfilBio', bioPerfilInput.value.trim());
      }
      // Actualiza el saludo en el menú si está abierto
      if (avatarMenu && avatarMenu.style.display === 'block') {
        construirMenuAvatar();
      }
      // Actualiza el saludo en el menú en todos los módulos (si hay más de un navbar)
      document.querySelectorAll('.avatar-menu').forEach(menu => {
        if (menu.style.display === 'block') {
          menu.innerHTML = `
            <div style="padding: 16px 18px 8px 18px; color: #8CCCCF; font-weight: bold; font-size: 1.1rem;">Hola ${nombrePerfilInput.value.trim()}</div>
            <button class="avatar-menu__item" id="btnMiPerfil" style="width:100%;text-align:left;padding:10px 18px;background:none;border:none;color:#fff;font-size:1rem;cursor:pointer;">Mi perfil</button>
            <hr style="border:0;border-top:1px solid #2E696B;margin:8px 0;">
            <button class="avatar-menu__item" id="logoutBtn" style="width:100%;text-align:left;padding:10px 18px;background:none;border:none;color:#e74c3c;font-size:1rem;cursor:pointer;">Cerrar sesión</button>
          `;
        }
      });
      // Actualiza el icono de perfil en el navbar si se cambió la imagen
      const navbarAvatar = document.querySelector('.navbar-avatar-desktop img');
      if (navbarAvatar && avatar.src) {
        navbarAvatar.src = avatar.src;
      }
      alert('¡Tus cambios se guardaron exitosamente! 🎉');
    });
  }

  // Construir el menú personalizado
  function construirMenuAvatar() {
    let nombreMostrar = localStorage.getItem('perfilNombre') || 'Usuario';
    avatarMenu.innerHTML = `
      <div style="padding: 16px 18px 8px 18px; color: #8CCCCF; font-weight: bold; font-size: 1.1rem;">Hola ${nombreMostrar}</div>
      <button class="avatar-menu__item" id="btnMiPerfil" style="width:100%;text-align:left;padding:10px 18px;background:none;border:none;color:#fff;font-size:1rem;cursor:pointer;">Mi perfil</button>
      <hr style="border:0;border-top:1px solid #2E696B;margin:8px 0;">
      <button class="avatar-menu__item" id="logoutBtn" style="width:100%;text-align:left;padding:10px 18px;background:none;border:none;color:#e74c3c;font-size:1rem;cursor:pointer;">Cerrar sesión</button>
    `;
    // Ir a perfil
    avatarMenu.querySelector('#btnMiPerfil').onclick = function() {
      window.location.href = 'perfil.html';
    };
    // Cerrar sesión
    avatarMenu.querySelector('#logoutBtn').onclick = function() {
      window.location.href = 'index.html';
    };
  }

  // Mostrar/ocultar menú al hacer click en el avatar
  if (avatarDesktop && avatarMenu) {
    avatarDesktop.addEventListener('click', function (e) {
      e.stopPropagation();
      construirMenuAvatar();
      avatarMenu.style.display = avatarMenu.style.display === 'block' ? 'none' : 'block';
    });
    // Ocultar menú al hacer click fuera
    document.addEventListener('click', function (e) {
      if (avatarMenu.style.display === 'block' && !avatarDesktop.contains(e.target)) {
        avatarMenu.style.display = 'none';
      }
    });
  }
});

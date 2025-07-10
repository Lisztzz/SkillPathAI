// Imports
import { FiltroModulos } from './filtrarModulos.js';
import { cargarComentariosModulo, guardarComentariosModulo } from './comentariosModulo.js';

// Variables globales para el módulo actual
let filtroModulos, cursoActual, moduloActual;

// Funciones auxiliares para perfil
function getPerfilNombre() {
  return localStorage.getItem('perfilNombre') || 'Tú';
}
function getPerfilSrc() {
  return localStorage.getItem('perfilAvatar') || 'assets/images/perfil.jpg';
}

// --- LÓGICA DE COMENTARIOS ---
function renderizarComentarios() {
  const comentariosLista = document.querySelector('.comentarios-lista');
  comentariosLista.innerHTML = "";
  const comentarios = cargarComentariosModulo();
  comentarios.forEach(com => {
    const nuevoComentario = document.createElement('div');
    nuevoComentario.className = 'comentario';
    nuevoComentario.innerHTML = `
      <img src="${com.avatar}" alt="Avatar" class="avatar-comentario" />
      <div class="comentario-contenido">
        <div class="comentario-header">
          <span class="comentario-nombre">${com.nombre}</span>
        </div>
        <div class="comentario-texto">${com.texto}</div>
        <div class="comentario-acciones">
          <button class="btn-like"><i class="fas fa-thumbs-up"></i><span class="contador-like" style="margin-left:6px;">${com.likes}</span></button>
          <button class="btn-dislike"><i class="fas fa-thumbs-down"></i><span class="contador-dislike" style="margin-left:6px;">${com.dislikes}</span></button>
          <button class="btn-responder">Responder</button>
        </div>
      </div>
    `;
    comentariosLista.appendChild(nuevoComentario);
  });
  inicializarLikesDislikes();
  inicializarRespuestas();
}

function publicarComentario() {
  const textarea = document.getElementById('nuevoComentario');
  const texto = textarea.value.trim();
  if (!texto) return;

  // Crear el comentario solo en el DOM
  const comentariosLista = document.querySelector('.comentarios-lista');
  const divComentario = document.createElement('div');
  divComentario.className = 'comentario';
  divComentario.innerHTML = `
    <img src="${getPerfilSrc()}" alt="Tu perfil" class="avatar-comentario" />
    <div class="comentario-contenido">
      <div class="comentario-header">
        <span class="comentario-nombre">${getPerfilNombre()}</span>
      </div>
      <div class="comentario-texto">${texto}</div>
      <div class="comentario-acciones">
        <button class="btn-like"><i class="fas fa-thumbs-up"></i><span class="contador-like" style="margin-left:6px;">0</span></button>
        <button class="btn-dislike"><i class="fas fa-thumbs-down"></i><span class="contador-dislike" style="margin-left:6px;">0</span></button>
        <button class="btn-responder">Responder</button>
      </div>
    </div>
  `;
  comentariosLista.insertBefore(divComentario, comentariosLista.firstChild);

  inicializarLikesDislikes();
  inicializarRespuestas();

  textarea.value = '';
  document.getElementById('btnPublicar').disabled = true;
}

// --- LÓGICA DE INTERACCIÓN (likes, dislikes, responder) ---
function inicializarLikesDislikes() {
  document.querySelectorAll('.comentario, .comentario-respuesta').forEach(function(comentario) {
    const btnLike = comentario.querySelector('.btn-like');
    const btnDislike = comentario.querySelector('.btn-dislike');
    if (btnLike && !btnLike.dataset.listener) {
      btnLike.dataset.listener = "true";
      let likeActivo = false;
      let dislikeActivo = false;
      let contadorLike = btnLike.querySelector('.contador-like');
      if (!contadorLike) {
        contadorLike = document.createElement('span');
        contadorLike.className = 'contador-like';
        contadorLike.style.marginLeft = '6px';
        contadorLike.textContent = '0';
        btnLike.appendChild(contadorLike);
      }
      let contadorDislike = btnDislike.querySelector('.contador-dislike');
      if (!contadorDislike) {
        contadorDislike = document.createElement('span');
        contadorDislike.className = 'contador-dislike';
        contadorDislike.style.marginLeft = '6px';
        contadorDislike.textContent = '0';
        btnDislike.appendChild(contadorDislike);
      }
      btnLike.addEventListener('click', function() {
        if (!likeActivo && !dislikeActivo) {
          likeActivo = true;
          contadorLike.textContent = '1';
          btnDislike.disabled = true;
        } else if (likeActivo) {
          likeActivo = false;
          contadorLike.textContent = '0';
          btnDislike.disabled = false;
        }
      });
      btnDislike.addEventListener('click', function() {
        if (!dislikeActivo && !likeActivo) {
          dislikeActivo = true;
          contadorDislike.textContent = '1';
          btnLike.disabled = true;
        } else if (dislikeActivo) {
          dislikeActivo = false;
          contadorDislike.textContent = '0';
          btnLike.disabled = false;
        }
      });
    }
  });
}

function inicializarRespuestas() {
  document.querySelectorAll('.comentario').forEach(function(comentario) {
    const btnResponder = comentario.querySelector('.btn-responder');
    if (btnResponder && !btnResponder.dataset.listener) {
      btnResponder.dataset.listener = "true";
      btnResponder.addEventListener('click', function() {
        if (comentario.querySelector('.respuesta-form')) return;
        const respuestaForm = document.createElement('div');
        respuestaForm.className = 'respuesta-form';
        respuestaForm.style.marginTop = '0.7rem';
        respuestaForm.innerHTML = `
          <textarea class="respuesta-textarea" placeholder="Escribe tu respuesta..." style="width: 100%; border-radius: 8px; padding: 0.5rem; resize: none; min-height: 40px;"></textarea>
          <button class="btn-enviar-respuesta" style="margin-top: 0.4rem; background: #fff; color: #173a3f; border: none; border-radius: 6px; padding: 0.3rem 1.2rem; cursor: pointer;">Enviar</button>
        `;
        const acciones = comentario.querySelector('.comentario-acciones');
        acciones.parentNode.insertBefore(respuestaForm, acciones.nextSibling);
        const btnEnviar = respuestaForm.querySelector('.btn-enviar-respuesta');
        btnEnviar.addEventListener('click', function() {
          const textoRespuesta = respuestaForm.querySelector('.respuesta-textarea').value.trim();
          if (!textoRespuesta) return;
          const respuesta = document.createElement('div');
          respuesta.className = 'comentario-respuesta';
          respuesta.style.margin = '0.7rem auto 0.2rem auto';
          respuesta.style.background = '#1e4a4e';
          respuesta.style.borderRadius = '8px';
          respuesta.style.padding = '0.7rem 1rem';
          respuesta.style.maxWidth = '100%';
          respuesta.style.display = 'flex';
          respuesta.style.flexDirection = 'column';
          respuesta.style.alignItems = 'flex-start';
          respuesta.innerHTML = `
            <div style="display: flex; align-items: flex-start; gap: 0.7rem; width: 100%;">
              <img src="${getPerfilSrc()}" alt="Tu perfil" class="avatar-comentario" style="width:28px;height:28px;">
              <div>
                <div style="font-weight: bold; color: #00f7ff;">${getPerfilNombre()}</div>
                <div style="color: #e0e0e0;">${textoRespuesta}</div>
              </div>
            </div>
            <div class="comentario-acciones" style="margin-top: 0.5rem; display: flex; justify-content: flex-start;">
              <button class="btn-like"><i class="fas fa-thumbs-up"></i><span class="contador-like" style="margin-left:6px;">0</span></button>
              <button class="btn-dislike"><i class="fas fa-thumbs-down"></i><span class="contador-dislike" style="margin-left:6px;">0</span></button>
            </div>
          `;
          respuestaForm.parentNode.insertBefore(respuesta, respuestaForm.nextSibling);
          respuestaForm.remove();
          inicializarLikesDislikes();
        });
      });
    }
  });
}

// --- INICIALIZACIÓN PRINCIPAL ---
document.addEventListener('DOMContentLoaded', function() {
  filtroModulos = new FiltroModulos();

  // Obtener parámetros de la URL
  const urlParams = filtroModulos.obtenerDatosDesdeURL();

  if (urlParams.curso && urlParams.modulo) {
    cargarModulo(urlParams.curso, urlParams.modulo);
  } else {
    window.location.href = 'info_all_cursos.html';
  }

  // Panel de comentarios
  renderizarComentarios();

  // Habilitar/deshabilitar botón Publicar y asociar función al botón
  const textarea = document.getElementById('nuevoComentario');
  const btnPublicar = document.getElementById('btnPublicar');
  if (textarea && btnPublicar) {
    textarea.addEventListener('input', function() {
      btnPublicar.disabled = textarea.value.trim().length === 0;
    });
    // Asociar la función publicarComentario al botón
    btnPublicar.addEventListener('click', publicarComentario);
  }

  // Actualizar avatar del cuadro para publicar
  const avatarPublicar = document.getElementById('avatarPublicar');
  const savedAvatar = localStorage.getItem('perfilAvatar');
  if (avatarPublicar && savedAvatar) {
    avatarPublicar.src = savedAvatar;
  }

  // Configurar FAQ y modal
  configurarFAQ();
  configurarModal();

    for (let key in localStorage) {
    if (key.startsWith('comentarios_')) {
      localStorage.removeItem(key);
    }
  }
});

function cargarModulo(nombreCurso, numeroModulo) {
    cursoActual = filtroModulos.obtenerCursoPorNombre(nombreCurso);
    
    if (!cursoActual) {
        alert('Curso no encontrado');
        window.location.href = 'info_all_cursos.html';
        return;
    }
    
    moduloActual = filtroModulos.obtenerModulo(nombreCurso, numeroModulo);
    
    if (!moduloActual) {
        alert('Módulo no encontrado');
        window.location.href = 'info_all_cursos.html';
        return;
    }
    
    // Actualizar la interfaz
    actualizarInterfaz();
    configurarNavegacion();
    actualizarProgreso();
    mostrarListaModulos();
}

function actualizarInterfaz() {
    // Breadcrumb
    
    // Información del módulo
    document.getElementById('modulo-numero').textContent = `Módulo ${moduloActual.numero}`;
    document.getElementById('modulo-titulo').textContent = moduloActual.titulo;
    document.getElementById('modulo-resumen').innerHTML = moduloActual.resumen;
    
    // Video
    const videoContainer = document.getElementById('video-container');
    if (moduloActual.youtube) {
        videoContainer.innerHTML = `<iframe src="${moduloActual.youtube}" allowfullscreen></iframe>`;
    }
    
    // Botón de completar
    actualizarBotonCompletar();
}

function actualizarBotonCompletar() {
    const btnCompletar = document.getElementById('btn-completar');
    if (moduloActual.completado) {
        btnCompletar.classList.add('completado');
        btnCompletar.innerHTML = '<i class="fas fa-check"></i> Completado';
    } else {
        btnCompletar.classList.remove('completado');
        btnCompletar.innerHTML = '<i class="fas fa-check"></i> Marcar como Completado';
    }
}

function configurarNavegacion() {
    const btnAnterior = document.getElementById('btn-anterior');
    const btnSiguiente = document.getElementById('btn-siguiente');
    
    // Botón anterior
    if (moduloActual.numero > 1) {
        btnAnterior.style.display = 'flex';
        btnAnterior.href = `detalle_modulo.html?curso=${encodeURIComponent(cursoActual.nombre)}&modulo=${moduloActual.numero - 1}`;
    }
    
    // Botón siguiente
    if (moduloActual.numero < cursoActual.modulos) {
        btnSiguiente.style.display = 'flex';
        btnSiguiente.href = `detalle_modulo.html?curso=${encodeURIComponent(cursoActual.nombre)}&modulo=${moduloActual.numero + 1}`;
    }
}

function actualizarProgreso() {
    const stats = filtroModulos.obtenerEstadisticasProgreso(cursoActual.nombre);
    if (stats) {
        document.getElementById('progreso-fill').style.width = `${stats.porcentaje}%`;
        document.getElementById('progreso-texto').textContent = `${stats.completados} de ${stats.total} módulos completados`;
    }
}

function mostrarListaModulos() {
    const listaContainer = document.getElementById('lista-modulos');
    const modulos = cursoActual.modulosDetalle;
    
    listaContainer.innerHTML = modulos.map(modulo => {
        const isActual = modulo.numero === moduloActual.numero;
        const completado = modulo.completado ? 'completado' : '';
        
        return `
            <div class="modulo-item ${isActual ? 'actual' : ''}" style="
                background: ${isActual ? '#00F7FF' : 'rgba(255,255,255,0.1)'};
                color: ${isActual ? '#0F2424' : '#8CCCCF'};
                padding: 0.8rem;
                margin-bottom: 0.5rem;
                border-radius: 8px;
                cursor: pointer;
                transition: all 0.3s ease;
                border-left: 4px solid ${modulo.completado ? '#28a745' : '#00F7FF'};
            " onclick="navegarAModulo(${modulo.numero})">
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-${modulo.completado ? 'check-circle' : 'play-circle'}"></i>
                    <span style="font-weight: ${isActual ? 'bold' : 'normal'};">
                        Módulo ${modulo.numero}
                    </span>
                </div>
                <div style="font-size: 0.9rem; margin-top: 0.2rem; opacity: 0.8;">
                    ${modulo.titulo}
                </div>
            </div>
        `;
    }).join('');
}

// Función global para navegar a un módulo
window.navegarAModulo = function(numeroModulo) {
    if (numeroModulo !== moduloActual.numero) {
        // Cerrar modal si está abierto
        const modalOverlay = document.getElementById('modal-overlay');
        if (modalOverlay.style.display === 'flex') {
            modalOverlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        
        window.location.href = `detalle_modulo.html?curso=${encodeURIComponent(cursoActual.nombre)}&modulo=${numeroModulo}`;
    }
}

// Función global para marcar como completado
window.toggleCompletado = function() {
    const nuevoEstado = filtroModulos.toggleCompletado(cursoActual.nombre, moduloActual.numero);
    moduloActual.completado = nuevoEstado;
    
    // Actualizar interfaz
    actualizarBotonCompletar();
    actualizarProgreso();
    mostrarListaModulos();
    
    // Mostrar mensaje
    mostrarMensaje(nuevoEstado ? '¡Módulo completado!' : 'Módulo marcado como pendiente');
}

function mostrarMensaje(mensaje) {
    // Crear notificación temporal
    const notificacion = document.createElement('div');
    notificacion.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #00F7FF;
        color: #0F2424;
        padding: 1rem 2rem;
        border-radius: 8px;
        font-weight: bold;
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;
    notificacion.textContent = mensaje;
    
    document.body.appendChild(notificacion);
    
    setTimeout(() => {
        notificacion.remove();
    }, 3000);
}

function configurarFAQ() {
    const faqToggle = document.getElementById('faqToggle');
    const faqPopup = document.getElementById('faqPopup');
    const faqSend = document.getElementById('faqSend');
    
    faqToggle.addEventListener('click', function() {
        faqPopup.style.display = faqPopup.style.display === 'block' ? 'none' : 'block';
    });
    
    faqSend.addEventListener('click', function() {
        const nombre = document.getElementById('faqName').value;
        const email = document.getElementById('faqEmail').value;
        const mensaje = document.getElementById('faqMessage').value;
        
        if (nombre && email && mensaje) {
            alert('¡Gracias por tu mensaje! Te responderemos pronto.');
            faqPopup.style.display = 'none';
            document.getElementById('faqName').value = '';
            document.getElementById('faqEmail').value = '';
            document.getElementById('faqMessage').value = '';
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });
}

// Configurar modal de información
function configurarModal() {
    const btnModalInfo = document.getElementById('btn-modulo-info');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalClose = document.getElementById('modal-close');
    
    // Abrir modal
    btnModalInfo.addEventListener('click', function() {
        modalOverlay.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevenir scroll del body
    });
    
    // Cerrar modal
    function cerrarModal() {
        modalOverlay.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restaurar scroll del body
    }
    
    // Cerrar con botón X
    modalClose.addEventListener('click', cerrarModal);
    
    // Cerrar con click fuera del modal
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            cerrarModal();
        }
    });
    
    // Cerrar con tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalOverlay.style.display === 'flex') {
            cerrarModal();
        }
    });
}

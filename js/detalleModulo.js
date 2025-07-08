import { FiltroModulos } from './filtrarModulos.js';

let filtroModulos;
let cursoActual;
let moduloActual;

// Inicializar la página
document.addEventListener('DOMContentLoaded', function() {
    filtroModulos = new FiltroModulos();
    
    // Obtener parámetros de la URL
    const urlParams = filtroModulos.obtenerDatosDesdeURL();
    
    if (urlParams.curso && urlParams.modulo) {
        cargarModulo(urlParams.curso, urlParams.modulo);
    } else {
        // Redirigir si no hay parámetros válidos
        window.location.href = 'info_all_cursos.html';
    }
    
    // Configurar FAQ
    configurarFAQ();
    
    // Configurar modal
    configurarModal();
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
    document.getElementById('modulo-resumen').textContent = moduloActual.resumen;
    
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

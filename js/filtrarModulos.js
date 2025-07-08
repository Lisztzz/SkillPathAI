import { cursosDetalle, obtenerCursoPorNombre, obtenerModulosCurso, obtenerModulo } from './infomodulos.js';

export class FiltroModulos {
    constructor() {
        // Hacer una copia profunda para evitar modificar el original
        this.cursosDetalle = JSON.parse(JSON.stringify(cursosDetalle));
        this.cargarProgreso();
    }
    
    // Obtener curso por nombre
    obtenerCursoPorNombre(nombreCurso) {
        return this.cursosDetalle.find(curso => curso.nombre === nombreCurso);
    }
    
    // Obtener módulo específico de un curso
    obtenerModulo(nombreCurso, numeroModulo) {
        const curso = this.obtenerCursoPorNombre(nombreCurso);
        if (!curso) return null;
        
        return curso.modulosDetalle.find(modulo => modulo.numero === numeroModulo);
    }
    
    // Obtener todos los módulos de un curso
    obtenerModulosCurso(nombreCurso) {
        const curso = this.obtenerCursoPorNombre(nombreCurso);
        return curso ? curso.modulosDetalle : [];
    }
    
    // Filtrar cursos por criterios
    filtrarCursos(filtros = {}) {
        return this.cursosDetalle.filter(curso => {
            let cumple = true;
            
            if (filtros.nombre) {
                cumple = cumple && curso.nombre.toLowerCase().includes(filtros.nombre.toLowerCase());
            }
            
            if (filtros.profesor) {
                cumple = cumple && curso.profesor.toLowerCase().includes(filtros.profesor.toLowerCase());
            }
            
            if (filtros.minModulos) {
                cumple = cumple && curso.modulos >= filtros.minModulos;
            }
            
            if (filtros.maxModulos) {
                cumple = cumple && curso.modulos <= filtros.maxModulos;
            }
            
            return cumple;
        });
    }
    
    // Obtener datos desde URL
    obtenerDatosDesdeURL() {
        const params = new URLSearchParams(window.location.search);
        return {
            curso: params.get('curso'),
            modulo: parseInt(params.get('modulo')) || null
        };
    }
    
    // Método de conveniencia para parsear parámetros de URL
    parseUrlParams() {
        return this.obtenerDatosDesdeURL();
    }
    
    // Cargar progreso desde localStorage
    cargarProgreso() {
        const progresoGuardado = localStorage.getItem('cursosProgreso');
        if (progresoGuardado) {
            try {
                const progreso = JSON.parse(progresoGuardado);
                // Actualizar el estado de completado de los módulos
                progreso.forEach(cursoProgreso => {
                    const curso = this.cursosDetalle.find(c => c.nombre === cursoProgreso.nombre);
                    if (curso && cursoProgreso.modulosDetalle) {
                        cursoProgreso.modulosDetalle.forEach(moduloProgreso => {
                            const modulo = curso.modulosDetalle.find(m => m.numero === moduloProgreso.numero);
                            if (modulo) {
                                modulo.completado = moduloProgreso.completado;
                            }
                        });
                    }
                });
            } catch (error) {
                console.error('Error al cargar progreso:', error);
            }
        }
    }
    
    // Guardar progreso en localStorage
    guardarProgreso() {
        try {
            localStorage.setItem('cursosProgreso', JSON.stringify(this.cursosDetalle));
        } catch (error) {
            console.error('Error al guardar progreso:', error);
        }
    }
    
    // Obtener estadísticas de progreso de un curso
    obtenerEstadisticasProgreso(nombreCurso) {
        const curso = this.obtenerCursoPorNombre(nombreCurso);
        if (!curso) return null;
        
        const totalModulos = curso.modulos;
        const modulosCompletados = curso.modulosDetalle.filter(m => m.completado).length;
        const porcentaje = (modulosCompletados / totalModulos) * 100;
        
        return {
            total: totalModulos,
            completados: modulosCompletados,
            porcentaje: Math.round(porcentaje)
        };
    }
    
    // Marcar módulo como completado
    completarModulo(nombreCurso, numeroModulo) {
        const modulo = this.obtenerModulo(nombreCurso, numeroModulo);
        if (modulo) {
            modulo.completado = true;
            this.guardarProgreso();
            return true;
        }
        return false;
    }
    
    // Desmarcar módulo como completado
    descompletarModulo(nombreCurso, numeroModulo) {
        const modulo = this.obtenerModulo(nombreCurso, numeroModulo);
        if (modulo) {
            modulo.completado = false;
            this.guardarProgreso();
            return true;
        }
        return false;
    }
    
    // Alternar estado de completado
    toggleCompletado(nombreCurso, numeroModulo) {
        const modulo = this.obtenerModulo(nombreCurso, numeroModulo);
        if (modulo) {
            modulo.completado = !modulo.completado;
            this.guardarProgreso();
            return modulo.completado;
        }
        return false;
    }
}

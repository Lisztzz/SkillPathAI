import { dataCursos } from './datacursos.js';

export const cursosDetalle = dataCursos.map(curso => ({
    nombre: curso.nombre,
    modulo: curso.modulos,
    modulo_1: "",
    modulo_2: "",
    modulo_3: "",
    youtube: "",
    youtube_2: "",
    youtube_3: "",
    resumen1: "",
    resumen2: "",
    resumen3: "",
}));


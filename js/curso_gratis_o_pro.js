import { dataCursos } from './datacursos.js';

export const cursosDetalle = dataCursos.map(curso => ({
    nombre: curso.nombre,
    imagen: curso.imagen,
    pro: curso.pro,
    youtube: "",
    descripcion_larga: "",
    puedeEmpezar: !curso.pro, // Si es PRO, no se puede empezar (false), si es gratis, sí (true)
}));

//Detalles específicos a un curso:
cursosDetalle.forEach(curso => {
    if (curso.nombre === "Introducción a la IA") {
        curso.youtube = "https://www.youtube.com/embed/GX79smagB2Y";
        curso.descripcion_larga = "Este curso Introductorio está diseñado para quienes desean iniciarse en el mundo de la inteligencia artificial y comprender los conceptos clave. Aprenderás sobre los fundamentos de la IA, tipos de algoritmos, aprendizaje supervisado y no supervisado, redes neuronales básicas, procesamiento de lenguaje natural, y aplicaciones prácticas de la IA en el mundo real. El curso incluye ejercicios prácticos, ejemplos interactivos y acceso a foros de apoyo para resolver dudas y compartir experiencias.<br> Al finalizar, serás capaz de comprender el funcionamiento general de los sistemas de IA, identificar sus aplicaciones en distintos sectores, y sentar una base sólida para avanzar hacia cursos intermedios o especializados en inteligencia artificial.";
        curso.puedeEmpezar = true;
    }
    if (curso.nombre === "Técnicas avanzadas de IA") {
        curso.youtube = "https://www.youtube.com/embed/w3Ebzo61kh8";
        curso.descripcion_larga = "Este curso PRO está diseñado para quienes desean profundizar en los algoritmos y modelos avanzados de la inteligencia artificial. Aprenderás sobre redes neuronales profundas, técnicas de optimización, regularización, redes convolucionales y recurrentes, transfer learning, y cómo aplicar estos conocimientos en proyectos reales.";
        curso.puedeEmpezar = false;
    }
    // Agrega más if para otros cursos si lo deseas
});
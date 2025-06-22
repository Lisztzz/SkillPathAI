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
        curso.descripcion_larga = "Este curso Introductorio está diseñado para quienes desean iniciarse en el mundo de la inteligencia artificial y comprender los conceptos clave. Aprenderás sobre los fundamentos de la IA, tipos de algoritmos, aprendizaje supervisado y no supervisado, redes neuronales básicas, procesamiento de lenguaje natural, y aplicaciones prácticas de la IA en el mundo real. El curso incluye ejercicios prácticos, ejemplos interactivos y acceso a foros de apoyo para resolver dudas y compartir experiencias.<br><br>Al finalizar, serás capaz de comprender el funcionamiento general de los sistemas de IA, identificar sus aplicaciones en distintos sectores, y sentar una base sólida para avanzar hacia cursos intermedios o especializados en inteligencia artificial.";
        curso.puedeEmpezar = true;
    }
    if (curso.nombre === "Técnicas avanzadas de IA") {
        curso.youtube = "https://www.youtube.com/embed/w3Ebzo61kh8";
        curso.descripcion_larga = "Este curso PRO está diseñado para quienes desean profundizar en los algoritmos y modelos avanzados de la inteligencia artificial.<br><br>Aprenderás sobre redes neuronales profundas, técnicas de optimización, regularización, redes convolucionales y recurrentes, transfer learning, y cómo aplicar estos conocimientos en proyectos reales.<br><br>Al finalizar, tendrás una comprensión sólida de modelos complejos de IA y estarás preparado para enfrentarte a desafíos técnicos en entornos reales.";
        curso.puedeEmpezar = false;
    }
    if (curso.nombre === "Etica y sociedad") {
        curso.youtube = "https://www.youtube.com/embed/1g2b3c4d5e6";
        curso.descripcion_larga = "En este curso, exploraremos las implicaciones éticas de la inteligencia artificial y su impacto en la sociedad.<br><br>Aprenderás sobre los dilemas éticos que surgen con el uso de IA, la privacidad de los datos, sesgos algorítmicos, y cómo las decisiones automatizadas pueden afectar a las personas y comunidades.<br><br>Al finalizar, estarás capacitado para identificar y analizar problemas éticos en proyectos de IA y proponer soluciones responsables.";
        curso.puedeEmpezar = true;
    }
    if (curso.nombre === "IA en los negocios") {
        curso.youtube = "https://www.youtube.com/embed/7h8i9j0k1l2";
        curso.descripcion_larga = "Descubra cómo la IA está transformando el panorama empresarial. Aprenderás sobre la automatización de procesos, análisis predictivo, personalización de la experiencia del cliente, y cómo implementar soluciones de IA para mejorar la eficiencia y competitividad de las empresas.";
        curso.puedeEmpezar = true;
    }
    if (curso.nombre === "IA para principiantes") {
        curso.youtube = "https://www.youtube.com/embed/3m4n5o6p7q8";
        curso.descripcion_larga = "Un curso para principiantes que les ayudará a iniciarse en el mundo de la IA. Aprenderás los conceptos básicos, herramientas y técnicas fundamentales, y cómo aplicar la IA en proyectos sencillos.";
        curso.puedeEmpezar = true;
    }
    if (curso.nombre === "Gestión de proyectos de IA") {
        curso.youtube = "https://www.youtube.com/embed/9r0s1t2u3v4";
        curso.descripcion_larga = "Un curso que te enseñará a gestionar proyectos de inteligencia artificial desde la planificación hasta la implementación. Aprenderás sobre metodologías ágiles, gestión de equipos multidisciplinarios, y cómo medir el éxito de un proyecto de IA.";
        curso.puedeEmpezar = true;
    }
    if (curso.nombre === "IA y Data Science") {
        curso.youtube = "https://www.youtube.com/embed/5x6y7z8a9b0";
        curso.descripcion_larga = "Combine la IA con la ciencia de datos para obtener información valiosa. Aprenderás sobre técnicas de análisis de datos, modelado predictivo, y cómo utilizar herramientas de IA para extraer insights significativos.";
        curso.puedeEmpezar = false;
    }
    if (curso.nombre === "IA en Healthcare") {
        curso.youtube = "https://www.youtube.com/embed/2c3d4e5f6g7";
        curso.descripcion_larga = "Explore las aplicaciones de IA en la industria de la salud. Aprenderás sobre diagnóstico asistido por IA, análisis de imágenes médicas, y cómo la IA está revolucionando el cuidado del paciente y la investigación médica.";
        curso.puedeEmpezar = true;
    }
    if (curso.nombre === "IA y finanzas") {
        curso.youtube = "https://www.youtube.com/embed/8h9i0j1k2l3";
        curso.descripcion_larga = "Comprender el papel de la IA en el sector financiero. Aprenderás sobre análisis de riesgos, detección de fraudes, y cómo la IA está transformando la banca y las inversiones.";
        curso.puedeEmpezar = true;
    }
    if (curso.nombre === "IA y marketing") {
        curso.youtube = "https://www.youtube.com/embed/4m5n6o7p8q9";
        curso.descripcion_larga = "Aproveche la IA para las estrategias de marketing y la interacción con el cliente. Aprenderás sobre segmentación de audiencia, personalización de campañas, y análisis de comportamiento del consumidor.";
        curso.puedeEmpezar = true;
    }
    if (curso.nombre === "IA y eduación") {
        curso.youtube = "https://www.youtube.com/embed/1a2b3c4d5e6";
        curso.descripcion_larga = "Aplicar IA en entornos educativos para mejorar el aprendizaje. Aprenderás sobre plataformas adaptativas, análisis de desempeño estudiantil, y personalización de contenidos educativos.";
        curso.puedeEmpezar = true;
    }
    if (curso.nombre === "IA y sostenibilidad") {
        curso.youtube = "https://www.youtube.com/embed/2b3c4d5e6f7";
        curso.descripcion_larga = "Utilice IA para soluciones sostenibles y para el impacto ambiental. Aprenderás sobre monitoreo ambiental, optimización de recursos y proyectos de sostenibilidad apoyados por inteligencia artificial.";
        curso.puedeEmpezar = true;
    }
    if (curso.nombre === "Fundamentos de IA") {
        curso.youtube = "https://www.youtube.com/embed/3c4d5e6f7g8";
        curso.descripcion_larga = "Aprenda los conceptos básicos de la IA y sus aplicaciones. Este curso cubre historia, fundamentos, tipos de IA y ejemplos prácticos.";
        curso.puedeEmpezar = true;
    }
    if (curso.nombre === "Fundamentos de Machine Learning") {
        curso.youtube = "https://www.youtube.com/embed/4d5e6f7g8h9";
        curso.descripcion_larga = "Introducción a los algoritmos y técnicas de machine learning. Aprenderás sobre regresión, clasificación, clustering y evaluación de modelos.";
        curso.puedeEmpezar = false;
    }
    if (curso.nombre === "Fundamentos de Deep Learning") {
        curso.youtube = "https://www.youtube.com/embed/5e6f7g8h9i0";
        curso.descripcion_larga = "Explore los conceptos centrales de deep learning. Incluye redes neuronales profundas, convolucionales y aplicaciones en visión y lenguaje.";
        curso.puedeEmpezar = false;
    }
    if (curso.nombre === "Procesamiento de Natural Language") {
        curso.youtube = "https://www.youtube.com/embed/6f7g8h9i0j1";
        curso.descripcion_larga = "Comprender cómo procesar y analizar el lenguaje humano. Aprenderás sobre NLP, análisis de sentimientos, chatbots y traducción automática.";
        curso.puedeEmpezar = false;
    }
    if (curso.nombre === "Computer Vision") {
        curso.youtube = "https://www.youtube.com/embed/7g8h9i0j1k2";
        curso.descripcion_larga = "Introducción a la visión artificial y al reconocimiento de imágenes. Incluye detección de objetos, reconocimiento facial y aplicaciones prácticas.";
        curso.puedeEmpezar = false;
    }
});
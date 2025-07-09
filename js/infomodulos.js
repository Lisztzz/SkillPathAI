import { dataCursos } from './datacursos.js';

export const cursosDetalle = dataCursos.map(curso => ({
    nombre: curso.nombre,
    profesor: curso.profesor,
    duracion: curso.duracion,
    modulos: curso.modulos,
    modulosDetalle: [
        {
            numero: 1,
            titulo: curso.modulo1 || curso.moudlo1 || "Módulo 1",
            youtube: "",
            resumen: "",
            completado: false
        },
        {
            numero: 2,
            titulo: curso.modulo2 || "Módulo 2",
            youtube: "",
            resumen: "",
            completado: false
        },
        {
            numero: 3,
            titulo: curso.modulo3 || "Módulo 3",
            youtube: "",
            resumen: "",
            completado: false
        }
    ].slice(0, curso.modulos) // Solo incluir los módulos que tiene el curso
}));

// Personalizar información específica para cada curso y sus módulos
cursosDetalle.forEach(curso => {
    if (curso.nombre === "Introducción a la IA") {
        curso.modulosDetalle[0].titulo = "Historia y fundamentos de la inteligencia artificial";
        curso.modulosDetalle[0].youtube = "https://www.youtube.com/embed/1nsS1vknqUM";
        curso.modulosDetalle[0].resumen = "Aprende los conceptos básicos de la IA, su historia y las diferentes ramas que la componen. Conoce qué es el machine learning, deep learning y sus aplicaciones en la vida cotidiana.";
        
        if (curso.modulosDetalle[1]) {
            curso.modulosDetalle[1].titulo = "Aplicaciones actuales de la IA";
            curso.modulosDetalle[1].youtube = "https://www.youtube.com/embed/55NWu0e3b64";
            curso.modulosDetalle[1].resumen = "Desde el Test de Turing hasta los sistemas actuales, este módulo explica qué es un agente inteligente, cómo toman decisiones y qué se necesita para entrenar modelos simples.";
        }
        
        if (curso.modulosDetalle[2]) {
            curso.modulosDetalle[2].titulo = "Desafíos éticos y el futuro de la IA";
            curso.modulosDetalle[2].youtube = "https://www.youtube.com/embed/G87Kldv0qbs";
            curso.modulosDetalle[2].resumen = "Descubre cómo la IA se aplica en diferentes industrias: salud, finanzas, transporte y más. Casos de estudio reales y proyectos innovadores.";
        }
    }
    
    if (curso.nombre === "Técnicas avanzadas de IA") {
        curso.modulosDetalle[0].titulo = "Aprendizaje profundo y redes neuronales";
        curso.modulosDetalle[0].youtube = "https://www.youtube.com/embed/w3Ebzo61kh8";
        curso.modulosDetalle[0].resumen = "Domina las arquitecturas de redes neuronales profundas, backpropagation, y técnicas de optimización como Adam y RMSprop.";
        
        if (curso.modulosDetalle[1]) {
            curso.modulosDetalle[1].titulo = "Modelos generativos y transferencia de estilo";
            curso.modulosDetalle[1].youtube = "https://www.youtube.com/embed/8-9SHtKLHk4";
            curso.modulosDetalle[1].resumen = "Aprende técnicas avanzadas para evitar overfitting: dropout, batch normalization, y estrategias de regularización L1 y L2.";
        }
        
        if (curso.modulosDetalle[2]) {
            curso.modulosDetalle[2].titulo = "Implementación de modelos en producción";
            curso.modulosDetalle[2].youtube = "https://www.youtube.com/embed/3lTgMNBkAoI";
            curso.modulosDetalle[2].resumen = "Utiliza modelos pre-entrenados y técnicas de transfer learning para acelerar el desarrollo de proyectos de IA complejos.";
        }
    }
    
    if (curso.nombre === "Ética y Sociedad") {
        curso.modulosDetalle[0].titulo = "Principios éticos de la inteligencia artificial";
        curso.modulosDetalle[0].youtube = "https://www.youtube.com/embed/XxztyJ74uzk";
        curso.modulosDetalle[0].resumen = "Explora los principios fundamentales de la ética en IA: transparencia, justicia, responsabilidad y beneficencia. Casos de dilemas éticos reales.";
        
        if (curso.modulosDetalle[1]) {
            curso.modulosDetalle[1].titulo = "Sesgos algorítmicos e impacto social";
            curso.modulosDetalle[1].youtube = "https://www.youtube.com/embed/C3Hn2WzqJ3E";
            curso.modulosDetalle[1].resumen = "Identifica y mitiga sesgos en algoritmos de IA. Aprende sobre discriminación algorítmica y cómo crear sistemas más justos e inclusivos.";
        }
        
        if (curso.modulosDetalle[2]) {
            curso.modulosDetalle[2].titulo = "Regulación y gobernanza de la IA";
            curso.modulosDetalle[2].youtube = "https://www.youtube.com/embed/a_4Y2fGdVCs";
            curso.modulosDetalle[2].resumen = "Comprende las implicaciones de privacidad en sistemas de IA, GDPR, y técnicas como differential privacy para proteger datos personales.";
        }
    }
    if (curso.nombre === "Transformación Digital") {
        curso.modulosDetalle[0].titulo = "Qué es la transformación digital";
        curso.modulosDetalle[0].youtube = "https://www.youtube.com/embed/FjAq1xjBv_4";
        curso.modulosDetalle[0].resumen = "Descubre qué es la transformación digital, su importancia en el mundo actual, y cómo las empresas están adaptándose a la era digital.";
        if( curso.modulosDetalle[1]) {
            curso.modulosDetalle[1].titulo = "Tecnología como motor de cambio";
            curso.modulosDetalle[1].youtube = "https://www.youtube.com/embed/xPg7KbF633E";
            curso.modulosDetalle[1].resumen = "Explora tecnologías emergentes como IA, IoT, blockchain, y cómo están revolucionando industrias enteras. Casos de éxito y desafíos.";
        }
        if (curso.modulosDetalle[2]) {
            curso.modulosDetalle[2].titulo = "Liderazgo y adaptación al cambio";
            curso.modulosDetalle[2].youtube = "https://www.youtube.com/embed/dMxF9dg53ss";
            curso.modulosDetalle[2].resumen = "Aprende cómo liderar el cambio en tu organización, fomentar una cultura digital, y las habilidades necesarias para el liderazgo en la era digital.";
        }
    }

    
    if (curso.nombre === "Fundamentos de Machine Learning") {
        curso.modulosDetalle[0].titulo = "Introducción al aprendizaje automático";
        curso.modulosDetalle[0].youtube = "https://www.youtube.com/embed/xrQ1YH0PnrM";
        curso.modulosDetalle[0].resumen = "Comprende los conceptos básicos del ML: tipos de aprendizaje, preprocesamiento de datos, y selección de características.";
        
        if (curso.modulosDetalle[1]) {
            curso.modulosDetalle[1].titulo = "Algoritmos clásicos y cómo aplicarlos";
            curso.modulosDetalle[1].youtube = "https://www.youtube.com/embed/i_LwzRVP7bg";
            curso.modulosDetalle[1].resumen = "Domina algoritmos fundamentales: regresión lineal, logística, árboles de decisión, SVM, y k-means. Implementación práctica con Python.";
        }
        
        if (curso.modulosDetalle[2]) {
            curso.modulosDetalle[2].titulo = "Evaluación de modelos y ajuste de parámetros";
            curso.modulosDetalle[2].youtube = "https://www.youtube.com/embed/HDIFYB8Qsfo";
            curso.modulosDetalle[2].resumen = "Aprende métricas de evaluación, validación cruzada, grid search, y técnicas para optimizar el rendimiento de tus modelos.";
        }
    }
    
    if (curso.nombre === "Fundamentos de Deep Learning") {
        curso.modulosDetalle[0].titulo = "Redes neuronales artificiales y perceptrón multicapa";
        curso.modulosDetalle[0].youtube = "https://www.youtube.com/embed/GxwGeN2a7V8";
        curso.modulosDetalle[0].resumen = "Descubre cómo funcionan las neuronas artificiales, perceptrones, y redes multicapa. Conceptos de forward propagation y backpropagation.";
        
        if (curso.modulosDetalle[1]) {
            curso.modulosDetalle[1].titulo = "Redes convolucionales (CNN) y visión artificial";
            curso.modulosDetalle[1].youtube = "https://www.youtube.com/embed/Jy9-aGMB_TE";
            curso.modulosDetalle[1].resumen = "Aprende sobre redes convolucionales para procesamiento de imágenes: convolución, pooling, filtros, y arquitecturas como LeNet y ResNet.";
        }
        
        if (curso.modulosDetalle[2]) {
            curso.modulosDetalle[2].titulo = "Técnicas de regularización y mejora de modelos";
            curso.modulosDetalle[2].youtube = "https://www.youtube.com/embed/bYISVbvDFig";
            curso.modulosDetalle[2].resumen = "Domina las redes recurrentes para secuencias temporales, LSTM, GRU, y aplicaciones en procesamiento de lenguaje natural.";
        }
    }
    
    if (curso.nombre === "Data Science") {
        curso.modulosDetalle[0].titulo = "Introducción al análisis de datos";
        curso.modulosDetalle[0].youtube = "https://www.youtube.com/embed/oQmxQh92Nh8";
        curso.modulosDetalle[0].resumen = "Aprende el ciclo de vida de un proyecto de ciencia de datos: desde la recolección hasta la presentación de resultados.";
        
        if (curso.modulosDetalle[1]) {
            curso.modulosDetalle[1].titulo = "Estadística y visualización de datos";
            curso.modulosDetalle[1].youtube = "https://www.youtube.com/embed/K9teElePNkk";
            curso.modulosDetalle[1].resumen = "Domina técnicas de análisis exploratorio de datos, estadística descriptiva, y visualización efectiva con Python y R.";
        }
        
        if (curso.modulosDetalle[2]) {
            curso.modulosDetalle[2].titulo = "Introducción al aprendizaje automático";
            curso.modulosDetalle[2].youtube = "https://www.youtube.com/embed/r67SfaiYaDI";
            curso.modulosDetalle[2].resumen = "Construye modelos predictivos, interpreta resultados, y comunica insights de manera efectiva a stakeholders no técnicos.";
        }
    }
    
    if (curso.nombre === "Fundamentos para Principiantes") {
        curso.modulosDetalle[0].titulo = "Introducción a la computación";
        curso.modulosDetalle[0].youtube = "https://www.youtube.com/embed/EA8Ijw5keAk";
        curso.modulosDetalle[0].resumen = "Aprende los conceptos básicos de computación, sistemas digitales y cómo funcionan las computadoras en la vida cotidiana.";
        
        if (curso.modulosDetalle[1]) {
            curso.modulosDetalle[1].titulo = "Pensamiento lógico y programación básica";
            curso.modulosDetalle[1].youtube = "https://www.youtube.com/embed/s16xd9XyDnY";
            curso.modulosDetalle[1].resumen = "Desarrolla habilidades de pensamiento lógico y aprende conceptos básicos de programación sin necesidad de experiencia previa.";
        }
        
        if (curso.modulosDetalle[2]) {
            curso.modulosDetalle[2].titulo = "Primeros pasos con IA y datos";
            curso.modulosDetalle[2].youtube = "https://www.youtube.com/embed/Fgz1yV7oj-g";
            curso.modulosDetalle[2].resumen = "Introducción práctica al mundo de la inteligencia artificial y el análisis de datos de manera accesible para principiantes.";
        }
    }
    
    if (curso.nombre === "Gestión de Proyectos Tecnológicos") {
        curso.modulosDetalle[0].titulo = "Fundamentos de gestión de proyectos";
        curso.modulosDetalle[0].youtube = "https://www.youtube.com/embed/Z3usMyZ5eXA";
        curso.modulosDetalle[0].resumen = "Aprende los principios básicos de gestión de proyectos, planificación, definición de objetivos y asignación de recursos.";
        
        if (curso.modulosDetalle[1]) {
            curso.modulosDetalle[1].titulo = "Metodologías ágiles y tradicionales";
            curso.modulosDetalle[1].youtube = "https://www.youtube.com/embed/fis_BlLgnlA";
            curso.modulosDetalle[1].resumen = "Domina metodologías como Scrum, Kanban, y enfoques tradicionales como Waterfall para gestionar proyectos tecnológicos.";
        }
        
        if (curso.modulosDetalle[2]) {
            curso.modulosDetalle[2].titulo = "Gestión de equipos y entrega de valor";
            curso.modulosDetalle[2].youtube = "https://www.youtube.com/embed/VAviTsRGlsQ";
            curso.modulosDetalle[2].resumen = "Aprende a liderar equipos multidisciplinarios, gestionar stakeholders y entregar valor continuo en proyectos tecnológicos.";
        }
    }
    
    if (curso.nombre === "Tecnología en Salud") {
        curso.modulosDetalle[0].titulo = "Fundamentos de la salud digital";
        curso.modulosDetalle[0].youtube = "https://www.youtube.com/embed/l67s1a9XNE8";
        curso.modulosDetalle[0].resumen = "Explora cómo la tecnología está transformando el sector salud: telemedicina, expedientes electrónicos y dispositivos wearables.";
        
        if (curso.modulosDetalle[1]) {
            curso.modulosDetalle[1].titulo = "Aplicaciones de IA en medicina";
            curso.modulosDetalle[1].youtube = "https://www.youtube.com/embed/0rUQ193UkRs";
            curso.modulosDetalle[1].resumen = "Descubre aplicaciones de IA en diagnóstico médico, análisis de imágenes, descubrimiento de fármacos y medicina personalizada.";
        }
        
        if (curso.modulosDetalle[2]) {
            curso.modulosDetalle[2].titulo = "Ética y regulaciones en tecnología médica";
            curso.modulosDetalle[2].youtube = "https://www.youtube.com/embed/18852324";
            curso.modulosDetalle[2].resumen = "Comprende los aspectos éticos, legales y regulatorios del uso de tecnología en salud, privacidad y seguridad de datos médicos.";
        }
    }
    
    if (curso.nombre === "Tecnología en Finanzas") {
        curso.modulosDetalle[0].titulo = "FinTech y evolución del sistema financiero";
        curso.modulosDetalle[0].youtube = "https://www.youtube.com/embed/J0mvkYd5xSM";
        curso.modulosDetalle[0].resumen = "Aprende sobre la evolución del sector financiero, tecnologías FinTech, pagos digitales, blockchain y criptomonedas.";
        
        if (curso.modulosDetalle[1]) {
            curso.modulosDetalle[1].titulo = "Inteligencia artificial y big data en finanzas";
            curso.modulosDetalle[1].youtube = "https://www.youtube.com/embed/V-HrDQoa0pc";
            curso.modulosDetalle[1].resumen = "Explora aplicaciones de IA en finanzas: análisis de riesgo, detección de fraude, trading algorítmico y robo-advisors.";
        }
        
        if (curso.modulosDetalle[2]) {
            curso.modulosDetalle[2].titulo = "Ciberseguridad y regulación financiera";
            curso.modulosDetalle[2].youtube = "https://www.youtube.com/embed/U7ZEWtCbW_8";
            curso.modulosDetalle[2].resumen = "Comprende los desafíos de ciberseguridad en finanzas, cumplimiento regulatorio, KYC, AML y protección de datos financieros.";
        }
    }
    
    if (curso.nombre === "Marketing Digital") {
        curso.modulosDetalle[0].titulo = "Estrategia de marketing en entornos digitales";
        curso.modulosDetalle[0].youtube = "https://www.youtube.com/embed/ADgiTLjtAOo";
        curso.modulosDetalle[0].resumen = "Desarrolla estrategias de marketing digital efectivas: segmentación de audiencias, customer journey y omnicanalidad.";
        
        if (curso.modulosDetalle[1]) {
            curso.modulosDetalle[1].titulo = "Publicidad y posicionamiento en buscadores";
            curso.modulosDetalle[1].youtube = "https://www.youtube.com/embed/9I_HypyPlXg";
            curso.modulosDetalle[1].resumen = "Domina SEO, SEM, Google Ads, publicidad en redes sociales y técnicas para mejorar la visibilidad online.";
        }
        
        if (curso.modulosDetalle[2]) {
            curso.modulosDetalle[2].titulo = "Analítica digital y optimización de campañas";
            curso.modulosDetalle[2].youtube = "https://www.youtube.com/embed/t32NwN5MtTg";
            curso.modulosDetalle[2].resumen = "Aprende a medir y optimizar campañas digitales usando Google Analytics, métricas KPI y herramientas de automatización.";
        }
    }
    
    if (curso.nombre === "Tecnología en Educación") {
        curso.modulosDetalle[0].titulo = "Herramientas y plataformas de enseñanza virtual";
        curso.modulosDetalle[0].youtube = "https://www.youtube.com/embed/x_kflpNXdDQ";
        curso.modulosDetalle[0].resumen = "Explora plataformas LMS, herramientas de videoconferencia, realidad virtual/aumentada y gamificación en educación.";
        
        if (curso.modulosDetalle[1]) {
            curso.modulosDetalle[1].titulo = "Analítica del aprendizaje y personalización";
            curso.modulosDetalle[1].youtube = "https://www.youtube.com/embed/bINExCU-Bzc";
            curso.modulosDetalle[1].resumen = "Aprende sobre learning analytics, sistemas adaptativos, IA para personalización del aprendizaje y evaluación automatizada.";
        }
    }
    
    if (curso.nombre === "Tecnología y Sostenibilidad") {
        curso.modulosDetalle[0].titulo = "Innovaciones tecnológicas para el desarrollo sostenible";
        curso.modulosDetalle[0].youtube = "https://www.youtube.com/embed/R_9p9wC_tJY";
        curso.modulosDetalle[0].resumen = "Descubre tecnologías verdes, energías renovables, IoT para eficiencia energética y soluciones tech para el cambio climático.";
        
        if (curso.modulosDetalle[1]) {
            curso.modulosDetalle[1].titulo = "Monitoreo ambiental y uso de datos geoespaciales";
            curso.modulosDetalle[1].youtube = "https://www.youtube.com/embed/ajGgd9Ld-Wc";
            curso.modulosDetalle[1].resumen = "Aprende sobre sensores ambientales, satelitales, GIS, análisis de datos climáticos y monitoreo de ecosistemas.";
        }
        
        if (curso.modulosDetalle[2]) {
            curso.modulosDetalle[2].titulo = "Economía circular y responsabilidad tecnológica";
            curso.modulosDetalle[2].youtube = "https://www.youtube.com/embed/3KPQbXqRNr4";
            curso.modulosDetalle[2].resumen = "Explora principios de economía circular, e-waste, diseño sostenible de productos tech y responsabilidad corporativa.";
        }
    }
    
    if (curso.nombre === "Fundamentos de IA") {
        curso.modulosDetalle[0].titulo = "Conceptos esenciales y tipos de inteligencia artificial";
        curso.modulosDetalle[0].youtube = "https://www.youtube.com/embed/d2ts4Ob8rqI";
        curso.modulosDetalle[0].resumen = "Comprende los conceptos fundamentales de IA, diferencias entre IA débil y fuerte, y los principales tipos de sistemas inteligentes.";
        
        if (curso.modulosDetalle[1]) {
            curso.modulosDetalle[1].titulo = "Herramientas y entornos de desarrollo en IA";
            curso.modulosDetalle[1].youtube = "https://www.youtube.com/embed/DnBVgfe6ZQM";
            curso.modulosDetalle[1].resumen = "Familiarízate con Python, librerías como TensorFlow y PyTorch, Jupyter Notebooks y plataformas cloud para IA.";
        }
    }
    
    if (curso.nombre === "Procesamiento de Lenguaje Natural") {
        curso.modulosDetalle[0].titulo = "Representación y limpieza de texto";
        curso.modulosDetalle[0].youtube = "https://www.youtube.com/embed/6C0sLtw5ctc";
        curso.modulosDetalle[0].resumen = "Aprende técnicas de preprocesamiento de texto, tokenización, normalización, y representación vectorial de documentos.";
        
        if (curso.modulosDetalle[1]) {
            curso.modulosDetalle[1].titulo = "Modelos de lenguaje y word embeddings";
            curso.modulosDetalle[1].youtube = "https://www.youtube.com/embed/gQddtTdmG_8";
            curso.modulosDetalle[1].resumen = "Explora Word2Vec, GloVe, BERT, transformers y cómo los modelos de lenguaje capturan semántica y contexto.";
        }
        
        if (curso.modulosDetalle[2]) {
            curso.modulosDetalle[2].titulo = "Aplicaciones prácticas de NLP";
            curso.modulosDetalle[2].youtube = "https://www.youtube.com/embed/jDmlLRi5cIA";
            curso.modulosDetalle[2].resumen = "Implementa chatbots, análisis de sentimientos, traducción automática, extracción de información y generación de texto.";
        }
    }
    
    if (curso.nombre === "Visión por Computadora") {
        curso.modulosDetalle[0].titulo = "Fundamentos del procesamiento de imágenes digitales";
        curso.modulosDetalle[0].youtube = "https://www.youtube.com/embed/2w8XIskzdFw";
        curso.modulosDetalle[0].resumen = "Comprende cómo se representan las imágenes digitalmente, filtros, operaciones básicas y técnicas de mejora de imágenes.";
        
        if (curso.modulosDetalle[1]) {
            curso.modulosDetalle[1].titulo = "Detección y clasificación de objetos";
            curso.modulosDetalle[1].youtube = "https://www.youtube.com/embed/t-phGBfPEZ4";
            curso.modulosDetalle[1].resumen = "Aprende algoritmos de detección como YOLO, R-CNN, clasificación de imágenes con redes convolucionales y transfer learning.";
        }
        
        if (curso.modulosDetalle[2]) {
            curso.modulosDetalle[2].titulo = "Segmentación, seguimiento y análisis avanzado";
            curso.modulosDetalle[2].youtube = "https://www.youtube.com/embed/CR0uv9gjsS8";
            curso.modulosDetalle[2].resumen = "Domina técnicas de segmentación semántica, seguimiento de objetos en video, reconocimiento facial y análisis de escenas.";
        }
    }
    
});

// Función para obtener curso por nombre
export function obtenerCursoPorNombre(nombreCurso) {
    return cursosDetalle.find(curso => curso.nombre === nombreCurso);
}

// Función para obtener módulos de un curso específico
export function obtenerModulosCurso(nombreCurso) {
    const curso = obtenerCursoPorNombre(nombreCurso);
    return curso ? curso.modulosDetalle : [];
}

// Función para obtener un módulo específico
export function obtenerModulo(nombreCurso, numeroModulo) {
    const curso = obtenerCursoPorNombre(nombreCurso);
    if (!curso) return null;
    
    return curso.modulosDetalle.find(modulo => modulo.numero === numeroModulo);
}
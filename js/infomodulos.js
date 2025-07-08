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
            duracion: "2h 30min",
            completado: false
        },
        {
            numero: 2,
            titulo: curso.modulo2 || "Módulo 2",
            youtube: "",
            resumen: "",
            duracion: "3h 15min",
            completado: false
        },
        {
            numero: 3,
            titulo: curso.modulo3 || "Módulo 3",
            youtube: "",
            resumen: "",
            duracion: "2h 45min",
            completado: false
        }
    ].slice(0, curso.modulos) // Solo incluir los módulos que tiene el curso
}));

// Personalizar información específica para cada curso y sus módulos
cursosDetalle.forEach(curso => {
    if (curso.nombre === "Introducción a la IA") {
        curso.modulosDetalle[0].titulo = "Fundamentos de la Inteligencia Artificial";
        curso.modulosDetalle[0].youtube = "https://www.youtube.com/embed/GX79smagB2Y";
        curso.modulosDetalle[0].resumen = "Aprende los conceptos básicos de la IA, su historia y las diferentes ramas que la componen. Conoce qué es el machine learning, deep learning y sus aplicaciones en la vida cotidiana.";
        curso.modulosDetalle[0].duracion = "2h 15min";
        
        if (curso.modulosDetalle[1]) {
            curso.modulosDetalle[1].titulo = "Algoritmos y Tipos de Aprendizaje";
            curso.modulosDetalle[1].youtube = "https://www.youtube.com/embed/example2";
            curso.modulosDetalle[1].resumen = "Explora los diferentes tipos de algoritmos de IA: supervisado, no supervisado y por refuerzo. Aprende cuándo usar cada uno y sus ventajas.";
            curso.modulosDetalle[1].duracion = "3h 00min";
        }
        
        if (curso.modulosDetalle[2]) {
            curso.modulosDetalle[2].titulo = "Aplicaciones Prácticas de la IA";
            curso.modulosDetalle[2].youtube = "https://www.youtube.com/embed/example3";
            curso.modulosDetalle[2].resumen = "Descubre cómo la IA se aplica en diferentes industrias: salud, finanzas, transporte y más. Casos de estudio reales y proyectos innovadores.";
            curso.modulosDetalle[2].duracion = "2h 30min";
        }
    }
    
    if (curso.nombre === "Técnicas avanzadas de IA") {
        curso.modulosDetalle[0].titulo = "Redes Neuronales Profundas";
        curso.modulosDetalle[0].youtube = "https://www.youtube.com/embed/w3Ebzo61kh8";
        curso.modulosDetalle[0].resumen = "Domina las arquitecturas de redes neuronales profundas, backpropagation, y técnicas de optimización como Adam y RMSprop.";
        curso.modulosDetalle[0].duracion = "4h 30min";
        
        if (curso.modulosDetalle[1]) {
            curso.modulosDetalle[1].titulo = "Regularización y Optimización";
            curso.modulosDetalle[1].youtube = "https://www.youtube.com/embed/example4";
            curso.modulosDetalle[1].resumen = "Aprende técnicas avanzadas para evitar overfitting: dropout, batch normalization, y estrategias de regularización L1 y L2.";
            curso.modulosDetalle[1].duracion = "3h 45min";
        }
        
        if (curso.modulosDetalle[2]) {
            curso.modulosDetalle[2].titulo = "Transfer Learning y Modelos Pre-entrenados";
            curso.modulosDetalle[2].youtube = "https://www.youtube.com/embed/example5";
            curso.modulosDetalle[2].resumen = "Utiliza modelos pre-entrenados y técnicas de transfer learning para acelerar el desarrollo de proyectos de IA complejos.";
            curso.modulosDetalle[2].duracion = "4h 15min";
        }
    }
    
    if (curso.nombre === "Ética y Sociedad") {
        curso.modulosDetalle[0].titulo = "Principios Éticos en IA";
        curso.modulosDetalle[0].youtube = "https://www.youtube.com/embed/XxztyJ74uzk";
        curso.modulosDetalle[0].resumen = "Explora los principios fundamentales de la ética en IA: transparencia, justicia, responsabilidad y beneficencia. Casos de dilemas éticos reales.";
        curso.modulosDetalle[0].duracion = "2h 00min";
        
        if (curso.modulosDetalle[1]) {
            curso.modulosDetalle[1].titulo = "Sesgos Algorítmicos y Discriminación";
            curso.modulosDetalle[1].youtube = "https://www.youtube.com/embed/example6";
            curso.modulosDetalle[1].resumen = "Identifica y mitiga sesgos en algoritmos de IA. Aprende sobre discriminación algorítmica y cómo crear sistemas más justos e inclusivos.";
            curso.modulosDetalle[1].duracion = "2h 30min";
        }
        
        if (curso.modulosDetalle[2]) {
            curso.modulosDetalle[2].titulo = "Privacidad y Protección de Datos";
            curso.modulosDetalle[2].youtube = "https://www.youtube.com/embed/example7";
            curso.modulosDetalle[2].resumen = "Comprende las implicaciones de privacidad en sistemas de IA, GDPR, y técnicas como differential privacy para proteger datos personales.";
            curso.modulosDetalle[2].duracion = "2h 15min";
        }
    }
    
    if (curso.nombre === "Fundamentos de Machine Learning") {
        curso.modulosDetalle[0].titulo = "Introducción al Machine Learning";
        curso.modulosDetalle[0].youtube = "https://www.youtube.com/embed/xrQ1YH0PnrM";
        curso.modulosDetalle[0].resumen = "Comprende los conceptos básicos del ML: tipos de aprendizaje, preprocesamiento de datos, y selección de características.";
        curso.modulosDetalle[0].duracion = "3h 00min";
        
        if (curso.modulosDetalle[1]) {
            curso.modulosDetalle[1].titulo = "Algoritmos de Clasificación y Regresión";
            curso.modulosDetalle[1].youtube = "https://www.youtube.com/embed/example8";
            curso.modulosDetalle[1].resumen = "Domina algoritmos fundamentales: regresión lineal, logística, árboles de decisión, SVM, y k-means. Implementación práctica con Python.";
            curso.modulosDetalle[1].duracion = "4h 30min";
        }
        
        if (curso.modulosDetalle[2]) {
            curso.modulosDetalle[2].titulo = "Evaluación y Optimización de Modelos";
            curso.modulosDetalle[2].youtube = "https://www.youtube.com/embed/example9";
            curso.modulosDetalle[2].resumen = "Aprende métricas de evaluación, validación cruzada, grid search, y técnicas para optimizar el rendimiento de tus modelos.";
            curso.modulosDetalle[2].duracion = "3h 45min";
        }
    }
    
    if (curso.nombre === "Fundamentos de Deep Learning") {
        curso.modulosDetalle[0].titulo = "Introducción a las Redes Neuronales";
        curso.modulosDetalle[0].youtube = "https://www.youtube.com/embed/Hz5LfWah6VE";
        curso.modulosDetalle[0].resumen = "Descubre cómo funcionan las neuronas artificiales, perceptrones, y redes multicapa. Conceptos de forward propagation y backpropagation.";
        curso.modulosDetalle[0].duracion = "3h 30min";
        
        if (curso.modulosDetalle[1]) {
            curso.modulosDetalle[1].titulo = "Redes Convolucionales (CNNs)";
            curso.modulosDetalle[1].youtube = "https://www.youtube.com/embed/example10";
            curso.modulosDetalle[1].resumen = "Aprende sobre redes convolucionales para procesamiento de imágenes: convolución, pooling, filtros, y arquitecturas como LeNet y ResNet.";
            curso.modulosDetalle[1].duracion = "4h 15min";
        }
        
        if (curso.modulosDetalle[2]) {
            curso.modulosDetalle[2].titulo = "Redes Recurrentes (RNNs) y LSTM";
            curso.modulosDetalle[2].youtube = "https://www.youtube.com/embed/example11";
            curso.modulosDetalle[2].resumen = "Domina las redes recurrentes para secuencias temporales, LSTM, GRU, y aplicaciones en procesamiento de lenguaje natural.";
            curso.modulosDetalle[2].duracion = "4h 00min";
        }
    }
    
    if (curso.nombre === "Data Science") {
        curso.modulosDetalle[0].titulo = "Fundamentos de Ciencia de Datos";
        curso.modulosDetalle[0].youtube = "https://www.youtube.com/embed/dH5v_mcvlXM";
        curso.modulosDetalle[0].resumen = "Aprende el ciclo de vida de un proyecto de ciencia de datos: desde la recolección hasta la presentación de resultados.";
        curso.modulosDetalle[0].duracion = "2h 45min";
        
        if (curso.modulosDetalle[1]) {
            curso.modulosDetalle[1].titulo = "Análisis Exploratorio y Visualización";
            curso.modulosDetalle[1].youtube = "https://www.youtube.com/embed/example12";
            curso.modulosDetalle[1].resumen = "Domina técnicas de análisis exploratorio de datos, estadística descriptiva, y visualización efectiva con Python y R.";
            curso.modulosDetalle[1].duracion = "3h 30min";
        }
        
        if (curso.modulosDetalle[2]) {
            curso.modulosDetalle[2].titulo = "Modelado Predictivo y Comunicación";
            curso.modulosDetalle[2].youtube = "https://www.youtube.com/embed/example13";
            curso.modulosDetalle[2].resumen = "Construye modelos predictivos, interpreta resultados, y comunica insights de manera efectiva a stakeholders no técnicos.";
            curso.modulosDetalle[2].duracion = "4h 00min";
        }
    }
    
    // Agregar más cursos según sea necesario...
    // Para cursos sin personalización específica, mantendrán la información por defecto
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
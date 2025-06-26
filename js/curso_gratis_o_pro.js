import { dataCursos } from './datacursos.js';

export const cursosDetalle = dataCursos.map(curso => ({
    nombre: curso.nombre,
    imagen: curso.imagen,
    profesor: curso.profesor,
    pro: curso.pro,
    youtube: "",
    descripcion_larga: "",
    duracion: "",
    nivel : "",
    puedeEmpezar: !curso.pro, // Si es PRO, no se puede empezar (false), si es gratis, sí (true)
}));

cursosDetalle.forEach(curso => {
    if (curso.nombre === "Introducción a la IA") {
        curso.youtube = "https://www.youtube.com/embed/GX79smagB2Y";
        curso.duracion = "4 semanas";
        curso.nivel = "Principiante";
        curso.descripcion_larga = "Este curso Introductorio está diseñado para quienes desean iniciarse en el mundo de la inteligencia artificial y comprender los conceptos clave. Aprenderás sobre los fundamentos de la IA, tipos de algoritmos, aprendizaje supervisado y no supervisado, redes neuronales básicas, procesamiento de lenguaje natural, y aplicaciones prácticas de la IA en el mundo real. El curso incluye ejercicios prácticos, ejemplos interactivos y acceso a foros de apoyo para resolver dudas y compartir experiencias.<br><br>Al finalizar, serás capaz de comprender el funcionamiento general de los sistemas de IA, identificar sus aplicaciones en distintos sectores, y sentar una base sólida para avanzar hacia cursos intermedios o especializados en inteligencia artificial.";
        curso.puedeEmpezar = true;
    }
    if (curso.nombre === "Técnicas avanzadas de IA") {
        curso.youtube = "https://www.youtube.com/embed/w3Ebzo61kh8";
        curso.duracion = "3 semanas";
        curso.nivel = "Intermedio";
        curso.descripcion_larga = "Este curso PRO está diseñado para quienes desean profundizar en el estudio de algoritmos y arquitecturas avanzadas en inteligencia artificial. Aprenderás sobre redes neuronales profundas, regularización, optimización con algoritmos como Adam y RMSprop, redes convolucionales para visión por computadora, redes recurrentes para secuencias, y técnicas como el transfer learning para reutilizar modelos entrenados. También explorarás el entrenamiento eficiente de modelos y casos reales de implementación en la industria.<br><br>Al finalizar, serás capaz de diseñar, entrenar y evaluar modelos de IA avanzados, aplicar buenas prácticas en proyectos reales y abordar retos técnicos complejos con una base sólida.";
        curso.puedeEmpezar = false;
    }
    if (curso.nombre === "Ética y Sociedad") {
        curso.youtube = "https://www.youtube.com/embed/XxztyJ74uzk";
        curso.duracion = "2 semanas";
        curso.nivel = "Principiante";
        curso.descripcion_larga = "Este curso te permitirá comprender el papel fundamental de la ética en el desarrollo y uso de la inteligencia artificial. Analizaremos los dilemas éticos que surgen al usar IA en decisiones automatizadas, los riesgos de sesgo algorítmico, la gestión de datos personales y la privacidad. También debatiremos sobre justicia algorítmica, responsabilidad moral, transparencia y rendición de cuentas.<br><br>Al finalizar, estarás preparado para identificar riesgos éticos en proyectos tecnológicos, proponer soluciones justas y aplicar principios éticos en el diseño y despliegue de sistemas de IA.";
        curso.puedeEmpezar = true;
    }
    if (curso.nombre === "Transformación Digital") {
        curso.youtube = "https://www.youtube.com/embed/6PegO9OMmq0";
        curso.duracion = "5 semanas";
        curso.nivel = "Intermedio";
        curso.descripcion_larga = "Este curso te introduce a los procesos de transformación digital que están revolucionando empresas y sectores. Aprenderás qué es la transformación digital, sus etapas, herramientas clave como la automatización, inteligencia artificial, computación en la nube, y cómo afecta la cultura organizacional. Se presentan casos reales de adopción tecnológica en empresas tradicionales y digitales.<br><br>Al finalizar, comprenderás cómo liderar procesos de cambio digital, reconocer oportunidades de innovación y adoptar tecnologías para mantener la competitividad en un entorno cambiante.";
        curso.puedeEmpezar = true;
    }
    if (curso.nombre === "Fundamentos para Principiantes") {
        curso.youtube = "https://www.youtube.com/embed/GqwKoXe-XTY";
        curso.duracion = "3 semanas";
        curso.nivel = "Principiante";
        curso.descripcion_larga = "Este curso está diseñado para quienes se inician en el mundo de la tecnología y la inteligencia artificial sin necesidad de conocimientos previos. Aprenderás los conceptos clave de datos, algoritmos, IA, internet y software. También explorarás herramientas básicas como hojas de cálculo, plataformas de programación visual y entornos interactivos simples.<br><br>Al finalizar, tendrás una comprensión clara de cómo funciona la tecnología en la vida cotidiana y una base para continuar hacia cursos más técnicos o especializados.";
        curso.puedeEmpezar = true;
    }
    if (curso.nombre === "Gestión de Proyectos Tecnológicos") {
        curso.youtube = "https://www.youtube.com/embed/MlyrriEzx3o";
        curso.duracion = "4 semanas";
        curso.nivel = "Intermedio";
        curso.descripcion_larga = "Este curso proporciona los conocimientos necesarios para gestionar proyectos tecnológicos de forma efectiva. Aprenderás a planificar, definir objetivos, asignar recursos, aplicar metodologías ágiles como Scrum y Kanban, y supervisar equipos multidisciplinarios. Se abordan herramientas de seguimiento, evaluación de riesgos, control de calidad y presentación de resultados.<br><br>Al finalizar, estarás preparado para liderar proyectos tecnológicos desde su concepción hasta su ejecución, gestionando tiempos, recursos y equipos con eficiencia.";
        curso.puedeEmpezar = true;
    }
    if (curso.nombre === "Data Science") {
        curso.youtube = "https://www.youtube.com/embed/dH5v_mcvlXM";
        curso.duracion = "6 semanas";
        curso.nivel = "Intermedio";
        curso.descripcion_larga = "Este curso te introduce al análisis de datos y sus aplicaciones prácticas en la toma de decisiones. Aprenderás sobre recolección y limpieza de datos, análisis estadístico, visualización interactiva, técnicas de modelado predictivo y uso de herramientas como Python, pandas, NumPy y matplotlib. También se abordarán principios de comunicación de datos y storytelling.<br><br>Al finalizar, serás capaz de preparar, analizar e interpretar datos para extraer conclusiones útiles y tomar decisiones informadas en distintos contextos profesionales.";
        curso.puedeEmpezar = false;
    }
    if (curso.nombre === "Tecnología en Salud") {
        curso.youtube = "https://www.youtube.com/embed/e6bw9xJtOpo";
        curso.duracion = "5 semanas";
        curso.nivel = "Intermedio";
        curso.descripcion_larga = "Explora el impacto de la tecnología en la industria de la salud y la medicina. Aprende sobre diagnóstico asistido, análisis de datos médicos y cómo la tecnología está revolucionando el cuidado del paciente.";
        curso.puedeEmpezar = true;
    }
    if (curso.nombre === "Tecnología en Finanzas") {
        curso.youtube = "https://www.youtube.com/embed/ifLSLIXF1Mc";
        curso.duracion = "4 semanas";
        curso.nivel = "Intermedio";
        curso.descripcion_larga = "Este curso explora cómo la tecnología está revolucionando el sector financiero. Aprenderás sobre banca digital, fintech, automatización de procesos, análisis de riesgos con modelos predictivos, detección de fraudes con IA, y blockchain como base para nuevas soluciones financieras. Se analizan casos reales de innovación en el sistema bancario.<br><br>Al finalizar, podrás identificar oportunidades de mejora en servicios financieros a través de la tecnología, optimizar procesos y comprender la evolución del ecosistema financiero digital.";
        curso.puedeEmpezar = true;
    }
    if (curso.nombre === "Marketing Digital") {
        curso.youtube = "https://www.youtube.com/embed/nACJLWCmzk8";
        curso.duracion = "4 semanas";
        curso.nivel = "Intermedio";
        curso.descripcion_larga = "Este curso te enseñará cómo utilizar herramientas digitales y tecnología para crear estrategias de marketing efectivas. Aprenderás sobre segmentación de audiencias, SEO, publicidad programática, automatización de marketing, análisis de datos de usuarios, y personalización de campañas. También se cubren redes sociales y plataformas de gestión de contenido.<br><br>Al finalizar, estarás preparado para planificar, ejecutar y medir campañas digitales con un enfoque basado en datos y centrado en el usuario.";
        curso.puedeEmpezar = true;
    }
    if (curso.nombre === "Tecnología en Educación") {
        curso.youtube = "https://www.youtube.com/embed/eakI0I12NgQ";
        curso.duracion = "2 semanas";
        curso.nivel = "Principiante";
        curso.descripcion_larga = "Este curso explora cómo la tecnología puede transformar la enseñanza y el aprendizaje. Aprenderás sobre plataformas educativas digitales, inteligencia artificial aplicada a la personalización del contenido, analítica del aprendizaje, herramientas colaborativas y gamificación. Se analizarán ejemplos reales de innovación educativa.<br><br>Al finalizar, serás capaz de integrar tecnología en entornos educativos para mejorar el rendimiento, la participación y la experiencia del estudiante.";
        curso.puedeEmpezar = true;
    }
    if (curso.nombre === "Tecnología y Sostenibilidad") {
        curso.youtube = "https://www.youtube.com/embed/1yx2mlkgywE";
        curso.duracion = "3 semanas";
        curso.nivel = "Intermedio";
        curso.descripcion_larga = "Este curso está orientado a aplicar tecnología para resolver desafíos ambientales y fomentar la sostenibilidad. Aprenderás sobre monitoreo ambiental mediante sensores, uso de IA en eficiencia energética, análisis de datos para sostenibilidad, agricultura de precisión y energías limpias. También se presentarán proyectos reales con impacto positivo.<br><br>Al finalizar, estarás preparado para diseñar iniciativas tecnológicas orientadas a la conservación del medio ambiente y la gestión responsable de recursos.";
        curso.puedeEmpezar = true;
    }
    if (curso.nombre === "Fundamentos de IA") {
        curso.youtube = "https://www.youtube.com/embed/iNp3YC14pkw";
        curso.duracion = "4 semanas";
        curso.nivel = "Intermedio";
        curso.descripcion_larga = "Este curso proporciona una introducción clara a los conceptos fundamentales de la inteligencia artificial. Aprenderás sobre la historia de la IA, los diferentes tipos (estrecha, general, fuerte), sus componentes clave como datos, modelos y aprendizaje, y sus aplicaciones en múltiples sectores. Se incluyen ejemplos prácticos, simulaciones y ejercicios interactivos.<br><br>Al finalizar, tendrás una visión integral del funcionamiento de la IA y estarás listo para avanzar hacia cursos más técnicos.";
        curso.puedeEmpezar = true;
    }
    if (curso.nombre === "Fundamentos de Machine Learning") {
        curso.youtube = "https://www.youtube.com/embed/xrQ1YH0PnrM";
        curso.duracion = "4 semanas";
        curso.nivel = "Avanzado";
        curso.descripcion_larga = "Este curso te introducirá en el aprendizaje automático, una rama fundamental de la IA. Aprenderás sobre algoritmos de regresión, clasificación, clustering, evaluación de modelos, overfitting, validación cruzada y el uso de bibliotecas como Scikit-learn. También trabajarás con conjuntos de datos reales para aplicar los conceptos.<br><br>Al finalizar, serás capaz de construir modelos básicos de machine learning y entender su funcionamiento para resolver problemas de predicción y análisis de datos.";
    }
    if (curso.nombre === "Fundamentos de Deep Learning") {
        curso.youtube = "https://www.youtube.com/embed/Hz5LfWah6VE";
        curso.duracion = "4 semanas";
        curso.nivel = "Avanzado";
        curso.descripcion_larga = "Este curso te guiará por los fundamentos del aprendizaje profundo. Aprenderás cómo funcionan las redes neuronales artificiales, cómo entrenarlas, y cómo se aplican redes convolucionales para imágenes y redes recurrentes para texto. Se trabajará con frameworks como TensorFlow o PyTorch para implementar modelos.<br><br>Al finalizar, estarás capacitado para construir tus propias redes neuronales y comprender cómo se aplican en tareas complejas como visión y procesamiento de lenguaje.";
        curso.puedeEmpezar = false;
    }
    if (curso.nombre === "Procesamiento de Lenguaje Natural") {
        curso.youtube = "https://www.youtube.com/embed/Tg1MjMIVArc";
        curso.duracion = "4 semanas";
        curso.nivel = "Avanzado";
        curso.descripcion_larga = "Este curso te introduce al procesamiento de lenguaje natural (NLP), una disciplina que permite a las máquinas comprender el lenguaje humano. Aprenderás sobre tokenización, análisis de sentimientos, extracción de entidades, traducción automática y chatbots, utilizando herramientas como NLTK y spaCy.<br><br>Al finalizar, podrás crear modelos básicos que procesan texto y extraen información útil para aplicaciones prácticas como asistentes virtuales o sistemas de recomendación.";
        curso.puedeEmpezar = false;
    }
    if (curso.nombre === "Visión por Computadora") {
        curso.youtube = "https://www.youtube.com/embed/Vc-yodzikf0";
        curso.duracion = "4 semanas";
        curso.nivel = "Avanzado";
        curso.descripcion_larga = "Este curso se centra en la visión por computadora, una rama de la IA enfocada en interpretar imágenes y videos. Aprenderás sobre detección de bordes, reconocimiento facial, segmentación de imágenes, detección de objetos y clasificación visual usando redes convolucionales (CNNs).<br><br>Al finalizar, estarás preparado para desarrollar aplicaciones que analicen visualmente el entorno, con aplicaciones en seguridad, medicina, automóviles y más.";
        curso.puedeEmpezar = false;
    }
});
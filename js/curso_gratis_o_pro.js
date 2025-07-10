import { dataCursos } from './datacursos.js';

export const cursosDetalle = dataCursos.map(curso => ({
    nombre: curso.nombre,
    imagen: curso.imagen,
    profesor: curso.profesor,
    duracion: curso.duracion,
    modulo: curso.modulos,
    pro: curso.pro,
    youtube: "",
    descripcion_larga: "",
    nivel : "",
    puedeEmpezar: !curso.pro, // Si es PRO, no se puede empezar (false), si es gratis, sí (true)
}));

cursosDetalle.forEach(curso => {
    if (curso.nombre === "Introducción a la IA") {
        curso.youtube = "https://www.youtube.com/embed/GX79smagB2Y";
        curso.nivel = "Principiante";
        curso.descripcion_larga = "Este curso Introductorio está diseñado para quienes desean iniciarse en el mundo de la inteligencia artificial y comprender los conceptos clave. Aprenderás sobre los fundamentos de la IA, tipos de algoritmos, aprendizaje supervisado y no supervisado, redes neuronales básicas, procesamiento de lenguaje natural, y aplicaciones prácticas de la IA en el mundo real. El curso incluye ejercicios prácticos, ejemplos interactivos y acceso a foros de apoyo para resolver dudas y compartir experiencias.<br><br>Al finalizar, serás capaz de comprender el funcionamiento general de los sistemas de IA, identificar sus aplicaciones en distintos sectores, y sentar una base sólida para avanzar hacia cursos intermedios o especializados en inteligencia artificial.";
        curso.puedeEmpezar = true;
    }
    if (curso.nombre === "Técnicas avanzadas de IA") {
        curso.youtube = "https://www.youtube.com/embed/w3Ebzo61kh8";
        curso.nivel = "Intermedio";
        curso.descripcion_larga = "Este curso PRO está diseñado para quienes desean profundizar en técnicas avanzadas de inteligencia artificial y desarrollar expertise en arquitecturas complejas. Aprenderás sobre redes neuronales profundas, modelos generativos adversarios (GANs), arquitecturas transformer, técnicas de regularización avanzadas, optimización con algoritmos como Adam y RMSprop, transfer learning, fine-tuning de modelos preentrenados, y estrategias de despliegue en producción. El curso incluye proyectos prácticos con datasets reales, estudios de caso de la industria y acceso a recursos computacionales avanzados.<br><br>Al finalizar, serás capaz de diseñar, entrenar y optimizar modelos de IA de última generación, implementar soluciones escalables en entornos de producción, y liderar proyectos técnicos complejos con aplicaciones en computer vision, NLP y sistemas de recomendación.";
        curso.puedeEmpezar = false;
    }
    if (curso.nombre === "Ética y Sociedad") {
        curso.youtube = "https://www.youtube.com/embed/XxztyJ74uzk";

        curso.nivel = "Principiante";
        curso.descripcion_larga = "Este curso está diseñado para comprender el impacto ético y social de la inteligencia artificial en la sociedad moderna. Aprenderás sobre principios éticos fundamentales en IA, sesgos algorítmicos y discriminación automatizada, privacidad y protección de datos, transparencia y explicabilidad de modelos, responsabilidad algorítmica, justicia distributiva en sistemas automatizados, y marcos regulatorios emergentes. El curso incluye análisis de casos reales controvertidos, debates éticos, simulaciones de dilemas morales y acceso a foros de discusión con expertos en el tema.<br><br>Al finalizar, serás capaz de identificar y evaluar riesgos éticos en proyectos de IA, proponer soluciones justas e inclusivas, aplicar principios de IA responsable en el desarrollo tecnológico, y liderar conversaciones sobre el uso ético de la inteligencia artificial en organizaciones.";
        curso.puedeEmpezar = true;
    }
    if (curso.nombre === "Transformación Digital") {
        curso.youtube = "https://www.youtube.com/embed/6PegO9OMmq0";
        curso.nivel = "Intermedio";
        curso.descripcion_larga = "Este curso te introduce a los procesos de transformación digital que están revolucionando empresas y sectores enteros. Aprenderás qué es la transformación digital, sus etapas y fases, herramientas clave como la automatización de procesos, inteligencia artificial, computación en la nube, IoT, análisis de datos, y cómo estos cambios afectan la cultura organizacional, los modelos de negocio y la experiencia del cliente. Se presentan casos reales de adopción tecnológica en empresas tradicionales y digitales.<br><br>Al finalizar, comprenderás cómo liderar procesos de cambio digital en organizaciones, reconocer oportunidades de innovación tecnológica, implementar estrategias de digitalización efectivas y adoptar nuevas tecnologías para mantener la competitividad en un entorno empresarial en constante evolución.";
        curso.puedeEmpezar = true;
    }
    if (curso.nombre === "Fundamentos para Principiantes") {
        curso.youtube = "https://www.youtube.com/embed/GqwKoXe-XTY";
        curso.nivel = "Principiante";
        curso.descripcion_larga = "Este curso está diseñado para quienes se inician en el mundo de la tecnología y la inteligencia artificial sin necesidad de conocimientos previos. Aprenderás los conceptos clave de datos, algoritmos, inteligencia artificial, internet, software, hardware, computación en la nube, y cómo la tecnología influye en nuestra vida diaria. También explorarás herramientas básicas como hojas de cálculo, plataformas de programación visual, entornos interactivos simples y aplicaciones de uso cotidiano.<br><br>Al finalizar, tendrás una comprensión clara de cómo funciona la tecnología en la vida cotidiana, conocerás terminología técnica básica, y habrás desarrollado una base sólida para continuar hacia cursos más técnicos o especializados en áreas específicas de la tecnología.";
        curso.puedeEmpezar = true;
    }
    if (curso.nombre === "Gestión de Proyectos Tecnológicos") {
        curso.youtube = "https://www.youtube.com/embed/MlyrriEzx3o";
        curso.nivel = "Intermedio";
        curso.descripcion_larga = "Este curso proporciona los conocimientos necesarios para gestionar proyectos tecnológicos de forma efectiva y profesional. Aprenderás a planificar proyectos desde cero, definir objetivos SMART, asignar recursos humanos y técnicos, aplicar metodologías ágiles como Scrum, Kanban y DevOps, supervisar equipos multidisciplinarios, gestionar stakeholders, y utilizar herramientas de seguimiento como Jira, Trello y Microsoft Project. Se abordan evaluación de riesgos, control de calidad, presupuestos y presentación de resultados.<br><br>Al finalizar, estarás preparado para liderar proyectos tecnológicos complejos desde su concepción hasta su implementación exitosa, gestionando tiempos, recursos y equipos con máxima eficiencia mientras aseguras la calidad y satisfacción del cliente.";
        curso.puedeEmpezar = true;
    }
    if (curso.nombre === "Data Science") {
        curso.youtube = "https://www.youtube.com/embed/dH5v_mcvlXM";
        curso.nivel = "Intermedio";
        curso.descripcion_larga = "Este curso te introduce al análisis de datos y sus aplicaciones prácticas en la toma de decisiones empresariales y científicas. Aprenderás sobre recolección y limpieza de datos, análisis estadístico descriptivo e inferencial, visualización interactiva con herramientas como Tableau y Power BI, técnicas de modelado predictivo, minería de datos, big data, y el uso de herramientas como Python, R, pandas, NumPy, matplotlib y seaborn. También se abordarán principios de comunicación de datos, storytelling con datos y ética en el análisis.<br><br>Al finalizar, serás capaz de preparar, analizar e interpretar conjuntos de datos complejos para extraer conclusiones útiles, crear visualizaciones impactantes, desarrollar modelos predictivos y tomar decisiones informadas basadas en evidencia en diversos contextos profesionales.";
        curso.puedeEmpezar = false;
    }
    if (curso.nombre === "Tecnología en Salud") {
        curso.youtube = "https://www.youtube.com/embed/e6bw9xJtOpo";
        curso.nivel = "Intermedio";
        curso.descripcion_larga = "Este curso explora cómo la tecnología está transformando el sector sanitario y mejorando la calidad de vida de los pacientes. Aprenderás sobre sistemas de diagnóstico asistido por IA, análisis de imágenes médicas, telemedicina, expedientes electrónicos, monitoreo remoto de pacientes, y el uso de big data en investigación médica. También se abordan aspectos éticos, regulatorios y de privacidad en la implementación de soluciones tecnológicas en salud.<br><br>Al finalizar, serás capaz de identificar oportunidades de mejora en procesos sanitarios mediante tecnología, comprender los desafíos del sector salud digital y proponer soluciones innovadoras que beneficien tanto a profesionales como a pacientes.";
        curso.puedeEmpezar = true;
    }
    if (curso.nombre === "Tecnología en Finanzas") {
        curso.youtube = "https://www.youtube.com/embed/ifLSLIXF1Mc";
        curso.nivel = "Intermedio";
        curso.descripcion_larga = "Descubre cómo la tecnología está revolucionando el sector financiero y transformando la manera en que manejamos el dinero. Aprenderás sobre fintech, blockchain, criptomonedas, pagos digitales, robo-advisors, análisis de riesgo crediticio, detección de fraudes y el impacto de la inteligencia artificial en servicios bancarios. También explorarás aspectos regulatorios, de seguridad y tendencias futuras en el ecosistema financiero digital.<br><br>Al finalizar, podrás comprender y evaluar soluciones tecnológicas financieras, identificar oportunidades de innovación en servicios bancarios y desarrollar estrategias para la implementación de tecnologías emergentes en el sector financiero.";
        curso.puedeEmpezar = true;
    }
    if (curso.nombre === "Marketing Digital") {
        curso.youtube = "https://www.youtube.com/embed/nACJLWCmzk8";
        curso.nivel = "Intermedio";
        curso.descripcion_larga = "Este curso te enseñará cómo utilizar herramientas digitales y tecnología para crear estrategias de marketing efectivas. Aprenderás sobre segmentación de audiencias, SEO, publicidad programática, automatización de marketing, análisis de datos de usuarios, personalización de campañas, y el uso de inteligencia artificial en marketing. También se cubren redes sociales, plataformas de gestión de contenido, email marketing, marketing de contenidos y analítica web.<br><br>Al finalizar, estarás preparado para planificar, ejecutar y medir campañas digitales con un enfoque basado en datos, optimizar conversiones y desarrollar estrategias de marketing omnicanal que generen resultados medibles.";
        curso.puedeEmpezar = true;
    }
    if (curso.nombre === "Tecnología en Educación") {
        curso.youtube = "https://www.youtube.com/embed/eakI0I12NgQ";
        curso.nivel = "Principiante";
        curso.descripcion_larga = "Este curso explora cómo la tecnología puede transformar la enseñanza y el aprendizaje en diversos contextos educativos. Aprenderás sobre plataformas educativas digitales, inteligencia artificial aplicada a la personalización del contenido, analítica del aprendizaje, herramientas colaborativas, gamificación, realidad virtual y aumentada en educación. También se abordan metodologías pedagógicas innovadoras y evaluación digital.<br><br>Al finalizar, serás capaz de integrar tecnología en entornos educativos para mejorar el rendimiento académico, la participación estudiantil y la experiencia de aprendizaje, diseñando soluciones educativas más efectivas y personalizadas.";
        curso.puedeEmpezar = true;
    }
    if (curso.nombre === "Tecnología y Sostenibilidad") {
        curso.youtube = "https://www.youtube.com/embed/1yx2mlkgywE";
        curso.nivel = "Intermedio";
        curso.descripcion_larga = "Este curso está orientado a aplicar tecnología para resolver desafíos ambientales y fomentar la sostenibilidad global. Aprenderás sobre monitoreo ambiental mediante sensores IoT, uso de IA en eficiencia energética, análisis de datos para sostenibilidad, agricultura de precisión, energías renovables, economía circular y tecnologías verdes. También se presentarán proyectos reales con impacto positivo en el medio ambiente.<br><br>Al finalizar, estarás preparado para diseñar y implementar iniciativas tecnológicas orientadas a la conservación del medio ambiente, la gestión responsable de recursos y el desarrollo de soluciones sostenibles que beneficien tanto a la sociedad como al planeta.";
        curso.puedeEmpezar = true;
    }
    if (curso.nombre === "Fundamentos de IA") {
        curso.youtube = "https://www.youtube.com/embed/iNp3YC14pkw";
        curso.nivel = "Intermedio";
        curso.descripcion_larga = "Este curso proporciona una introducción completa a los conceptos fundamentales de la inteligencia artificial. Aprenderás sobre la historia de la IA, los diferentes tipos (estrecha, general, superinteligencia), sus componentes clave como datos, algoritmos y modelos, paradigmas de aprendizaje (supervisado, no supervisado, por refuerzo), y sus aplicaciones en múltiples sectores. Se incluyen ejemplos prácticos, simulaciones interactivas y casos de uso reales.<br><br>Al finalizar, tendrás una visión integral del funcionamiento de la IA, comprenderás sus posibilidades y limitaciones, y estarás preparado para avanzar hacia cursos más técnicos o especializados en áreas específicas de la inteligencia artificial.";
        curso.puedeEmpezar = true;
    }
    if (curso.nombre === "Fundamentos de Machine Learning") {
        curso.youtube = "https://www.youtube.com/embed/xrQ1YH0PnrM";
        curso.nivel = "Avanzado";
        curso.descripcion_larga = "Este curso te introducirá en el aprendizaje automático, una rama fundamental de la inteligencia artificial. Aprenderás sobre algoritmos de regresión, clasificación, clustering, árboles de decisión, evaluación de modelos, técnicas de validación, overfitting y underfitting, preprocesamiento de datos, y el uso de bibliotecas como Scikit-learn y pandas. También trabajarás con conjuntos de datos reales para aplicar los conceptos aprendidos.<br><br>Al finalizar, serás capaz de construir y evaluar modelos de machine learning, entender su funcionamiento interno y aplicarlos para resolver problemas complejos de predicción, clasificación y análisis de datos en diversos contextos profesionales.";
        curso.puedeEmpezar = false;
    }
    if (curso.nombre === "Fundamentos de Deep Learning") {
        curso.youtube = "https://www.youtube.com/embed/Hz5LfWah6VE";
        curso.nivel = "Avanzado";
        curso.descripcion_larga = "Este curso te guiará por los fundamentos del aprendizaje profundo y las redes neuronales artificiales. Aprenderás cómo funcionan las redes neuronales, algoritmos de entrenamiento como backpropagation, arquitecturas específicas como redes convolucionales (CNN) para imágenes y redes recurrentes (RNN/LSTM) para secuencias temporales. Se trabajará con frameworks como TensorFlow o PyTorch para implementar y entrenar modelos complejos.<br><br>Al finalizar, estarás capacitado para construir y entrenar tus propias redes neuronales profundas, comprender su funcionamiento interno y aplicarlas en tareas complejas como visión por computadora, procesamiento de lenguaje natural y análisis de series temporales.";
        curso.puedeEmpezar = false;
    }
    if (curso.nombre === "Procesamiento de Lenguaje Natural") {
        curso.youtube = "https://www.youtube.com/embed/Tg1MjMIVArc";
        curso.nivel = "Avanzado";
        curso.descripcion_larga = "Este curso te introduce al procesamiento de lenguaje natural (NLP), una disciplina que permite a las máquinas comprender y generar lenguaje humano. Aprenderás sobre tokenización, análisis sintáctico y semántico, análisis de sentimientos, extracción de entidades nombradas, traducción automática, chatbots, y modelos de lenguaje avanzados como transformers. Utilizarás herramientas como NLTK, spaCy y Hugging Face para implementar soluciones prácticas.<br><br>Al finalizar, podrás crear sistemas que procesan y comprenden texto, desarrollar aplicaciones como asistentes virtuales, sistemas de recomendación basados en texto, y analizar grandes volúmenes de información textual para extraer insights valiosos.";
        curso.puedeEmpezar = false;
    }
    if (curso.nombre === "Visión por Computadora") {
        curso.youtube = "https://www.youtube.com/embed/Vc-yodzikf0";
        curso.nivel = "Avanzado";
        curso.descripcion_larga = "Este curso se centra en la visión por computadora, una rama de la IA enfocada en interpretar y analizar imágenes y videos. Aprenderás sobre procesamiento de imágenes, detección de bordes y contornos, reconocimiento facial, segmentación de imágenes, detección y clasificación de objetos, seguimiento de movimiento, y el uso de redes convolucionales (CNNs) para tareas visuales complejas. También trabajarás con OpenCV y frameworks de deep learning.<br><br>Al finalizar, estarás preparado para desarrollar aplicaciones que analicen visualmente el entorno, con aplicaciones prácticas en seguridad, medicina, vehículos autónomos, realidad aumentada y muchos otros campos tecnológicos emergentes.";
        curso.puedeEmpezar = false;
    }
});
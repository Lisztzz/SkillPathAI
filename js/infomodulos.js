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
        curso.modulosDetalle[0].resumen = `En este primer módulo, exploraremos los orígenes y los principios fundamentales que dieron forma a la inteligencia artificial como disciplina. Desde las ideas filosóficas iniciales sobre el pensamiento mecánico hasta los avances más importantes del siglo XX, los estudiantes obtendrán una visión amplia del desarrollo histórico de la IA.<br><br>¿Qué aprenderás?<br><br>• Cómo surgió la idea de una "máquina inteligente".<br>• Los hitos clave: desde Alan Turing hasta el auge del aprendizaje automático.<br>• Conceptos básicos como agentes inteligentes, razonamiento, búsqueda, representación del conocimiento y lógica.<br>• Las primeras aproximaciones simbólicas (IA clásica) y la transición hacia métodos estadísticos.activa de la IA.<br><br>Objetivo del módulo:<br>Comprender las raíces conceptuales y técnicas de la inteligencia artificial, y reconocer los enfoques que han guiado su evolución.`;
        
        if (curso.modulosDetalle[1]) {
            curso.modulosDetalle[1].titulo = "Aplicaciones actuales de la IA";
            curso.modulosDetalle[1].youtube = "https://www.youtube.com/embed/P2zdHfVj78Y";
            curso.modulosDetalle[1].resumen = `Este módulo se centra en mostrar cómo la inteligencia artificial se aplica hoy en día en una variedad de campos. Revisaremos ejemplos prácticos y casos de uso en la industria, la salud, el transporte, la educación y más. También veremos brevemente cómo se entrenan y utilizan los modelos detrás de estas soluciones.<br><br>¿Qué aprenderás?<br><br>• Qué tecnologías están impulsadas por IA en la actualidad.<br>• Casos reales de uso: desde asistentes virtuales hasta IA en la medicina.<br>• Diferencias entre IA débil y fuerte en contextos prácticos.<br>• La importancia del aprendizaje automático, redes neuronales y NLP en estas aplicaciones.<br><br>Objetivo del módulo:<br>Conocer las principales aplicaciones de la IA y comprender cómo se integran en soluciones tecnológicas modernas que afectan a personas y organizaciones.`;
        }
        
        if (curso.modulosDetalle[2]) {
            curso.modulosDetalle[2].titulo = "Desafíos éticos y el futuro de la IA";
            curso.modulosDetalle[2].youtube = "https://www.youtube.com/embed/VqFqWIqOB1g";
            curso.modulosDetalle[2].resumen = `Este módulo te invita a reflexionar sobre los efectos sociales, éticos y económicos del uso de la inteligencia artificial. Se analizarán temas como el sesgo en los algoritmos, la privacidad, la toma de decisiones automatizada y el desplazamiento laboral. También se discutirán los marcos regulatorios emergentes y las posibilidades futuras de la IA general.<br><br>¿Qué aprenderás?<br><br>• Cuáles son los principales riesgos sociales y éticos asociados a la IA.<br>• Qué significa que un algoritmo tenga sesgo y por qué ocurre.<br>• Cómo la automatización impacta el empleo y la economía.<br>• Cuáles son los debates actuales sobre el futuro de la inteligencia artificial y su regulación.<br><br>Objetivo del módulo:<br>Desarrollar una mirada crítica y responsable sobre el desarrollo y uso de la inteligencia artificial, considerando sus implicancias sociales, éticas y legales.`;
        }
    }
    
    if (curso.nombre === "Técnicas avanzadas de IA") {
        curso.modulosDetalle[0].titulo = "Aprendizaje profundo y redes neuronales";
        curso.modulosDetalle[0].youtube = "https://www.youtube.com/embed/aircAruvnKk";
        curso.modulosDetalle[0].resumen = `Este módulo se enfoca en los fundamentos del aprendizaje profundo (deep learning), una de las áreas más potentes y utilizadas actualmente en inteligencia artificial. Aprenderás cómo funcionan las redes neuronales artificiales, cómo se estructuran en capas, y cómo se entrenan utilizando grandes volúmenes de datos. Además, comprenderás conceptos como el perceptrón multicapa, las funciones de activación, y la retropropagación.<br><br>¿Qué aprenderás?<br><br>• Cómo se construyen y entrenan las redes neuronales profundas.<br>• La lógica detrás del aprendizaje jerárquico de representaciones.<br>• Qué papel juegan los hiperparámetros en el entrenamiento.<br>• Ventajas y limitaciones del aprendizaje profundo frente a otros enfoques.<br><br>Objetivo del módulo:<br>Dominar los principios fundamentales del deep learning y las redes neuronales, y entender cómo se utilizan para resolver problemas complejos de clasificación, regresión y reconocimiento.`;
        
        if (curso.modulosDetalle[1]) {
            curso.modulosDetalle[1].titulo = "Modelos generativos y transferencia de estilo";
            curso.modulosDetalle[1].youtube = "https://www.youtube.com/embed/bFeltWvzZpQ";
            curso.modulosDetalle[1].resumen = `En este módulo explorarás los modelos generativos, una de las ramas más creativas e innovadoras de la IA. Entenderás cómo funcionan las GANs (Generative Adversarial Networks) y los autoencoders, y cómo se utilizan para generar imágenes, texto y música. Además, aprenderás sobre la técnica de transferencia de estilo, que permite combinar el contenido de una imagen con el estilo artístico de otra.<br><br>¿Qué aprenderás?<br><br>• Qué son los modelos generativos y cómo generan contenido nuevo.<br>• Cómo se entrenan y enfrentan entre sí las redes generativas adversarias (GANs).<br>• En qué consiste la transferencia de estilo y cómo aplicarla.<br>• Casos de uso de IA creativa en arte, moda, entretenimiento y diseño.<br><br>Objetivo del módulo:<br>Comprender el funcionamiento y las aplicaciones de los modelos generativos, así como su impacto en áreas creativas y en la generación de contenido sintético.`;
        }
        
        if (curso.modulosDetalle[2]) {
            curso.modulosDetalle[2].titulo = "Implementación de modelos en producción";
            curso.modulosDetalle[2].youtube = "https://www.youtube.com/embed/0yrkJJv--Tk";
            curso.modulosDetalle[2].resumen = `Este módulo se centra en la última etapa del ciclo de vida de un proyecto de IA: llevar un modelo desde el laboratorio hasta su uso en el mundo real. Revisarás los desafíos técnicos y prácticos de poner modelos en producción, incluyendo la arquitectura de despliegue, la integración con servicios y APIs, la monitorización y el mantenimiento continuo. También aprenderás sobre prácticas como el versionado de modelos y la detección de drift.<br><br>¿Qué aprenderás?<br><br>• Cómo empaquetar y desplegar modelos de IA en entornos reales.<br>• Herramientas y servicios populares para el despliegue de modelos (como Docker, Flask o servicios cloud).<br>• Importancia del monitoreo y la mejora continua tras el despliegue.<br>• Buenas prácticas para el mantenimiento y escalabilidad de soluciones de IA.<br><br>Objetivo del módulo:<br>Aprender a llevar modelos de IA desde el desarrollo hasta la producción, asegurando rendimiento, estabilidad y valor para el usuario final.`;
        }
    }
    
    if (curso.nombre === "Ética y Sociedad") {
        curso.modulosDetalle[0].titulo = "Principios éticos de la inteligencia artificial";
        curso.modulosDetalle[0].youtube = "https://www.youtube.com/embed/se9Hi0tY9bU";
        curso.modulosDetalle[0].resumen = `En este primer módulo exploraremos los valores y principios éticos fundamentales que deben guiar el diseño, desarrollo y aplicación de tecnologías basadas en inteligencia artificial. Analizaremos marcos éticos ampliamente reconocidos como los principios de transparencia, justicia, responsabilidad, privacidad y no maleficencia. También discutiremos cómo estos principios pueden entrar en conflicto y qué enfoques se han propuesto para resolverlos.<br><br>¿Qué aprenderás?<br><br>• Cuáles son los principales principios éticos aplicables a la IA.<br>• Qué dilemas pueden surgir al implementar estos principios en sistemas reales.<br>• Cómo las instituciones y organismos internacionales definen y promueven la IA ética.<br>• Ejemplos de decisiones tecnológicas que requieren juicios éticos.<br><br>Objetivo del módulo:<br>Fomentar una comprensión crítica de los principios éticos asociados a la IA, y reflexionar sobre su aplicación práctica en el desarrollo y uso de tecnologías inteligentes.`;
        
        if (curso.modulosDetalle[1]) {
            curso.modulosDetalle[1].titulo = "Sesgos algorítmicos e impacto social";
            curso.modulosDetalle[1].youtube = "https://www.youtube.com/embed/R5glR1bY0pY";
            curso.modulosDetalle[1].resumen = `Este módulo examina cómo los sistemas de IA pueden heredar, amplificar o introducir sesgos que afectan a distintos grupos sociales. Revisaremos casos reales donde algoritmos han discriminado a personas por género, raza o condición socioeconómica. También exploraremos cómo los datos, los modelos y las decisiones de diseño influyen en estos sesgos, y qué estrategias existen para mitigarlos.<br><br>¿Qué aprenderás?<br><br>• Cómo se generan y reproducen los sesgos algorítmicos.<br>• Impactos sociales de la IA sesgada en áreas como justicia, finanzas, salud o educación.<br>• Herramientas y técnicas para detectar y mitigar el sesgo.<br>• Importancia de la diversidad de datos y equipos humanos en el desarrollo de IA justa.<br><br>Objetivo del módulo:<br>Identificar los mecanismos por los cuales los sistemas de IA pueden producir desigualdades, y promover prácticas de desarrollo inclusivas y responsables.`;
        }
        
        if (curso.modulosDetalle[2]) {
            curso.modulosDetalle[2].titulo = "Regulación y gobernanza de la IA";
            curso.modulosDetalle[2].youtube = "https://www.youtube.com/embed/UhYL6xI9lQE";
            curso.modulosDetalle[2].resumen = `En este módulo final abordaremos los marcos legales y regulatorios emergentes que buscan supervisar y orientar el desarrollo de la inteligencia artificial. Analizaremos iniciativas como la propuesta de Ley de IA de la Unión Europea, las directrices de la UNESCO y otras recomendaciones nacionales e internacionales. Además, discutiremos la importancia de la gobernanza democrática, la participación pública y la transparencia institucional en la supervisión del uso de IA.<br><br>¿Qué aprenderás?<br><br>• Cuáles son los principales esfuerzos internacionales por regular la IA.<br>• Qué desafíos enfrentan los gobiernos para equilibrar innovación y protección de derechos.<br>• Qué rol deben jugar empresas, gobiernos y sociedad civil en la gobernanza de IA.<br>• Cómo diseñar mecanismos éticos y legales que se adapten a tecnologías emergentes.<br><br>Objetivo del módulo:<br>Comprender el panorama regulatorio de la IA y su importancia en la protección de derechos humanos, el control del poder tecnológico y la promoción de un desarrollo responsable.`;
        }
    }
    if (curso.nombre === "Transformación Digital") {
        curso.modulosDetalle[0].titulo = "Qué es la transformación digital";
        curso.modulosDetalle[0].youtube = "https://www.youtube.com/embed/FjAq1xjBv_4";
        curso.modulosDetalle[0].resumen = `Este módulo introduce el concepto de transformación digital como el proceso mediante el cual las organizaciones adoptan tecnologías digitales para rediseñar sus procesos, modelos de negocio y formas de crear valor. Se analizan las diferencias entre digitalización, digital y transformación digital, y se examinan los factores que impulsan este cambio en diferentes industrias.<br><br>¿Qué aprenderás?<br><br>• Qué significa transformación digital y cómo se diferencia de otros conceptos tecnológicos.<br>• Cómo ha evolucionado el concepto en las últimas décadas.<br>• Por qué la transformación digital es una necesidad estratégica para empresas modernas.<br>• Ejemplos de organizaciones que han transformado su modelo operativo gracias a la tecnología.<br><br>Objetivo del módulo:<br>Comprender el alcance y significado de la transformación digital en contextos organizacionales y sociales, y reconocer su impacto en la competitividad y sostenibilidad de las empresas.`;
        if( curso.modulosDetalle[1]) {
            curso.modulosDetalle[1].titulo = "Tecnología como motor de cambio";
            curso.modulosDetalle[1].youtube = "https://www.youtube.com/embed/xPg7KbF633E";
            curso.modulosDetalle[1].resumen = `En este módulo exploraremos cómo diversas tecnologías digitales impulsan cambios profundos en los procesos organizacionales, la relación con los clientes y la creación de nuevos productos o servicios. Se revisan herramientas como la inteligencia artificial, el internet de las cosas (IoT), la nube, el big data y la automatización, y cómo estas generan ventajas competitivas cuando son bien implementadas.<br><br>¿Qué aprenderás?<br><br>• Qué tecnologías están en el corazón de la transformación digital.<br>• Cómo estas herramientas habilitan nuevos modelos de negocio y eficiencia operativa.<br>• Casos reales de implementación de tecnología para transformar industrias tradicionales.<br>• El rol de la arquitectura tecnológica y la integración de sistemas en el cambio organizacional.<br><br>Objetivo del módulo:<br>Identificar las tecnologías clave que habilitan la transformación digital y comprender cómo aplicarlas estratégicamente para generar valor en distintos sectores.`;
        }
        if (curso.modulosDetalle[2]) {
            curso.modulosDetalle[2].titulo = "Liderazgo y adaptación al cambio";
            curso.modulosDetalle[2].youtube = "https://www.youtube.com/embed/dMxF9dg53ss";
            curso.modulosDetalle[2].resumen = `La transformación digital no es solo un reto tecnológico, sino principalmente humano. Este módulo analiza el papel del liderazgo en la gestión del cambio digital, abordando temas como la cultura organizacional, la comunicación, la capacitación continua y la gestión de la resistencia al cambio. También se exploran competencias clave que deben desarrollar líderes y equipos para adaptarse con éxito a entornos cambiantes.<br><br>¿Qué aprenderás?<br><br>• Por qué el liderazgo es crucial en procesos de transformación digital.<br>• Cómo gestionar la cultura organizacional para favorecer la innovación.<br>• Estrategias para promover la adopción tecnológica dentro de los equipos.<br>• Habilidades necesarias para liderar en la era digital (resiliencia, mentalidad ágil, aprendizaje continuo).<br><br>Objetivo del módulo:<br>Desarrollar una visión integral del liderazgo digital y de la gestión del cambio como factores determinantes del éxito en procesos de transformación digital.`;
        }
    }

    
    if (curso.nombre === "Fundamentos de Machine Learning") {
        curso.modulosDetalle[0].titulo = "Introducción al aprendizaje automático";
        curso.modulosDetalle[0].youtube = "https://www.youtube.com/embed/CsHvAPWbt-Q";
        curso.modulosDetalle[0].resumen = `Este módulo proporciona una visión general del aprendizaje automático (Machine Learning), sus fundamentos y su papel dentro de la inteligencia artificial. Aprenderás qué es el aprendizaje automático, los tipos principales (supervisado, no supervisado y por refuerzo), y cómo se utiliza en aplicaciones reales como predicción, reconocimiento de patrones o recomendaciones.<br><br>¿Qué aprenderás?<br><br>• Qué es el aprendizaje automático y cómo funciona.<br>• Diferencias entre aprendizaje supervisado, no supervisado y por refuerzo.<br>• Casos de uso comunes en distintos sectores (salud, finanzas, comercio, etc.).<br>• Flujo básico de trabajo de un proyecto de Machine Learning.<br><br>Objetivo del módulo:<br>Familiarizarte con los principios del aprendizaje automático y entender en qué contextos se aplica y por qué es importante.`;
        
        if (curso.modulosDetalle[1]) {
            curso.modulosDetalle[1].titulo = "Algoritmos clásicos y cómo aplicarlos";
            curso.modulosDetalle[1].youtube = "https://www.youtube.com/embed/6mSx_KJxcHI";
            curso.modulosDetalle[1].resumen = `Este módulo introduce los algoritmos más representativos del aprendizaje automático, explicando su funcionamiento, cuándo usarlos y cómo implementarlos. Estudiarás modelos como regresión lineal y logística, árboles de decisión, k-NN, SVM y clustering (como k-means), con ejemplos aplicados.<br><br>¿Qué aprenderás?<br><br>• Cómo funciona cada algoritmo clásico y en qué problemas se utilizan.<br>• Ventajas, desventajas y requisitos de cada modelo.<br>• Cómo preparar los datos y entrenar modelos básicos en Python.<br>• Introducción al overfitting y underfitting.<br><br>Objetivo del módulo:<br>Aprender a seleccionar, aplicar y entender los algoritmos más importantes de Machine Learning en problemas reales.`;
        }
        
        if (curso.modulosDetalle[2]) {
            curso.modulosDetalle[2].titulo = "Evaluación de modelos y ajuste de parámetros";
            curso.modulosDetalle[2].youtube = "https://www.youtube.com/embed/0V2PRq0w94Y";
            curso.modulosDetalle[2].resumen = `Este módulo se centra en cómo evaluar el rendimiento de un modelo de aprendizaje automático, interpretar los resultados y mejorarlo. Aprenderás a utilizar métricas como precisión, recall, F1-score y curvas ROC. También explorarás técnicas de validación cruzada y ajuste de hiperparámetros para optimizar los modelos.<br><br>¿Qué aprenderás?<br><br>• Métricas de evaluación según el tipo de problema (clasificación, regresión).<br>• Cómo interpretar una matriz de confusión.<br>• Técnicas de validación cruzada y división de datos (train/test/validation).<br>• Cómo ajustar parámetros y mejorar la capacidad de generalización.<br><br>Objetivo del módulo:<br>Capacitarte para medir correctamente el rendimiento de tus modelos, identificar fallos y aplicar mejoras significativas.`;
        }
    }
    
    if (curso.nombre === "Fundamentos de Deep Learning") {
        curso.modulosDetalle[0].titulo = "Redes neuronales artificiales y perceptrón multicapa";
        curso.modulosDetalle[0].youtube = "https://www.youtube.com/embed/GxwGeN2a7V8";
        curso.modulosDetalle[0].resumen = `Este módulo introduce los conceptos esenciales de las redes neuronales artificiales (ANN). Comienza con la estructura básica de una neurona artificial, el funcionamiento del perceptrón simple, y luego se avanza hacia arquitecturas más complejas como el perceptrón multicapa (MLP), utilizando funciones de activación no lineales y algoritmos de entrenamiento como el descenso de gradiente y retropropagación (backpropagation).<br><br>¿Qué aprenderás?<br><br>• Cómo funcionan las neuronas artificiales y cómo se combinan para formar redes.<br>• La arquitectura y lógica detrás del perceptrón multicapa (MLP).<br>• El papel de funciones de activación como ReLU, sigmoid y tanh.<br>• Cómo entrenar redes neuronales utilizando backpropagation y optimización.<br><br>Objetivo del módulo:<br>Adquirir una comprensión teórica y práctica del funcionamiento básico de una red neuronal y estar listo para construir modelos simples de deep learning.`;
        
        if (curso.modulosDetalle[1]) {
            curso.modulosDetalle[1].titulo = "Redes convolucionales (CNN) y visión artificial";
            curso.modulosDetalle[1].youtube = "https://www.youtube.com/embed/vT1JzLTH4G4";
            curso.modulosDetalle[1].resumen = `Este módulo se centra en las redes neuronales convolucionales (CNN), que han revolucionado la visión por computadora. Aprenderás cómo se utilizan capas convolucionales, de pooling y de activación para extraer características de imágenes y clasificarlas con alta precisión. Se exploran casos prácticos como reconocimiento facial, detección de objetos y clasificación de imágenes.<br><br>¿Qué aprenderás?<br><br>• Qué es una convolución y cómo se aplica en procesamiento de imágenes.<br>• Estructura de una CNN: capas convolucionales, de agrupamiento y fully connected.<br>• Aplicaciones prácticas: clasificación de imágenes (MNIST, CIFAR, etc.).<br>• Visualización de filtros y mapas de activación.<br><br>Objetivo del módulo:<br>Comprender cómo las CNN procesan imágenes y ser capaz de implementar modelos básicos de clasificación visual.`;
        }
        
        if (curso.modulosDetalle[2]) {
            curso.modulosDetalle[2].titulo = "Técnicas de regularización y mejora de modelos";
            curso.modulosDetalle[2].youtube = "https://www.youtube.com/embed/idVm0DMaDR4";
            curso.modulosDetalle[2].resumen = `En este módulo aprenderás cómo evitar el sobreajuste (overfitting) y mejorar el rendimiento de las redes profundas mediante técnicas de regularización como dropout, early stopping, normalización de batch (batch normalization), y ajuste de hiperparámetros. También se cubre cómo evaluar el rendimiento de los modelos y estrategias para hacerlos más robustos.<br><br>¿Qué aprenderás?<br><br>• Qué es el overfitting y cómo identificarlo.<br>• Técnicas para regularizar y mejorar generalización del modelo.<br>• Cómo afinar hiperparámetros como tasa de aprendizaje, número de capas y tamaño del batch.<br>• Introducción al fine-tuning y transferencia de aprendizaje.<br><br>Objetivo del módulo:<br>Capacitarte para entrenar modelos de deep learning que sean más precisos, eficientes y capaces de generalizar a nuevos datos.`;
        }
    }
    
    if (curso.nombre === "Data Science") {
        curso.modulosDetalle[0].titulo = "Introducción al análisis de datos";
        curso.modulosDetalle[0].youtube = "https://www.youtube.com/embed/oQmxQh92Nh8";
        curso.modulosDetalle[0].resumen = `En este módulo conocerás el papel fundamental que juegan los datos en la toma de decisiones modernas. Aprenderás a identificar los tipos de datos, entender su ciclo de vida y descubrir cómo convertir datos crudos en información útil. También explorarás las etapas clave del análisis de datos: recopilación, limpieza, transformación, análisis y presentación.<br><br>¿Qué aprenderás?<br><br>• Qué es el análisis de datos y por qué es importante en distintas industrias.<br>• Tipos de datos: estructurados, no estructurados, categóricos, numéricos, etc.<br>• Flujo de trabajo de un proyecto de análisis de datos.<br>• Herramientas comunes para trabajar con datos (Excel, Python, R, SQL).<br><br>Objetivo del módulo:<br>Adquirir una visión general del proceso de análisis de datos y comprender su valor en la toma de decisiones basada en evidencia.`;
        
        if (curso.modulosDetalle[1]) {
            curso.modulosDetalle[1].titulo = "Estadística y visualización de datos";
            curso.modulosDetalle[1].youtube = "https://www.youtube.com/embed/a9UrKTVEeZA";
            curso.modulosDetalle[1].resumen = `Este módulo se enfoca en los fundamentos estadísticos necesarios para analizar e interpretar datos correctamente. Aprenderás medidas de tendencia central, dispersión, correlaciones, distribución de variables, e inferencias básicas. También explorarás técnicas y herramientas para representar gráficamente los datos, facilitando su comunicación de forma clara y efectiva.<br><br>¿Qué aprenderás?<br><br>• Conceptos básicos de estadística descriptiva e inferencial.<br>• Cómo identificar patrones, anomalías y relaciones entre variables.<br>• Uso de herramientas como Python (matplotlib, seaborn) o Power BI para crear gráficos y dashboards.<br>• Mejores prácticas de visualización: claridad, relevancia, precisión.<br><br>Objetivo del módulo:<br>Desarrollar la capacidad de comprender y comunicar los datos mediante análisis estadístico y representaciones visuales efectivas.`;
        }
        
        if (curso.modulosDetalle[2]) {
            curso.modulosDetalle[2].titulo = "Introducción al aprendizaje automático";
            curso.modulosDetalle[2].youtube = "https://www.youtube.com/embed/tmB5JIX3Lxk";
            curso.modulosDetalle[2].resumen = `Este módulo ofrece una introducción al aprendizaje automático (machine learning), un campo clave de la ciencia de datos que permite a los sistemas aprender patrones a partir de datos. Verás cómo se clasifican los tipos de aprendizaje (supervisado, no supervisado), los algoritmos más comunes (regresión, árboles de decisión, clustering) y cómo se entrena un modelo para hacer predicciones.<br><br>¿Qué aprenderás?<br><br>• Qué es el aprendizaje automático y cómo se diferencia de la programación tradicional.<br>• Tipos de problemas: clasificación, regresión, segmentación.<br>• Proceso para entrenar, validar y evaluar un modelo.<br>• Herramientas básicas para crear modelos sencillos con scikit-learn o plataformas sin código.<br><br>Objetivo del módulo:<br>Comprender los fundamentos del machine learning y cómo aplicar modelos básicos para resolver problemas reales a partir de datos.`;
        }
    }
    
    if (curso.nombre === "Fundamentos para Principiantes") {
        curso.modulosDetalle[0].titulo = "Introducción a la computación";
        curso.modulosDetalle[0].youtube = "https://www.youtube.com/embed/y2kg3MOk1sY";
        curso.modulosDetalle[0].resumen = `Este módulo te introduce al mundo de la computación desde sus conceptos más básicos. Aprenderás qué es una computadora, cómo funciona internamente y cuáles son sus principales componentes. También descubrirás cómo interactúan el hardware y el software, y cómo estas tecnologías han evolucionado a lo largo del tiempo. Es un punto de partida fundamental para comprender cualquier otra área relacionada con la tecnología.<br><br>¿Qué aprenderás?<br><br>• Qué es una computadora y cómo se estructuran sus partes (procesador, memoria, almacenamiento, etc.).<br>• La diferencia entre hardware y software.<br>• Sistemas operativos y cómo gestionan los recursos de un equipo.<br>• Historia breve de la computación y su evolución.<br><br>Objetivo del módulo:<br>Familiarizarte con los conceptos y elementos esenciales del funcionamiento de una computadora, para que puedas desenvolverte con confianza en un entorno digital.`;
        
        if (curso.modulosDetalle[1]) {
            curso.modulosDetalle[1].titulo = "Pensamiento lógico y programación básica";
            curso.modulosDetalle[1].youtube = "https://www.youtube.com/embed/q6WOsyHQ1nM";
            curso.modulosDetalle[1].resumen = `En este módulo desarrollarás habilidades fundamentales de pensamiento lógico, base del razonamiento computacional y la resolución de problemas. Aprenderás a entender y construir algoritmos simples, a identificar patrones y a organizar instrucciones paso a paso. Además, comenzarás a escribir tus primeras líneas de código con un lenguaje amigable como Python o bloques visuales como Scratch.<br><br>¿Qué aprenderás?<br><br>• Qué es un algoritmo y cómo se construye.<br>• Cómo estructurar soluciones paso a paso usando lógica.<br>• Introducción a conceptos de programación como variables, condicionales, ciclos y funciones.<br>• Uso de pseudocódigo o entornos visuales para empezar a programar.<br><br>Objetivo del módulo:<br>Desarrollar tu capacidad de resolver problemas de forma lógica y dar tus primeros pasos en la programación, entendiendo cómo se comunican las instrucciones a una computadora.`;
        }
        
        if (curso.modulosDetalle[2]) {
            curso.modulosDetalle[2].titulo = "Primeros pasos con IA y datos";
            curso.modulosDetalle[2].youtube = "https://www.youtube.com/embed/Fgz1yV7oj-g";
            curso.modulosDetalle[2].resumen = `Este módulo final introduce los conceptos más sencillos de inteligencia artificial y ciencia de datos de forma accesible. Aprenderás qué significa que una máquina "aprenda" y cómo se utilizan los datos para tomar decisiones automatizadas. También verás ejemplos cotidianos donde la IA ya está presente, como asistentes virtuales, recomendaciones en redes sociales o filtros de spam.<br><br>¿Qué aprenderás?<br><br>• Qué es la inteligencia artificial y cómo difiere de la programación tradicional.<br>• Qué papel juegan los datos en los sistemas inteligentes.<br>• Tipos simples de aprendizaje automático (por ejemplo, clasificación básica).<br>• Ejemplos reales y cercanos del uso de IA en la vida diaria.<br><br>Objetivo del módulo:<br>Brindarte una introducción amigable al mundo de la inteligencia artificial y los datos, despertando tu curiosidad por cómo las máquinas aprenden y procesan información.`;
        }
    }
    
    if (curso.nombre === "Gestión de Proyectos Tecnológicos") {
        curso.modulosDetalle[0].titulo = "Fundamentos de gestión de proyectos";
        curso.modulosDetalle[0].youtube = "https://www.youtube.com/embed/rck3MnC7OXA";
        curso.modulosDetalle[0].resumen = `Este módulo introduce los principios esenciales de la gestión de proyectos, centrándose en su aplicación en contextos tecnológicos. Aprenderás qué es un proyecto, cuáles son sus fases (inicio, planificación, ejecución, monitoreo y cierre), y cómo se definen los objetivos, recursos, cronogramas y presupuestos. Se revisan también los roles clave dentro de un equipo de proyecto y la importancia de una buena comunicación y documentación.<br><br>¿Qué aprenderás?<br><br>• Definición y ciclo de vida de un proyecto.<br>• Principales roles en la gestión de proyectos (Project Manager, stakeholders, equipo técnico).<br>• Herramientas básicas para planificar, estimar tiempos y recursos.<br>• Riesgos comunes y cómo anticiparlos.<br><br>Objetivo del módulo:<br>Establecer una base sólida en la gestión de proyectos para poder planificar y organizar iniciativas tecnológicas con eficiencia y control.`;
        
        if (curso.modulosDetalle[1]) {
            curso.modulosDetalle[1].titulo = "Metodologías ágiles y tradicionales";
            curso.modulosDetalle[1].youtube = "https://www.youtube.com/embed/5RocT_OdQcA";
            curso.modulosDetalle[1].resumen = `En este módulo compararás y aplicarás diferentes enfoques de gestión de proyectos: las metodologías tradicionales como Waterfall, y las metodologías ágiles como Scrum y Kanban. Aprenderás cuándo conviene usar cada una según el tipo de proyecto, el nivel de incertidumbre y las necesidades del cliente. Se profundiza en el valor de la iteración, la colaboración continua y la adaptación al cambio.<br><br>¿Qué aprenderás?<br><br>• Diferencias entre metodologías predictivas (Waterfall) y ágiles (Scrum, Kanban, XP).<br>• Principios del manifiesto ágil y su impacto en proyectos de software.<br>• Cómo estructurar un proyecto ágil: roles, artefactos y ceremonias.<br>• Selección de la metodología adecuada según el contexto.<br><br>Objetivo del módulo:<br>Comprender los distintos enfoques de gestión y ser capaz de aplicar el más adecuado según las características y retos de cada proyecto tecnológico.`;
        }
        
        if (curso.modulosDetalle[2]) {
            curso.modulosDetalle[2].titulo = "Gestión de equipos y entrega de valor";
            curso.modulosDetalle[2].youtube = "https://www.youtube.com/embed/MUtUmwbQSkw";
            curso.modulosDetalle[2].resumen = `El éxito de un proyecto tecnológico depende tanto de las personas como de los procesos. En este módulo aprenderás a liderar y motivar equipos multidisciplinarios, a fomentar la colaboración y a resolver conflictos. Además, se explora el concepto de "valor entregado" al cliente como principal medida de éxito, junto con prácticas para asegurar entregas iterativas, retroalimentación continua y mejora constante.<br><br>¿Qué aprenderás?<br><br>• Habilidades clave para liderar y motivar equipos técnicos.<br>• Cómo gestionar la comunicación, la toma de decisiones y la resolución de conflictos.<br>• En qué consiste la entrega de valor y cómo medirla.<br>• Herramientas para seguimiento de tareas y mejora continua (Jira, Trello, métricas ágiles).<br><br>Objetivo del módulo:<br>Desarrollar la capacidad de formar y liderar equipos productivos enfocados en la entrega de valor, construyendo una cultura de colaboración y resultados en entornos tecnológicos.`;
        }
    }
    
    if (curso.nombre === "Tecnología en Salud") {
        curso.modulosDetalle[0].titulo = "Fundamentos de la salud digital";
        curso.modulosDetalle[0].youtube = "https://www.youtube.com/embed/NWSnVn-WljQ";
        curso.modulosDetalle[0].resumen = `Este módulo introduce los conceptos clave de la salud digital, un campo en crecimiento que combina tecnologías de la información con prácticas médicas para mejorar la atención sanitaria. Explorarás cómo los sistemas de información clínica, la telemedicina, las aplicaciones móviles de salud y los registros electrónicos están transformando la forma en que se recopilan, almacenan y utilizan los datos médicos.<br><br>¿Qué aprenderás?<br><br>• Qué es la salud digital y cómo ha evolucionado en la última década.<br>• Principales componentes: historia clínica electrónica (HCE), telemedicina, wearables y apps de salud.<br>• Beneficios y retos en la implementación tecnológica en hospitales y clínicas.<br>• Casos de éxito en digitalización de procesos clínicos.<br><br>Objetivo del módulo:<br>Entender el ecosistema digital en el ámbito de la salud y cómo las herramientas tecnológicas mejoran la eficiencia, accesibilidad y calidad de los servicios médicos.`;
        
        if (curso.modulosDetalle[1]) {
            curso.modulosDetalle[1].titulo = "Aplicaciones de IA en medicina";
            curso.modulosDetalle[1].youtube = "https://www.youtube.com/embed/nEahhnk3VvM";
            curso.modulosDetalle[1].resumen = `En este módulo se estudia cómo la inteligencia artificial está revolucionando la medicina moderna. Verás aplicaciones como el diagnóstico asistido por IA, la predicción de enfermedades, el análisis de imágenes médicas, la optimización de recursos hospitalarios y la medicina personalizada. Se explican los principios detrás de estas tecnologías y cómo se integran en la práctica clínica.<br><br>¿Qué aprenderás?<br><br>• Cómo se usa la IA para detectar enfermedades con imágenes, voz, y texto médico.<br>• Aplicaciones de aprendizaje automático en predicción de riesgos y planes de tratamiento.<br>• Casos reales de uso de IA en radiología, dermatología, oncología y otras especialidades.<br>• Beneficios y desafíos en la implementación de IA en entornos clínicos.<br><br>Objetivo del módulo:<br>Explorar cómo la inteligencia artificial mejora los diagnósticos y la toma de decisiones médicas, y cómo puede complementarse con la experiencia de los profesionales de la salud.`;
        }
        
        if (curso.modulosDetalle[2]) {
            curso.modulosDetalle[2].titulo = "Ética y regulaciones en tecnología médica";
            curso.modulosDetalle[2].youtube = "https://www.youtube.com/embed/tTggQO9UfFs";
            curso.modulosDetalle[2].resumen = `El uso de tecnología en salud plantea importantes desafíos éticos y legales. Este módulo aborda cuestiones como la privacidad de los datos médicos, la seguridad de los sistemas digitales, la equidad en el acceso a tecnologías avanzadas y la responsabilidad ante errores automatizados. Además, se revisan las regulaciones y marcos legales internacionales que guían el desarrollo y uso responsable de tecnologías médicas.<br><br>¿Qué aprenderás?<br><br>• Principales dilemas éticos en la salud digital y la inteligencia artificial médica.<br>• Leyes y normativas relacionadas con la protección de datos de salud (como HIPAA o GDPR).<br>• Responsabilidad médica y validación de herramientas tecnológicas.<br>• Consideraciones sobre equidad, sesgo algorítmico y accesibilidad.<br><br>Objetivo del módulo:<br>Desarrollar una conciencia crítica sobre el uso ético de la tecnología médica y comprender el marco regulatorio que protege a los pacientes y profesionales.`;
        }
    }
    
    if (curso.nombre === "Tecnología en Finanzas") {
        curso.modulosDetalle[0].titulo = "FinTech y evolución del sistema financiero";
        curso.modulosDetalle[0].youtube = "https://www.youtube.com/embed/CdtCTwJT310";
        curso.modulosDetalle[0].resumen = `Este módulo explora cómo las tecnologías financieras (FinTech) han transformado el sistema bancario tradicional. Analizarás el surgimiento de nuevas plataformas y modelos de negocio como los pagos digitales, préstamos P2P, neobancos y blockchain. También se examina cómo las FinTech promueven la inclusión financiera y cambian la relación entre consumidores y servicios financieros.<br><br>¿Qué aprenderás?<br><br>• Qué es FinTech y cuáles son sus principales áreas (pagos, préstamos, seguros, inversiones).<br>• Cambios clave en el ecosistema financiero por la digitalización.<br>• Cómo las FinTech están desintermediando a los bancos tradicionales.<br>• Tendencias como open banking y finanzas integradas.<br><br>Objetivo del módulo:<br>Comprender el impacto de las FinTech en el sistema financiero moderno y cómo están rediseñando la experiencia del usuario y la oferta de servicios financieros.`;
        
        if (curso.modulosDetalle[1]) {
            curso.modulosDetalle[1].titulo = "Inteligencia artificial y big data en finanzas";
            curso.modulosDetalle[1].youtube = "https://www.youtube.com/embed/kgXED8tuXEI";
            curso.modulosDetalle[1].resumen = `Este módulo se centra en cómo el uso de inteligencia artificial y big data está revolucionando la toma de decisiones financieras. Aprenderás cómo las instituciones usan algoritmos para evaluar riesgos, automatizar asesoramiento financiero (robo-advisors), detectar fraudes, y mejorar estrategias de inversión mediante análisis predictivo.<br><br>¿Qué aprenderás?<br><br>• Cómo se usan los datos masivos para extraer patrones de comportamiento financiero.<br>• Aplicaciones de IA en análisis crediticio, gestión de portafolios, seguros y detección de fraudes.<br>• Modelos predictivos y aprendizaje automático aplicados a los mercados financieros.<br>• Desafíos de ética y privacidad con el uso intensivo de datos personales.<br><br>Objetivo del módulo:<br>Conocer las aplicaciones reales de IA y big data en finanzas, y entender cómo aportan eficiencia, velocidad y precisión en la toma de decisiones económicas.`;
        }
        
        if (curso.modulosDetalle[2]) {
            curso.modulosDetalle[2].titulo = "Ciberseguridad y regulación financiera";
            curso.modulosDetalle[2].youtube = "https://www.youtube.com/embed/c_gRvGzmiUs";
            curso.modulosDetalle[2].resumen = `El entorno digital financiero plantea grandes retos en materia de seguridad y regulación. Este módulo explora las amenazas más comunes en ciberseguridad financiera (phishing, ransomware, filtraciones), así como los marcos normativos que protegen al usuario y al ecosistema financiero. Se estudian también normas como PCI DSS, GDPR, y las iniciativas de los entes reguladores frente al auge FinTech.<br><br>¿Qué aprenderás?<br><br>• Principales amenazas y vulnerabilidades en servicios financieros digitales.<br>• Prácticas de seguridad: autenticación multifactor, cifrado, monitoreo.<br>• Regulaciones clave que afectan a empresas FinTech (KYC, AML, GDPR, sandbox regulatorios).<br>• El rol de los gobiernos y organismos internacionales en la supervisión del sector financiero digital.<br><br>Objetivo del módulo:<br>Fortalecer tu comprensión de los riesgos tecnológicos en finanzas y las normativas que garantizan un ecosistema seguro y transparente para usuarios e instituciones.`;
        }
    }
    
    if (curso.nombre === "Marketing Digital") {
        curso.modulosDetalle[0].titulo = "Estrategia de marketing en entornos digitales";
        curso.modulosDetalle[0].youtube = "https://www.youtube.com/embed/VdFrLzGFpDI";
        curso.modulosDetalle[0].resumen = `En este módulo se aborda cómo se construye una estrategia de marketing digital efectiva desde cero. Aprenderás a definir objetivos, identificar al público objetivo y desarrollar propuestas de valor adaptadas al entorno online. También conocerás los distintos canales digitales (como redes sociales, correo electrónico, SEO y contenido) y cómo combinarlos de manera integrada.<br><br>¿Qué aprenderás?<br><br>• Cómo crear una estrategia de marketing digital centrada en objetivos y audiencia.<br>• Diferencias entre inbound y outbound marketing.<br>• Canales clave: email marketing, redes sociales, SEO, SEM, content marketing.<br>• Ejemplos de embudos de conversión y customer journey en el mundo digital.<br><br>Objetivo del módulo:<br>Comprender cómo diseñar estrategias de marketing coherentes, adaptadas al comportamiento digital de los usuarios y orientadas a generar resultados medibles.`;
        
        if (curso.modulosDetalle[1]) {
            curso.modulosDetalle[1].titulo = "Publicidad y posicionamiento en buscadores";
            curso.modulosDetalle[1].youtube = "https://www.youtube.com/embed/Ae-OAraaQs0";
            curso.modulosDetalle[1].resumen = `Este módulo se enfoca en los motores de búsqueda como Google, y cómo las marcas pueden aumentar su visibilidad mediante SEO (optimización para buscadores) y SEM (publicidad pagada). Aprenderás cómo funciona el algoritmo de búsqueda, cómo elegir palabras clave, optimizar tu contenido y estructurar campañas publicitarias eficaces en Google Ads u otras plataformas.<br><br>¿Qué aprenderás?<br><br>• Fundamentos de SEO: factores de ranking, estructura web, contenido optimizado.<br>• Fundamentos de SEM: pujas, segmentación, anuncios en buscadores (PPC).<br>• Herramientas como Google Ads, Google Keyword Planner y Google Search Console.<br>• Cómo medir el retorno de inversión (ROI) de tus campañas.<br><br>Objetivo del módulo:<br>Dominar las prácticas y herramientas que permiten aumentar la visibilidad de tu marca y captar tráfico relevante desde buscadores.`;
        }
        
        if (curso.modulosDetalle[2]) {
            curso.modulosDetalle[2].titulo = "Analítica digital y optimización de campañas";
            curso.modulosDetalle[2].youtube = "https://www.youtube.com/embed/a9UrKTVEeZA";
            curso.modulosDetalle[2].resumen = `Una campaña no está completa sin medir sus resultados. En este módulo aprenderás a analizar el comportamiento de los usuarios, interpretar métricas clave (como tasa de conversión, CTR, tasa de rebote) y tomar decisiones basadas en datos para mejorar el rendimiento de tus campañas. También explorarás herramientas como Google Analytics, Meta Ads Manager o dashboards personalizados.<br><br>¿Qué aprenderás?<br><br>• Qué medir y por qué: KPIs en marketing digital.<br>• Cómo leer un informe de analítica web o campaña.<br>• Test A/B, experimentos y optimización continua.<br>• Herramientas para visualización y toma de decisiones (Looker Studio, GA4, Hotjar).<br><br>Objetivo del módulo:<br>Adquirir la capacidad de evaluar, ajustar y optimizar campañas digitales a partir de datos reales y en tiempo real.`;
        }
    }
    
    if (curso.nombre === "Tecnología en Educación") {
        curso.modulosDetalle[0].titulo = "Herramientas y plataformas de enseñanza virtual";
        curso.modulosDetalle[0].youtube = "https://www.youtube.com/embed/AOO0scFzM0c";
        curso.modulosDetalle[0].resumen = `Este módulo ofrece una introducción a las plataformas, entornos virtuales y recursos digitales más utilizados para facilitar la enseñanza y el aprendizaje en línea. Aprenderás cómo implementar herramientas de videoconferencia, aulas virtuales, sistemas de gestión del aprendizaje (LMS) y recursos multimedia interactivos para planificar, impartir y evaluar clases de forma remota o híbrida.<br><br>¿Qué aprenderás?<br><br>• Uso de plataformas como Google Classroom, Moodle, Microsoft Teams, Canvas y Zoom.<br>• Cómo estructurar clases digitales: contenido, actividades, evaluación.<br>• Herramientas colaborativas (Padlet, Kahoot, Jamboard) y su valor pedagógico.<br>• Mejores prácticas para mantener la participación de los estudiantes a distancia.<br><br>Objetivo del módulo:<br>Capacitarte en el uso efectivo de herramientas tecnológicas para crear entornos educativos digitales accesibles, dinámicos y centrados en el estudiante.`;
        
        if (curso.modulosDetalle[1]) {
            curso.modulosDetalle[1].titulo = "Analítica del aprendizaje y personalización";
            curso.modulosDetalle[1].youtube = "https://www.youtube.com/embed/XscUZ8dIa-8";
            curso.modulosDetalle[1].resumen = `En este módulo aprenderás cómo recolectar, interpretar y utilizar los datos generados por los estudiantes durante su interacción con plataformas digitales. Explorarás cómo los indicadores de desempeño, participación y progreso permiten adaptar los contenidos, ritmos y métodos a las necesidades individuales, fomentando una educación más personalizada, eficiente y equitativa.<br><br>¿Qué aprenderás?<br><br>• Qué es la analítica del aprendizaje y cómo se aplica en entornos educativos.<br>• Herramientas que permiten rastrear y analizar el progreso del estudiante.<br>• Cómo identificar patrones de riesgo (deserción, bajo rendimiento, desmotivación).<br>• Modelos de personalización del aprendizaje usando tecnología adaptativa.<br><br>Objetivo del módulo:<br>Desarrollar la capacidad de aprovechar los datos educativos para diseñar experiencias de aprendizaje más personalizadas, motivadoras y efectivas.`;
        }
    }
    
    if (curso.nombre === "Tecnología y Sostenibilidad") {
        curso.modulosDetalle[0].titulo = "Innovaciones tecnológicas para el desarrollo sostenible";
        curso.modulosDetalle[0].youtube = "https://www.youtube.com/embed/Y7KJiy7rfMY";
        curso.modulosDetalle[0].resumen = `Este módulo explora cómo la innovación tecnológica puede apoyar los Objetivos de Desarrollo Sostenible (ODS). Se analizan tecnologías emergentes como energías renovables, sistemas inteligentes de gestión de agua y residuos, agricultura de precisión y redes eléctricas inteligentes. También se discuten ejemplos de startups y proyectos que combinan impacto ambiental positivo con sostenibilidad económica.<br><br>¿Qué aprenderás?<br><br>• Qué tecnologías están impulsando la sostenibilidad (solar, eólica, IoT, blockchain verde).<br>• Cómo la tecnología ayuda a combatir el cambio climático y la escasez de recursos.<br>• Casos de éxito donde la innovación tecnológica mejora la calidad de vida.<br>• Desafíos de accesibilidad y escalabilidad de estas soluciones.<br><br>Objetivo del módulo:<br>Comprender cómo la tecnología puede ser usada como herramienta para enfrentar los grandes retos ambientales y sociales del planeta.`;
        
        if (curso.modulosDetalle[1]) {
            curso.modulosDetalle[1].titulo = "Monitoreo ambiental y uso de datos geoespaciales";
            curso.modulosDetalle[1].youtube = "https://www.youtube.com/embed/eCXBPi7oTv8";
            curso.modulosDetalle[1].resumen = `Este módulo aborda cómo los sensores, satélites, drones y tecnologías de información geográfica (SIG) se utilizan para observar, medir y anticipar fenómenos ambientales. Estudiarás el papel del monitoreo remoto en la gestión de recursos naturales, prevención de desastres y planificación urbana sostenible.<br><br>¿Qué aprenderás?<br><br>• Fundamentos de los sistemas de información geográfica (GIS) y teledetección.<br>• Uso de datos satelitales para análisis climático, forestal e hídrico.<br>• Cómo se aplican sensores y drones en conservación y agricultura sostenible.<br>• Plataformas abiertas para visualizar y analizar datos ambientales (Google Earth Engine, Copernicus, Mapbox).<br><br>Objetivo del módulo:<br>Dominar los conceptos y herramientas que permiten monitorear el medio ambiente y tomar decisiones basadas en datos geográficos confiables.`;
        }
        
        if (curso.modulosDetalle[2]) {
            curso.modulosDetalle[2].titulo = "Economía circular y responsabilidad tecnológica";
            curso.modulosDetalle[2].youtube = "https://www.youtube.com/embed/glUHk657pRc";
            curso.modulosDetalle[2].resumen = `En este módulo se analizan modelos de producción y consumo que minimizan el desperdicio y maximizan el uso eficiente de los recursos. Se discute el papel de la tecnología en apoyar una economía circular (reutilización, reciclaje, remanufactura) y cómo las organizaciones deben asumir una responsabilidad social y ambiental en el diseño de sus productos, servicios y cadenas de valor.<br><br>¿Qué aprenderás?<br><br>• Principios de la economía circular frente al modelo lineal tradicional.<br>• Tecnologías que facilitan la trazabilidad, reciclaje y reutilización de materiales.<br>• El rol de las empresas tecnológicas en la sostenibilidad (diseño responsable, ética ambiental).<br>• Ejemplos de políticas públicas y modelos empresariales basados en sostenibilidad.<br><br>Objetivo del módulo:<br>Incorporar una visión sistémica de sostenibilidad en la tecnología, entendiendo cómo los ciclos de vida de los productos y servicios digitales pueden diseñarse de manera ética y circular.`;
        }
    }
    
    if (curso.nombre === "Fundamentos de IA") {
        curso.modulosDetalle[0].titulo = "Conceptos esenciales y tipos de inteligencia artificial";
        curso.modulosDetalle[0].youtube = "https://www.youtube.com/embed/d2ts4Ob8rqI";
        curso.modulosDetalle[0].resumen = `Este módulo ofrece una introducción clara y estructurada a los fundamentos de la inteligencia artificial. Aprenderás qué es la IA, cómo se diferencia de otras áreas tecnológicas, y cuáles son sus principales tipos: IA débil, IA fuerte, IA general y específica. También conocerás conceptos clave como agentes inteligentes, razonamiento, percepción y aprendizaje automático.<br><br>¿Qué aprenderás?<br><br>• Definición de inteligencia artificial y su evolución histórica.<br>• Tipos de IA: reactiva, con memoria limitada, teoría de la mente y autoconsciente.<br>• Diferencia entre IA simbólica y basada en datos.<br>• Áreas aplicadas: visión por computadora, NLP, robótica, entre otras.<br><br>Objetivo del módulo:<br>Comprender la naturaleza y el alcance de la IA, y familiarizarte con su clasificación y sus aplicaciones principales en la vida real.`;
        
        if (curso.modulosDetalle[1]) {
            curso.modulosDetalle[1].titulo = "Herramientas y entornos de desarrollo en IA";
            curso.modulosDetalle[1].youtube = "https://www.youtube.com/embed/DnBVgfe6ZQM";
            curso.modulosDetalle[1].resumen = `En este módulo se presenta el ecosistema tecnológico básico para desarrollar soluciones de IA. Conocerás lenguajes de programación populares como Python, bibliotecas esenciales como TensorFlow, Keras, PyTorch y Scikit-learn, y entornos de trabajo como Google Colab y Jupyter Notebooks. También se explican los pasos para construir y entrenar modelos sencillos de IA.<br><br>¿Qué aprenderás?<br><br>• Lenguajes de programación utilizados en IA (principalmente Python).<br>• Introducción a bibliotecas: NumPy, Pandas, Scikit-learn, TensorFlow y PyTorch.<br>• Plataformas para desarrollo y entrenamiento de modelos en la nube.<br>• Cómo preparar datos, entrenar y validar modelos de manera básica.<br><br>Objetivo del módulo:<br>Iniciarte en el uso práctico de herramientas de desarrollo de inteligencia artificial y sentar las bases para proyectos futuros en IA aplicada.`;
        }
    }
    
    if (curso.nombre === "Procesamiento de Lenguaje Natural") {
        curso.modulosDetalle[0].titulo = "Representación y limpieza de texto";
        curso.modulosDetalle[0].youtube = "https://www.youtube.com/embed/V-HrDQoa0pc";
        curso.modulosDetalle[0].resumen = `En este módulo aprenderás las técnicas fundamentales para preparar texto de manera que pueda ser entendido por modelos computacionales. Comienza con tareas como limpieza, normalización, tokenización y eliminación de ruido en los datos textuales. Se introducen también formas básicas de representación como bolsas de palabras (Bag of Words), TF-IDF y codificación básica.<br><br>¿Qué aprenderás?<br><br>• Cómo limpiar texto eliminando puntuación, caracteres especiales y stop words.<br>• Técnicas de tokenización, lematización y stemming.<br>• Representaciones tradicionales: BoW y TF-IDF.<br>• Cómo transformar texto en vectores numéricos que puedan ser usados en modelos.<br><br>Objetivo del módulo:<br>Prepararte para estructurar datos textuales de manera efectiva, sentando las bases para su análisis automático.`;
        
        if (curso.modulosDetalle[1]) {
            curso.modulosDetalle[1].titulo = "Modelos de lenguaje y word embeddings";
            curso.modulosDetalle[1].youtube = "https://www.youtube.com/embed/gQddtTdmG_8";
            curso.modulosDetalle[1].resumen = `Aquí explorarás cómo los modelos de lenguaje aprenden las relaciones y contextos entre palabras. Se explican representaciones vectoriales más avanzadas como Word2Vec, GloVe y FastText, y se introduce el concepto de modelos preentrenados como BERT o GPT. El enfoque está en cómo capturar el significado semántico del lenguaje mediante vectores densos.<br><br>¿Qué aprenderás?<br><br>• Qué son los modelos de lenguaje y cómo predicen el contexto.<br>• Embeddings: representaciones vectoriales que preservan el significado semántico.<br>• Diferencias entre Word2Vec, GloVe y FastText.<br>• Breve introducción a Transformers y modelos preentrenados (BERT, GPT).<br><br>Objetivo del módulo:<br>Comprender cómo transformar texto en vectores semánticos útiles para tareas como clasificación, análisis de sentimiento o traducción automática.`;
        }
        
        if (curso.modulosDetalle[2]) {
            curso.modulosDetalle[2].titulo = "Aplicaciones prácticas de NLP";
            curso.modulosDetalle[2].youtube = "https://www.youtube.com/embed/jDmlLRi5cIA";
            curso.modulosDetalle[2].resumen = `Este módulo se enfoca en las aplicaciones del procesamiento del lenguaje natural en el mundo real. A través de ejemplos prácticos, aprenderás a aplicar técnicas de NLP en tareas como análisis de sentimiento, clasificación de textos, detección de spam, generación de texto y asistentes virtuales. También se exploran herramientas y frameworks como spaCy, NLTK y Hugging Face Transformers.<br><br>¿Qué aprenderás?<br><br>• Aplicación del NLP en casos reales: sentiment analysis, chatbots, extracción de información.<br>• Uso de bibliotecas populares como spaCy, NLTK y Transformers.<br>• Cómo construir pipelines de NLP automatizados.<br>• Evaluación de modelos de NLP según la tarea.<br><br>Objetivo del módulo:<br>Dotarte de las habilidades necesarias para aplicar técnicas de NLP en proyectos reales que interactúan con lenguaje humano de forma efectiva y precisa.`;
        }
    }
    
    if (curso.nombre === "Visión por Computadora") {
        curso.modulosDetalle[0].titulo = "Fundamentos del procesamiento de imágenes digitales";
        curso.modulosDetalle[0].youtube = "https://www.youtube.com/embed/2w8XIskzdFw";
        curso.modulosDetalle[0].resumen = `Este módulo establece los principios básicos del procesamiento de imágenes y cómo convertir información visual en datos interpretables por un sistema computacional. Se estudian conceptos como píxeles, resolución, canales de color, histogramas y transformaciones espaciales. También se aprende a aplicar filtros, detección de bordes y operaciones morfológicas básicas para realzar imágenes o extraer información.<br><br>¿Qué aprenderás?<br><br>• Estructura y representación digital de imágenes.<br>• Técnicas básicas de preprocesamiento: ajuste de brillo/contraste, suavizado, detección de bordes.<br>• Aplicación de filtros convolucionales: blur, sharpen, edge detection.<br>• Operaciones morfológicas: dilatación, erosión, apertura y cierre.<br><br>Objetivo del módulo:<br>Comprender cómo manipular y preparar imágenes para análisis computacional, creando una base sólida para tareas más complejas.`;
        
        if (curso.modulosDetalle[1]) {
            curso.modulosDetalle[1].titulo = "Detección y clasificación de objetos";
            curso.modulosDetalle[1].youtube = "https://www.youtube.com/embed/t-phGBfPEZ4";
            curso.modulosDetalle[1].resumen = `En este módulo se exploran los métodos para localizar objetos dentro de una imagen y clasificarlos según categorías definidas. Se abordan algoritmos como HOG, SIFT, YOLO y SSD, y se introducen redes convolucionales entrenadas para reconocer patrones complejos. También se discute el entrenamiento con datasets como COCO o ImageNet.<br><br>¿Qué aprenderás?<br><br>• Técnicas tradicionales y basadas en deep learning para detectar objetos.<br>• Cómo funcionan modelos como YOLO (You Only Look Once) y SSD.<br>• Clasificación de imágenes con CNN preentrenadas (ResNet, VGG, MobileNet).<br>• Evaluación de precisión: mAP, IoU y F1-score.<br><br>Objetivo del módulo:<br>Aprender a identificar y clasificar automáticamente elementos dentro de imágenes, incluso en escenarios con múltiples objetos.`;
        }
        
        if (curso.modulosDetalle[2]) {
            curso.modulosDetalle[2].titulo = "Segmentación, seguimiento y análisis avanzado";
            curso.modulosDetalle[2].youtube = "https://www.youtube.com/embed/CR0uv9gjsS8";
            curso.modulosDetalle[2].resumen = `Este módulo se enfoca en separar regiones específicas dentro de una imagen (segmentación) y en seguir objetos a lo largo de una secuencia de video (tracking). Se estudian técnicas como segmentación semántica y por instancia, con modelos como U-Net, Mask R-CNN, y algoritmos de seguimiento como SORT o DeepSORT. También se revisan aplicaciones en medicina, vigilancia y vehículos autónomos.<br><br>¿Qué aprenderás?<br><br>• Diferencia entre segmentación semántica e instancia.<br>• Modelos avanzados: U-Net, Mask R-CNN, DeepLab.<br>• Técnicas de seguimiento de objetos en video.<br>• Casos de uso: análisis médico, vigilancia, conducción autónoma.<br><br>Objetivo del módulo:<br>Dominar herramientas avanzadas para interpretar con precisión cada componente de una imagen o video y su evolución en el tiempo.`;
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
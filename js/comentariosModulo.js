
// 1. Se define aquí los comentarios iniciales por curso y módulo
const comentariosIniciales = {
    // Lista de cursos
    "Introducción a la IA": {
        // Cada módulo es un número
        1: [
            {
                nombre: "Ana López",
                avatar: "assets/img/personita.png",
                texto: "¡Excelente curso! Me encanta cómo explican los conceptos básicos.",
                likes: 0,
                dislikes: 0
            },
            {
                nombre: "Carlos Ruiz",
                avatar: "assets/img/personita.png",
                texto: "¿Alguien tiene recursos adicionales sobre este tema?",
                likes: 0,
                dislikes: 0
            },
            {
                nombre: "Orlando Martínez",
                avatar: "assets/img/personita.png",
                texto: "Muy bueno, me gustó como explicaron el concepto de IA.",
                likes: 0,
                dislikes: 0
            },
            {
                nombre: "Oscar Fernández",
                avatar: "assets/img/personita.png",
                texto: "Primer comentario. Espero que este curso sea tan bueno como dicen.",
                likes: 0,
                dislikes: 0
            },
            {
                nombre: "Carlos Ruiz",
                avatar: "assets/img/personita.png",
                texto: "Muy buena manera de empezar el curso, me gusta.",
                likes: 0,
                dislikes: 0
            }
        ],
        2: [
            {
                nombre: "Camila Vargas",
                avatar: "assets/img/personita.png",
                texto: "Me gusta cómo lo explican, es fácil de entender.",
                likes: 0,
                dislikes: 0
            },
            {
                nombre: "Luis Torres",
                avatar: "assets/img/personita.png",
                texto: "Muy bueno el video, aprendí bastante.",
                likes: 0,
                dislikes: 0
            },
            {
                nombre: "Ana Rojas",
                avatar: "assets/img/personita.png",
                texto: "Soy estudiante de ingeniería y me sirvió bastante.",
                likes: 0,
                dislikes: 0
            },
            {
                nombre: "Diego Mendoza",
                avatar: "assets/img/personita.png",
                texto: "Gracias por compartir, buen resumen del tema.",
                likes: 0,
                dislikes: 0
            },
            {
                nombre: "Fiorella Navarro",
                avatar: "assets/img/personita.png",
                texto: "Nunca pensé que la IA tuviera tantas aplicaciones.",
                likes: 0,
                dislikes: 0
            }
        ],
        3: [
            {
                nombre: "Esteban Ruiz",
                avatar: "assets/img/personita.png",
                texto: "El tema de la ética en IA me parece muy importante.",
                likes: 0,
                dislikes: 0
            },
            {
                nombre: "Daniela Paredes",
                avatar: "assets/img/personita.png",
                texto: "Interesante reflexión sobre los riesgos de la IA.",
                likes: 0,
                dislikes: 0
            },
            {
                nombre: "Jorge Alarcón",
                avatar: "assets/img/personita.png",
                texto: "Soy estudiante de derecho y esto me ayudó bastante.",
                likes: 0,
                dislikes: 0
            },
            {
                nombre: "Martha Salinas",
                avatar: "assets/img/personita.png",
                texto: "Me dejó pensando lo del control y los sesgos.",
                likes: 0,
                dislikes: 0
            },
            {
                nombre: "Gabriel Castañeda",
                avatar: "assets/img/personita.png",
                texto: "Buen módulo, plantea preguntas que todos deberíamos hacernos.",
                likes: 0,
                dislikes: 0
            }
        ],
    },

    "Técnicas avanzadas de IA": {
        1: [
            {
                nombre: "Renzo Aguilar",
                avatar: "assets/img/personita.png",
                texto: "Muy interesante cómo funcionan las redes neuronales.",
                likes: 0,
                dislikes: 0
            },
            {
                nombre: "Natalia Herrera",
                avatar: "assets/img/personita.png",
                texto: "Estoy empezando en IA y esto me ayudó bastante.",
                likes: 0,
                dislikes: 0
            },
            {
                nombre: "Marco Espinoza",
                avatar: "assets/img/personita.png",
                texto: "Buena explicación del aprendizaje profundo, gracias.",
                likes: 0,
                dislikes: 0
            },
            {
                nombre: "Paola Díaz",
                avatar: "assets/img/personita.png",
                texto: "Me gustó el ejemplo visual de las capas ocultas.",
                likes: 0,
                dislikes: 0
            },
            {
                nombre: "Sebastián León",
                avatar: "assets/img/personita.png",
                texto: "Soy de ingeniería de sistemas y esto me aclaró varias dudas.",
                likes: 0,
                dislikes: 0
            }
        ],
        2: [
            {
                nombre: "Andrea Loyola",
                avatar: "assets/img/personita.png",
                texto: "Me encantó la parte de los modelos generativos, fue muy clara.",
                likes: 0,
                dislikes: 0
            },
            {
                nombre: "Matías Rivas",
                avatar: "assets/img/personita.png",
                texto: "No sabía que se podía cambiar el estilo de una imagen con IA.",
                likes: 0,
                dislikes: 0
            },
            {
                nombre: "Karina Valverde",
                avatar: "assets/img/personita.png",
                texto: "Soy estudiante de diseño y esto me pareció súper útil.",
                likes: 0,
                dislikes: 0
            },
            {
                nombre: "Oscar Medina",
                avatar: "assets/img/personita.png",
                texto: "Muy bueno el módulo, ahora entiendo mejor cómo funcionan los GAN.",
                likes: 0,
                dislikes: 0
            },
            {
                nombre: "Lorena Córdova",
                avatar: "assets/img/personita.png",
                texto: "La transferencia de estilos me pareció lo más interesante del curso.",
                likes: 0,
                dislikes: 0
            }

        ],
        3: [
            {
    nombre: "Héctor Silva",
    avatar: "assets/img/personita.png",
    texto: "Me ayudó a entender cómo llevar un modelo a producción.",
    likes: 0,
    dislikes: 0
},
{
    nombre: "Isabel Méndez",
    avatar: "assets/img/personita.png",
    texto: "Buen contenido, ahora sé que no basta con solo entrenar el modelo.",
    likes: 0,
    dislikes: 0
},
{
    nombre: "Rodrigo Ponce",
    avatar: "assets/img/personita.png",
    texto: "Soy estudiante de informática y esto me sirvió muchísimo.",
    likes: 0,
    dislikes: 0
},
{
    nombre: "Camila Gutiérrez",
    avatar: "assets/img/personita.png",
    texto: "Muy claro todo, desde el despliegue hasta el monitoreo.",
    likes: 0,
    dislikes: 0
},
{
    nombre: "Bruno Chávez",
    avatar: "assets/img/personita.png",
    texto: "Gracias por explicar también la parte práctica de la IA.",
    likes: 0,
    dislikes: 0
}

        ],
    },

    "Ética y Sociedad":{
        1: [
            {
                nombre: "Sofía Miranda",
                avatar: "assets/img/personita.png",
                texto: "Importante conocer estos principios para un desarrollo responsable.",
                likes: 0,
                dislikes: 0
            },
            {
                nombre: "Alejandro Pinto",
                avatar: "assets/img/personita.png",
                texto: "Me gustó cómo explicaron la transparencia y la equidad en la IA.",
                likes: 0,
                dislikes: 0
            },
            {
                nombre: "Tatiana Campos",
                avatar: "assets/img/personita.png",
                texto: "Soy estudiante de sociología y me pareció muy valioso el enfoque ético.",
                likes: 0,
                dislikes: 0
            },
            {
                nombre: "Julián Vera",
                avatar: "assets/img/personita.png",
                texto: "No había pensado en la importancia de la justicia algorítmica.",
                likes: 0,
                dislikes: 0
            },
            {
                nombre: "Patricia Benítez",
                avatar: "assets/img/personita.png",
                texto: "Buen inicio para reflexionar sobre el impacto social de la IA.",
                likes: 0,
                dislikes: 0
            }

        ],
        2: [
            {
                nombre: "Diego Herrera",
                avatar: "assets/img/personita.png",
                texto: "Me gustó cómo explicaron el impacto social de la IA.",
                likes: 0,
                dislikes: 0
            },
            {
                nombre: "Sofía Mendoza",
                avatar: "assets/img/personita.png",
                texto: "Muy bueno el análisis de los riesgos de la IA.",
                likes: 0,
                dislikes: 0
            },
            {
                nombre: "Andrés Córdova",
                avatar: "assets/img/personita.png",
                texto: "Soy estudiante de ingeniería y esto me hizo reflexionar.",
                likes: 0,
                dislikes: 0
            },
            {
                nombre: "Patricia López",
                avatar: "assets/img/personita.png",
                texto: "La parte de la privacidad y la vigilancia me pareció crucial.",
                likes: 0,
                dislikes: 0
            },
            {
                nombre: "Ricardo Jiménez",
                avatar: "assets/img/personita.png",
                texto:
                    "Gracias por abordar estos temas tan relevantes en el curso.",
            }
        ],
        3: [
            {
                nombre: "Miguel Estrada",
                avatar: "assets/img/personita.png",
                texto: "Interesante cómo los sesgos pueden colarse en los algoritmos.",
                likes: 0,
                dislikes: 0
            },
            {
                nombre: "Laura Cabrera",
                avatar: "assets/img/personita.png",
                texto: "Este módulo me hizo pensar en las consecuencias reales de la IA.",
                likes: 0,
                dislikes: 0
            },
            {
                nombre: "Eduardo Nieto",
                avatar: "assets/img/personita.png",
                texto: "Muy útil para entender el impacto social que puede tener un mal diseño.",
                likes: 0,
                dislikes: 0
            },
            {
                nombre: "Valentina Cornejo",
                avatar: "assets/img/personita.png",
                texto: "Me pareció clave hablar de los sesgos y cómo evitarlos.",
                likes: 0,
                dislikes: 0
            },
            {
                nombre: "Franco Medina",
                avatar: "assets/img/personita.png",
                texto: "Soy estudiante de comunicación y me sirvió para mi tesis sobre IA.",
                likes: 0,
                dislikes: 0
            }
        ],
    },

    "Transformación Digital": {
        1: [
            {
    nombre: "Luciana Ríos",
    avatar: "assets/img/personita.png",
    texto: "Muy claro el concepto de transformación digital, buen inicio.",
    likes: 0,
    dislikes: 0
},
{
    nombre: "Cristian Paredes",
    avatar: "assets/img/personita.png",
    texto: "Ahora entiendo mejor cómo la tecnología cambia los negocios.",
    likes: 0,
    dislikes: 0
},
{
    nombre: "Diana Lozano",
    avatar: "assets/img/personita.png",
    texto: "Soy de administración y esto me ayudó bastante a comprender el tema.",
    likes: 0,
    dislikes: 0
},
{
    nombre: "Felipe Navarro",
    avatar: "assets/img/personita.png",
    texto: "Buen contenido para comenzar a hablar de transformación digital.",
    likes: 0,
    dislikes: 0
},
{
    nombre: "Brenda Suárez",
    avatar: "assets/img/personita.png",
    texto: "Me gustó cómo lo relacionaron con ejemplos reales.",
    likes: 0,
    dislikes: 0
}
        ],
        2: [
            {
    nombre: "Tomás Delgado",
    avatar: "assets/img/personita.png",
    texto: "Interesante ver cómo la tecnología impulsa nuevas formas de trabajar.",
    likes: 0,
    dislikes: 0
},
{
    nombre: "Milagros Castaño",
    avatar: "assets/img/personita.png",
    texto: "Me gustó el enfoque en cómo la tecnología transforma procesos.",
    likes: 0,
    dislikes: 0
},
{
    nombre: "Kevin López",
    avatar: "assets/img/personita.png",
    texto: "Soy estudiante de economía y esto me dio otra perspectiva.",
    likes: 0,
    dislikes: 0
},
{
    nombre: "Ángela Meza",
    avatar: "assets/img/personita.png",
    texto: "Buen módulo, me hizo reflexionar sobre la adaptación al cambio.",
    likes: 0,
    dislikes: 0
},
{
    nombre: "Jairo Fernández",
    avatar: "assets/img/personita.png",
    texto: "Explican bien cómo la tecnología genera oportunidades si se aprovecha bien.",
    likes: 0,
    dislikes: 0
}
        ],
        3: [
            {
    nombre: "Alejandra Ruiz",
    avatar: "assets/img/personita.png",
    texto: "Me gustó cómo explicaron el rol del líder en tiempos de cambio.",
    likes: 0,
    dislikes: 0
},
{
    nombre: "Fernando Acosta",
    avatar: "assets/img/personita.png",
    texto: "Muy útil para entender cómo guiar equipos en transformación digital.",
    likes: 0,
    dislikes: 0
},
{
    nombre: "Cinthia Herrera",
    avatar: "assets/img/personita.png",
    texto: "Soy estudiante de gestión y me ayudó mucho este módulo.",
    likes: 0,
    dislikes: 0
},
{
    nombre: "Jonathan Rivas",
    avatar: "assets/img/personita.png",
    texto: "Importante destacar la actitud frente al cambio, no solo la tecnología.",
    likes: 0,
    dislikes: 0
},
{
    nombre: "Marisol Gamarra",
    avatar: "assets/img/personita.png",
    texto: "El enfoque humano del liderazgo fue lo que más me gustó.",
    likes: 0,
    dislikes: 0
}
        ],
    },

    "Fundamentos para principiantes":{
        1: [
            {
    nombre: "Daniel Muñoz",
    avatar: "assets/img/personita.png",
    texto: "Buena introducción, ideal para los que estamos empezando.",
    likes: 0,
    dislikes: 0
},
{
    nombre: "Roxana Vargas",
    avatar: "assets/img/personita.png",
    texto: "Me ayudó a entender los conceptos básicos de la computación.",
    likes: 0,
    dislikes: 0
},
{
    nombre: "Ignacio Saldaña",
    avatar: "assets/img/personita.png",
    texto: "Soy nuevo en este tema y fue muy claro todo.",
    likes: 0,
    dislikes: 0
},
{
    nombre: "Fiorella Martínez",
    avatar: "assets/img/personita.png",
    texto: "Perfecto para quienes no veníamos del mundo tech.",
    likes: 0,
    dislikes: 0
},
{
    nombre: "Cristina Bravo",
    avatar: "assets/img/personita.png",
    texto: "Explicación sencilla y bien estructurada, gracias.",
    likes: 0,
    dislikes: 0
}
        ],
        2: [
            {
    nombre: "Luis Miguel Torres",
    avatar: "assets/img/personita.png",
    texto: "Me gustó cómo explicaron el paso a paso del razonamiento lógico.",
    likes: 0,
    dislikes: 0
},
{
    nombre: "Estefanía Reátegui",
    avatar: "assets/img/personita.png",
    texto: "Soy principiante y este módulo me dio mucha claridad.",
    likes: 0,
    dislikes: 0
},
{
    nombre: "Jhonatan Guevara",
    avatar: "assets/img/personita.png",
    texto: "Interesante cómo se conecta el pensamiento lógico con la programación.",
    likes: 0,
    dislikes: 0
},
{
    nombre: "Alessia Contreras",
    avatar: "assets/img/personita.png",
    texto: "Buen módulo para empezar sin tener miedo a programar.",
    likes: 0,
    dislikes: 0
},
{
    nombre: "Gabriel Inga",
    avatar: "assets/img/personita.png",
    texto: "Me sirvió bastante para entender cómo resolver problemas con código.",
    likes: 0,
    dislikes: 0
}
        ],
        3: [
            {
    nombre: "Melanie Quinteros",
    avatar: "assets/img/personita.png",
    texto: "Muy útil para entender cómo se relacionan los datos con la IA.",
    likes: 0,
    dislikes: 0
},
{
    nombre: "Andrés Palomino",
    avatar: "assets/img/personita.png",
    texto: "Soy nuevo en esto y me gustó lo simple que lo explicaron.",
    likes: 0,
    dislikes: 0
},
{
    nombre: "Ximena Alcántara",
    avatar: "assets/img/personita.png",
    texto: "Buen módulo para empezar a conocer cómo funciona la IA.",
    likes: 0,
    dislikes: 0
},
{
    nombre: "Mauricio Zapata",
    avatar: "assets/img/personita.png",
    texto: "Me pareció interesante cómo los datos ayudan a 'entrenar' la IA.",
    likes: 0,
    dislikes: 0
},
{
    nombre: "Julieta Salazar",
    avatar: "assets/img/personita.png",
    texto: "Gracias por hacerlo tan accesible para quienes recién comenzamos.",
    likes: 0,
    dislikes: 0
}
        ],
    },
    // Aquí puedes agregar más cursos y módulos con sus comentarios iniciales
};

// 2. Función para obtener curso y módulo actual desde la URL
export function getCursoYModuloActual() {
    const params = new URLSearchParams(window.location.search);
    const curso = params.get('curso');
    const modulo = parseInt(params.get('modulo'), 10);
    return { curso, modulo };
}

// 3. Clave única para localStorage
function getComentariosKey(curso, modulo) {
    return `comentarios_${curso}_modulo_${modulo}`;
}

// 4. Cargar comentarios: primero localStorage, si no, los iniciales de arriba
export function cargarComentariosModulo() {
    const { curso, modulo } = getCursoYModuloActual();
    const key = getComentariosKey(curso, modulo);
    const guardados = JSON.parse(localStorage.getItem(key) || 'null');
    if (guardados) return guardados;

    // Si no hay guardados, usa los iniciales definidos aquí
    if (
        comentariosIniciales[curso] &&
        comentariosIniciales[curso][modulo]
    ) {
        return comentariosIniciales[curso][modulo];
    }
    return [];
}

// 5. Guardar comentarios en localStorage
export function guardarComentariosModulo(comentarios) {
    const { curso, modulo } = getCursoYModuloActual();
    const key = getComentariosKey(curso, modulo);
    localStorage.setItem(key, JSON.stringify(comentarios));
}
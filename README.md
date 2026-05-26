# SkillPathAI

> Plataforma web educativa enfocada en desmitificar la Inteligencia Artificial para personas sin conocimientos tecnicos previos.

**Demo en vivo:** [https://skillpathia.netlify.app](https://skillpathia.netlify.app)

---

## Sobre el proyecto

SkillPathAI es una startup academica desarrollada como proyecto del curso **IHC y Programacion Web (1ACC0237)** de la carrera de Ciencias de la Computacion en la **Universidad Peruana de Ciencias Aplicadas (UPC)** durante el ciclo 2025-I.

Nace como respuesta a una brecha real: mientras la mayoria de plataformas educativas se enfocan en enseñar a programar IA, existe muy poca oferta para quienes simplemente buscan **entender que es la IA, como funciona y cuales son sus implicaciones eticas y sociales**, sin requerir bases tecnicas previas.

La propuesta consiste en ofrecer rutas de aprendizaje introductorias, claras y accesibles, con lenguaje sencillo, analogias visuales y ejemplos cotidianos, dirigidas a dos segmentos principales: estudiantes universitarios y profesionales que buscan contexto sobre las tecnologias emergentes.

---

## Tecnologias

Aplicacion web construida **sin frameworks**, usando unicamente:

- **HTML5** semantico
- **CSS3** (estilos, layout responsive, animaciones)
- **JavaScript** nativo (manejo del DOM, eventos, interactividad)
- **LocalStorage** para persistencia de datos del lado cliente
- **Netlify** para el despliegue
- **Git y GitHub** para el control de versiones y trabajo colaborativo

La distribucion del codigo refleja un balance entre las tres tecnologias principales: HTML 37%, CSS 32%, JavaScript 30%.

---

## Estructura del proyecto

```
SkillPathAI/
├── assets/                  # Imagenes, iconos y recursos estaticos
├── css/                     # Hojas de estilo
├── js/                      # Scripts de interactividad
├── index.html               # Landing page
├── home.html                # Home autenticado
├── dashboard.html           # Panel del usuario con progreso
├── iniciar_sesion.html      # Inicio de sesion
├── registrar_cuenta.html    # Registro de cuenta
├── perfil.html              # Perfil del usuario
├── mis_rutas.html           # Rutas de aprendizaje personales
├── lista_cursos.html        # Catalogo de cursos
├── info_all_cursos.html     # Detalle de cada curso
├── detalle_modulo.html      # Modulo de un curso con video y chat
├── ver_comunidad.html       # Comunidad y publicaciones
└── pagos.html               # Gestion de planes y pagos
```

---

## Funcionalidades principales

- **Landing page** con propuesta de valor y navegacion clara.
- **Sistema de autenticacion** (registro, inicio de sesion) basado en LocalStorage.
- **Dashboard** con seguimiento de progreso del usuario.
- **Mis Rutas:** creacion, edicion y eliminacion de rutas de aprendizaje personalizadas.
- **Catalogo de cursos** con barra de busqueda funcional.
- **Detalle de modulos** con reproductor de video y panel de chat colaborativo.
- **Comunidad** para publicaciones e interaccion entre usuarios.
- **Sistema de planes y pagos** (mockup).
- **Perfil editable** con barra de progreso de aprendizaje.

---

## Mis contribuciones

Como uno de los cuatro integrantes del equipo, fui responsable de las siguientes historias de usuario y funcionalidades:

**Modulo de Rutas de Aprendizaje:**
- **US05 - Crear ruta de aprendizaje:** formulario validado con titulo y descripcion, almacenamiento en LocalStorage y redireccion a la seccion "mis rutas".
- **US06 - Añadir cursos a una ruta:** logica para asociar cursos del catalogo a rutas personales, con validacion de suscripcion.
- **US07 - Eliminar ruta:** funcionalidad de eliminacion con confirmacion visual.

**Modulo de Busqueda:**
- **US08 - Barra de busqueda:** buscador funcional sobre cursos y rutas con manejo de coincidencias y mensaje cuando no hay resultados.

**Modulo de Perfil:**
- Seccion de perfil editable, donde el usuario puede actualizar sus datos y una breve descripcion personal.
- Implementacion de la barra de progreso para visualizar el avance en rutas y cursos.

**Trabajo colaborativo:**
- Responsable del control de versiones del proyecto (Git y GitHub).
- Gestion de ramas feature, pull requests y commits con convencion (feat, fix, etc.).

---

## Como ejecutar el proyecto localmente

Al ser un proyecto puramente frontend, no requiere instalacion de dependencias:

```bash
# Clonar el repositorio
git clone https://github.com/Lisztzz/SkillPathAI.git

# Entrar al directorio
cd SkillPathAI

# Abrir index.html en el navegador
# (recomendado servir con una extension tipo Live Server de VS Code
# para evitar problemas con rutas relativas)
```

Alternativamente, se puede ver la version desplegada en [skillpathia.netlify.app](https://skillpathia.netlify.app).

---

## Equipo

| Integrante | Rol principal |
|------------|---------------|
| Luis Enrique Aguilar Benites ([@Lisztzz](https://github.com/Lisztzz)) | Rutas de aprendizaje, busqueda, perfil, control de versiones |
| Abel Kevin Aguilar Caceres | Landing page, dashboard, planes y pagos |
| Alessandro Daniel Bravo Castillo | Catalogo de cursos, modulos, autenticacion |
| Enzo Daniel Medina Oropeza | Comunidad, panel de chat por modulo |

---

## Contexto academico

- **Universidad:** Universidad Peruana de Ciencias Aplicadas (UPC)
- **Curso:** 1ACC0237 - IHC y Programacion Web
- **Carrera:** Ciencias de la Computacion
- **Año:** 2025
- **Metodologia:** Scrum con sprints documentados (Sprint 1, 2 y 3)
- **Tablero de gestion:** Trello

---

## Licencia

Proyecto academico. Uso educativo.

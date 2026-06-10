<div align="center">

# 🌿 Bienestar Pro

**Plataforma web de bienestar integral — ejercicio, salud y seguimiento personal**

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://bienestarpro.vercel.app)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
[![HTML](https://img.shields.io/badge/HTML-72%25-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![JavaScript](https://img.shields.io/badge/JavaScript-24%25-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

[🌐 Ver Demo en Vivo](https://bienestarpro.vercel.app) • [📂 Repositorio](https://github.com/Dan178A/Tesis)

</div>

---

## 📸 Vista Previa

![Bienestar Pro - Vista Previa](screencapture-bienestarpro-vercel-app-2026-06-10-15_22_51.png)

---

## 📋 Descripción

**Bienestar Pro** es una plataforma web desarrollada como proyecto de tesis, orientada al bienestar integral del usuario. Permite el acceso a rutinas de ejercicio, gestión de perfil personal y seguimiento de actividad física, todo desde una interfaz moderna y responsiva.

---

## ✨ Características Principales

- 🏠 **Página de inicio** — Presentación de la plataforma y sus beneficios
- 💪 **Módulo de Ejercicios** — Biblioteca de rutinas y actividades físicas
- 👤 **Perfil de Usuario** — Vista personalizada del usuario autenticado
- 🔐 **Autenticación** — Sistema de login seguro con sesiones
- ⚡ **Deploy en Vercel** — Disponible en línea con CI/CD automático

---

## 🛠️ Tecnologías Utilizadas

| Categoría       | Tecnología                  |
|-----------------|-----------------------------|
| **Runtime**     | Node.js                     |
| **Framework**   | Express.js v4               |
| **Plantillas**  | Nunjucks v3                 |
| **Sesiones**    | express-session             |
| **Mensajes**    | connect-flash               |
| **Frontend**    | HTML5, CSS3, JavaScript     |
| **Deploy**      | Vercel                      |

---

## 📁 Estructura del Proyecto

```
Tesis/
├── templates/
│   ├── base.html          # Plantilla base (layout principal)
│   ├── index.html         # Página de inicio
│   ├── ejercicios.html    # Módulo de ejercicios
│   ├── login.html         # Página de inicio de sesión
│   └── perfil.html        # Perfil del usuario
├── static/                # Archivos estáticos (CSS, JS, imágenes)
├── index.js               # Servidor principal (Express)
├── package.json           # Dependencias del proyecto
├── vercel.json            # Configuración de despliegue
└── README.md
```

---

## 🚀 Instalación y Uso Local

### Prerrequisitos

- [Node.js](https://nodejs.org) v16 o superior
- npm v8 o superior

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/Dan178A/Tesis.git
cd Tesis

# 2. Instalar dependencias
npm install

# 3. Iniciar en modo desarrollo
npm run dev

# 4. Abrir en el navegador
# http://localhost:3000
```

---

## 🔐 Rutas Disponibles

| Ruta          | Descripción                          | Acceso      |
|---------------|--------------------------------------|-------------|
| `/`           | Página principal                     | Público     |
| `/ejercicios` | Módulo de rutinas y ejercicios       | Público     |
| `/login`      | Inicio de sesión                     | Público     |
| `/perfil`     | Perfil del usuario autenticado       | Protegido   |
| `/logout`     | Cerrar sesión                        | Protegido   |

---

## ☁️ Despliegue

El proyecto está configurado para desplegarse automáticamente en **Vercel**. Cada push a la rama `master` activa un nuevo deploy.

🔗 **URL de producción:** [https://bienestarpro.vercel.app](https://bienestarpro.vercel.app)

---

## 👨‍💻 Autor

Desarrollado por **[Dan178A](https://github.com/Dan178A)** como proyecto de Tesis.

---

<div align="center">
  Hecho con ❤️ para el bienestar de todos
</div>

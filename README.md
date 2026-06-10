# Bienestar Pro

Una plataforma web moderna dedicada al bienestar integral y la salud holística de sus usuarios.

![Bienestar Pro Screenshot](screencapture-bienestarpro-vercel-app-2026-06-10-15_22_51.png)

## 📋 Descripción

**Bienestar Pro** es una aplicación web desarrollada como proyecto de tesis que proporciona herramientas y recursos para el seguimiento, monitoreo y mejora del bienestar personal. La plataforma ofrece una interfaz intuitiva y accesible para que los usuarios gestionen su salud integral de manera efectiva.

### Características Principales

- 🔐 **Autenticación Segura**: Sistema de login con credenciales seguras
- 👤 **Perfiles de Usuario**: Gestión personalizada de datos del usuario
- 🏋️ **Ejercicios y Rutinas**: Catálogo completo de ejercicios de bienestar
- 📱 **Interfaz Responsiva**: Diseño adaptable a dispositivos móviles y escritorio
- ☁️ **Desplegado en la Nube**: Hosting en Vercel para máxima disponibilidad

## 🚀 Stack Tecnológico

| Tecnología | Versión | Propósito |
|-----------|---------|----------|
| **Node.js** | 18+ | Runtime de JavaScript |
| **Express.js** | 4.18.2 | Framework web minimalista |
| **Nunjucks** | 3.2.4 | Motor de plantillas HTML |
| **HTML5** | - | Estructura y semántica |
| **CSS3** | - | Estilos y diseño responsivo |
| **JavaScript (ES6+)** | - | Interactividad del lado del cliente |

### Dependencias Clave

- **express-session** (1.17.3): Gestión de sesiones de usuario
- **connect-flash** (0.1.1): Mensajes flash para retroalimentación al usuario
- **cookie-parser** (1.4.6): Procesamiento de cookies

## 📊 Composición del Proyecto

```
HTML        72.2%  ████████████████████████████
JavaScript  24.1%  ████████
CSS         3.7%   █
```

## 🔧 Instalación y Configuración

### Requisitos Previos

- Node.js 18 o superior
- npm 9 o superior
- Git

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/Dan178A/Tesis.git
   cd Tesis
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   
   Crea un archivo `.env` en la raíz del proyecto (opcional para desarrollo):
   ```env
   PORT=3000
   NODE_ENV=development
   SESSION_SECRET=tu_clave_secreta_aqui
   ```

4. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```
   
   O en modo producción:
   ```bash
   npm start
   ```

5. **Acceder a la aplicación**
   
   Abre tu navegador en `http://localhost:3000`

## 🔑 Credenciales de Acceso (Desarrollo)

Para acceder al panel de administrador:

- **Email**: `admin@bienestarpro.com`
- **Contraseña**: `Tesis2024*`

> ⚠️ **Nota de Seguridad**: Estas credenciales son solo para desarrollo. En producción, implementar un sistema de autenticación robusto con base de datos y hashing de contraseñas.

## 📁 Estructura del Proyecto

```
Tesis/
├── index.js                                    # Archivo principal de la aplicación
├── package.json                                # Dependencias y scripts
├── package-lock.json                           # Lock de versiones
├── vercel.json                                 # Configuración de despliegue
├── .gitignore                                  # Archivos ignorados en Git
├── .vercelignore                               # Archivos ignorados en Vercel
├── static/                                     # Archivos estáticos (CSS, JS, imágenes)
│   ├── css/                                    # Estilos CSS
│   ├── js/                                     # Scripts JavaScript
│   └── images/                                 # Imágenes y assets
└── templates/                                  # Plantillas Nunjucks (HTML)
    ├── index.html                              # Página principal
    ├── login.html                              # Formulario de login
    ├── perfil.html                             # Perfil del usuario
    └── ejercicios.html                         # Catálogo de ejercicios
```

## 🌐 Rutas Disponibles

| Ruta | Método | Descripción |
|------|--------|-------------|
| `/` | GET | Página principal |
| `/ejercicios` | GET | Catálogo de ejercicios |
| `/login` | GET | Formulario de login |
| `/login` | POST | Procesar credenciales |
| `/perfil` | GET | Panel de usuario (requiere autenticación) |
| `/logout` | GET | Cerrar sesión |

## ☁️ Despliegue

La aplicación está configurada para desplegarse en **Vercel** con el archivo `vercel.json`.

### URLs de Acceso

- **Producción**: [https://bienestarpro.vercel.app](https://bienestarpro.vercel.app)

### Pasos de Despliegue

1. Conectar repositorio a Vercel
2. Configurar variables de entorno en Vercel
3. Vercel detectará automáticamente la configuración en `vercel.json`
4. Desplegar automáticamente en cada push a `master`

## 🔒 Seguridad

- ✅ Session management con `express-session`
- ✅ CSRF protection mediante cookies seguras
- ✅ Content Security Policy configurado
- ✅ Control de caché para archivos estáticos
- ⚠️ Para producción: Implementar autenticación robusta, HTTPS obligatorio, y validación en backend

## 📝 Desarrollo

### Modo Desarrollo con Nodemon

```bash
npm run dev
```

Esto ejecutará la aplicación con reinicio automático al detectar cambios.

### Estructura del Código

- **Backend**: Express.js con manejo de sesiones
- **Frontend**: HTML + CSS + JavaScript vanilla
- **Templating**: Nunjucks para renderizado dinámico
- **Estático**: Servido desde carpeta `/static`

## 🤝 Contribuciones

Este proyecto es una tesis académica. Las contribuciones son bienvenidas para mejoras, reportes de bugs o sugerencias:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo licencia abierta. Consulta el archivo LICENSE para más detalles.

## 👨‍💻 Autor

**Dan178A** - Proyecto de Tesis para Bienestar Integral

- GitHub: [@Dan178A](https://github.com/Dan178A)
- Repositorio: [Tesis](https://github.com/Dan178A/Tesis)

## 📞 Soporte

Para preguntas o issues:

- Abre un issue en el [repositorio de GitHub](https://github.com/Dan178A/Tesis/issues)
- Consulta la documentación oficial de las dependencias utilizadas

## 🗺️ Roadmap

- [ ] Integración de base de datos (MongoDB/PostgreSQL)
- [ ] Autenticación con OAuth
- [ ] Dashboard analytics
- [ ] Sistema de notificaciones
- [ ] API REST completa
- [ ] Aplicación móvil nativa
- [ ] Integraciones con wearables
- [ ] Sistema de comunidad/redes sociales

---

**Última actualización**: Junio 2026  
**Estado**: En desarrollo activo  
**Versión**: 1.0.0

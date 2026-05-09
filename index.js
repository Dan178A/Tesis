const express = require('express');
const nunjucks = require('nunjucks');
const session = require('express-session');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();
app.set('trust proxy', 1);
const port = process.env.PORT || 3000;

// CONFIGURACIÓN DE NUNJUCKS
const env = nunjucks.configure(path.join(__dirname, 'templates'), {
    autoescape: true,
    express: app,
    noCache: true
});

// Helper para emular url_for de Flask
env.addGlobal('url_for', function(name, params) {
    if (name === 'static') {
        return '/static/' + params.filename;
    }
    const routes = {
        'home': '/',
        'ejercicios': '/ejercicios',
        'perfil': '/perfil',
        'login': '/login',
        'logout': '/logout'
    };
    return routes[name] || '/';
});

env.addGlobal('get_flashed_messages', function(options) {
    const messages = this.ctx.messages;
    if (!messages) return [];
    let result = [];
    for (let category in messages) {
        messages[category].forEach(msg => {
            if (options && options.with_categories) {
                result.push([category, msg]);
            } else {
                result.push(msg);
            }
        });
    }
    return result;
});

// MIDDLEWARES
app.use('/static', express.static(path.join(__dirname, 'public', 'static')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    secret: process.env.SESSION_SECRET || 'Tesis2024*SecretKey',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: process.env.NODE_ENV === 'production' }
}));
app.use(flash());

// Middleware para pasar mensajes flash y sesión a todas las vistas
app.use((req, res, next) => {
    res.locals.messages = req.flash();
    res.locals.session = req.session;
    next();
});

// CREDENCIALES ÚNICAS
const USER_MASTER = "admin@bienestarpro.com";
const PASS_MASTER = "Tesis2024*";

// RUTAS
app.get('/', (req, res) => {
    res.render('index.html');
});

app.get('/ejercicios', (req, res) => {
    res.render('ejercicios.html');
});

app.get('/login', (req, res) => {
    res.render('login.html');
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    
    if (email === USER_MASTER && password === PASS_MASTER) {
        req.session.user_active = true;
        req.session.user_email = email;
        res.redirect('/perfil');
    } else {
        req.flash('danger', 'Acceso denegado. Credenciales incorrectas.');
        res.redirect('/login');
    }
});

app.get('/perfil', (req, res) => {
    if (!req.session.user_active) {
        return res.redirect('/login');
    }
    res.render('perfil.html');
});

app.get('/logout', (req, res) => {
    req.session.destroy();
    // Nota: El flash después del destroy puede no persistir si no se maneja bien,
    // pero para este ejemplo es suficiente redireccionar.
    res.redirect('/login');
});

// Manejador de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal en el servidor.');
});

if (process.env.NODE_ENV !== 'production') {
    app.listen(port, () => {
        console.log(`Servidor corriendo en http://localhost:${port}`);
    });
}

module.exports = app;

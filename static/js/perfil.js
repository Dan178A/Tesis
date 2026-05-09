// --- BASE DE DATOS DE RUTINAS ---
const rutinas = {
    cuello: [
        { nombre: "Péndulo Lateral", gif: "pendulo_lateral.jpg", desc: "Deja caer la oreja hacia el hombro lateralmente para elongar el cuello suavemente." },
        { nombre: "Mirada al Horizonte", gif: "mirada_horizonte.gif", desc: "Gira la cabeza lentamente hacia los lados como si miraras por encima del hombro." },
        { nombre: "El Sí Profundo", gif: "si_profundo.gif", desc: "Lleva el mentón al pecho para estirar la nuca y regresa a la posición natural." }
    ],
    manos: [
        { nombre: "Saludo Inverso", gif: "saludo_inverso.gif", desc: "Junta las palmas frente al pecho y baja las manos lentamente hasta sentir el estiramiento." },
        { nombre: "Estiramiento Teclador", gif: "estiramiento_teclador.jpg", desc: "Estira el brazo con la palma al frente y presiona los dedos hacia atrás con la otra mano." },
        { nombre: "Rotación Órbita", gif: "rotacion_orbita.jpg", desc: "Realiza giros circulares lentos con los puños cerrados para liberar tensión articular." }
    ],
    espalda: [
        { nombre: "Apertura de Pecho", gif: "apertura_pecho.jpg", desc: "Entrelaza las manos detrás de la espalda y estira hacia atrás para corregir postura." },
        { nombre: "Abrazo de Oso", gif: "abrazo_oso.gif", desc: "Cruza los brazos intentando tocar tus omóplatos para estirar la espalda alta." },
        { nombre: "Escuadra Lumbar", gif: "escuadra_lumbar.gif", desc: "Cruza una pierna sobre otra (formando un '4') y rota el tronco suavemente." }
    ]
};

let rutinaActual = [];
let indiceEjercicio = 0;
let tiempo = 30;
let intervalo;

document.addEventListener('DOMContentLoaded', function() {
    const modalObj = new bootstrap.Modal(document.getElementById('modalEjercicio'));
    const seccionRutina = document.getElementById('seccionRutina');
    const zonaSeleccionada = document.getElementById('zonaSeleccionada');
    const listaEjercicios = document.getElementById('listaEjercicios');

    document.getElementById('formPerfil').addEventListener('submit', function(e) {
        e.preventDefault();
        if (this.checkValidity()) {
            const zona = document.getElementById('valSintoma').value;
            rutinaActual = rutinas[zona];
            indiceEjercicio = 0;

            seccionRutina.style.display = 'block';
            zonaSeleccionada.innerText = zona.toUpperCase();
            listaEjercicios.innerHTML = '';
            rutinaActual.forEach((ej, index) => {
                const li = document.createElement('li');
                li.className = 'list-group-item bg-dark border-secondary';
                li.innerHTML = `<strong>${index + 1}.</strong> ${ej.nombre} - <span class=\"text-secondary\">${ej.desc}</span>`;
                listaEjercicios.appendChild(li);
            });
            seccionRutina.scrollIntoView({ behavior: 'smooth', block: 'start' });

            cargarEjercicio();
            modalObj.show();
        }
        this.classList.add('was-validated');
    });

    function cargarEjercicio() {
        const ej = rutinaActual[indiceEjercicio];
        document.getElementById('tituloEjercicio').innerText = ej.nombre;
        document.getElementById('gifEjercicio').src = `/static/img/${ej.gif}`;
        document.getElementById('gifEjercicio').alt = ej.nombre;
        document.getElementById('instruccionEjercicio').innerText = ej.desc;
        document.getElementById('timer').innerText = "00:10";
        document.getElementById('timer').classList.remove('text-success');
        document.getElementById('btnAccion').innerText = "COMENZAR";
        document.getElementById('btnAccion').className = "btn btn-danger btn-lg fw-bold rounded-pill";
        tiempo = 10;
    }

    function controlarEjercicio() {
        const btn = document.getElementById('btnAccion');
        if (btn.innerText === "COMENZAR") {
            btn.disabled = true;
            btn.innerText = "EJERCITANDO...";
            intervalo = setInterval(() => {
                tiempo--;
                document.getElementById('timer').innerText = `00:${tiempo < 10 ? '0' + tiempo : tiempo}`;
                if (tiempo <= 0) {
                    clearInterval(intervalo);
                    btn.disabled = false;
                    document.getElementById('timer').classList.add('text-success');
                    if (indiceEjercicio < rutinaActual.length - 1) {
                        btn.innerText = "SIGUIENTE EJERCICIO";
                        btn.className = "btn btn-success btn-lg fw-bold rounded-pill";
                    } else {
                        btn.innerText = "FINALIZAR RUTINA";
                        btn.className = "btn btn-primary btn-lg fw-bold rounded-pill";
                    }
                }
            }, 1000);
        } else if (btn.innerText === "SIGUIENTE EJERCICIO") {
            indiceEjercicio++;
            cargarEjercicio();
        } else {
            modalObj.hide();
            alert("¡Felicidades! Rutina completada con éxito.");
            location.reload();
        }
    }

    document.getElementById('btnAccion').addEventListener('click', controlarEjercicio);
});

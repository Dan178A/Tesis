// --- LÓGICA PARA MODAL DE EJERCICIO INDIVIDUAL ---
const modalObj = new bootstrap.Modal(document.getElementById('modalEjercicio'));
let tiempo = 10;
let intervalo;

function abrirModalEjercicio(nombre, gif, desc) {
    document.getElementById('tituloEjercicio').innerText = nombre;
    document.getElementById('gifEjercicio').src = gif;
    document.getElementById('gifEjercicio').alt = nombre;
    document.getElementById('instruccionEjercicio').innerText = desc;
    document.getElementById('timer').innerText = "00:10";
    document.getElementById('timer').classList.remove('text-success');
    document.getElementById('btnAccion').innerText = "COMENZAR";
    document.getElementById('btnAccion').className = "btn btn-danger btn-lg fw-bold rounded-pill";
    tiempo = 10;
    modalObj.show();
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
                btn.innerText = "FINALIZAR";
                btn.className = "btn btn-primary btn-lg fw-bold rounded-pill";
            }
        }, 1000);
    } else {
        modalObj.hide();
    }
}

document.getElementById('btnAccion').addEventListener('click', controlarEjercicio);

// Asignar evento a cada tarjeta de ejercicio
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', function() {
            const img = card.querySelector('img');
            const nombre = card.querySelector('h5') ? card.querySelector('h5').innerText : 'Ejercicio';
            const gif = img ? img.src : '';
            const desc = card.querySelector('p.small') ? card.querySelector('p.small').innerText : '';
            abrirModalEjercicio(nombre, gif, desc);
        });
    });
});

document.getElementById('modalEjercicio').addEventListener('hidden.bs.modal', function () {
    clearInterval(intervalo);
    tiempo = 10;
});
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', function() {
            const img = card.querySelector('img');
            const titulo = card.querySelector('h5');
            const parrafo = card.querySelector('p.small');

            const nombre = titulo ? titulo.innerText : 'Ejercicio';
            const gif = img ? img.src : '';
            const desc = parrafo ? parrafo.innerText : '';
            
            abrirModalEjercicio(nombre, gif, desc);
        });
    });
});
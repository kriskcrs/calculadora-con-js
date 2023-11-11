const displayVanterior = document.getElementById('vanterior');
const displayVactual = document.getElementById('vactual');
const botonesNum = document.querySelectorAll('.numero');
const botonOperador = document.querySelectorAll('.operador');

const display = new Display(displayVanterior, displayVactual);

console.log("Creado por Cristian Cáceres")
botonesNum.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});


botonOperador.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value));
});

document.addEventListener('keydown', (event) => {
    const teclaPresionada = event.key;
    console.log(teclaPresionada);
    if (/[0-9]/.test(teclaPresionada)) {
        display.agregarNumero(teclaPresionada);
    } else if (teclaPresionada === '+') {
        display.computar('sumar');
    } else if (teclaPresionada === '-') {
        display.computar('restar');
    } else if (teclaPresionada === '*') {
        display.computar('multiplicacion');
    }
    else if (teclaPresionada === '/') {
        display.computar('division');
    } else if (teclaPresionada === 'Enter') {
        display.computar('igual');
    } else if (teclaPresionada === 'Backspace') {
        display.borrar();
    }
});


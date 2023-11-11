class Display {

   constructor(displayVanterior, displayVactual) {
        this.displayVactual = displayVactual;
        this.displayVanterior = displayVanterior;
        this.calculos = new Calculos();
        this.tipoOperacion = undefined;
        this.vActual = '';
        this.vAnterior = '';
    }

    agregarNumero(numero) {
        if (numero === '.' && this.vActual.includes('.')) return;
        this.vActual = this.vActual.toString() + numero.toString();
        this.imprimir();
    }

    imprimir() {
        this.displayVactual.textContent = this.vActual;
        this.displayVanterior.textContent = this.vAnterior;
    }

    borrarUltimo() {
        this.vActual = this.vActual.toString().slice(0, -1);
        this.imprimir();
    }

    borrar() {
        this.vActual = '';
        this.vAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimir();
    }

    calcular() {
        const vAnterior = parseFloat(this.vAnterior);
        const vActual = parseFloat(this.vActual);

        console.log(vAnterior + vActual + this.tipoOperacion);
        if (isNaN(vActual) || isNaN(vAnterior) || !this.tipoOperacion) return;
   
        this.vActual = this.calculos[this.tipoOperacion](vAnterior, vActual);
     
         this.tipoOperacion = undefined;
        this.imprimir();
    }

    computar(tipo) {
        console.log(tipo)
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.vAnterior = this.vActual || this.vAnterior;
        if (this.vActual === 0) {
            this.vAnterior = '0';
            this.vActual = '';
            this.imprimir();
        } else {
            this.vActual = '';
            this.imprimir();
        }
    }





}
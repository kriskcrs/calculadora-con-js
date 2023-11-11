class Calculos{
    sumar(v1,v2){
        return v1+v2;
    }

    restar(v1,v2){
        return v1-v2;
    }

    multiplicacion(v1,v2){
        return v1*v2;
    }

    division(v1,v2){
        if(v2===0){
            return "Indefinido";
        }
        return v1/v2;
    }

    potencia(base,exponente){
        return Math.pow(base,exponente);
    }
  
}
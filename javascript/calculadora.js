let finalizarOperacion = false;
let defaultValue = false;

let numberOne = null;
let numberTwo = null;

let operacionesMatematicas = seleccionarOperacion();

if(operacionesMatematicas == 0){
    alert("Ha cancelado la operacion");
}
else {
    while(!finalizarOperacion && !defaultValue ) {
        if(!operacionesMatematicas){
            alert("Por favor ingrese un numero");
        }
        else {
            if(operacionesMatematicas < 5 ) {
                numberOne = parameterOne();
                numberTwo = parameterTwo();
            }
            switch (operacionesMatematicas) {
                
                case 1:
                    finalizarOperacion = true;
                    resultado = sumar(numberOne,numberTwo);

                    alert("El resultado es: "+resultado);
                    break;
                case 2:
                    finalizarOperacion = true;
                    resultado = restar(numberOne,numberTwo);

                    alert("El resultado es: "+resultado);
                    break;
                case 3:
                    finalizarOperacion = true;
                    resultado = multiplicar(numberOne,numberTwo);
                    
                    alert("El resultado es: "+resultado);
                    break;
                case 4:
                    finalizarOperacion = true;
                    resultado = dividir(numberOne,numberTwo);

                    alert("El resultado es: "+resultado);
                    break;
                case 5:
                    finalizarOperacion = true;

                    alert("Gracias por utilizar nuestra plataforma, hasta luego!");
                    break;
                default:
                    defaultValue = true;
                    alert("Ingrese una opcion valida");
            }
        }
    }
}

function seleccionarOperacion() {
    let operacionSeleccionada = parseInt(
        prompt(
          "Ingrese que operación desea realizar:\n" +
            "1 Sumar\n" +
            "2 Restar\n" +
            "3 Multiplicar\n" +
            "4 Dividir\n" +
            "5 finalizarOperacion\n"
        )
      );
    return operacionSeleccionada;
}

function parameterOne() {
    let numberOne = Number(prompt("Ingresa el primer numero"));
    return numberOne;
}

function parameterTwo() {
    let numberTwo = Number(prompt("Ingresa el segundo numero"));
    return numberTwo;
}

function sumar(numberOne, numberTwo) {
    return parseInt(numberOne) + parseInt(numberTwo);
}

function restar(numberOne, numberTwo) {
    return parseInt(numberOne) - parseInt(numberTwo);
}

function multiplicar(numberOne, numberTwo) {
    return parseInt(numberOne) * parseInt(numberTwo);
}

function dividir(numberOne, numberTwo) {
    return parseInt(numberOne) / parseInt(numberTwo);
}

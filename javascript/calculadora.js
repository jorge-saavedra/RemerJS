let finalizarOperacion = false;
let defaultValue = false;

let numberOne = null;
let numberTwo = null;

let operacionesMatematicas = Number(
  prompt(
    "Ingrese que operación desea realizar:\n" +
      "1 Sumar\n" +
      "2 Restar\n" +
      "3 Multiplicar\n" +
      "4 Dividir\n" +
      "5 finalizarOperacion\n"
  )
);
if(operacionesMatematicas == 0){
    alert("Ha cancelado la operacion");
}
else {
    while(!finalizarOperacion && !defaultValue ) {
        if(!operacionesMatematicas){
            alert("Por favor ingrese un numero");
        }
        else {
            switch (operacionesMatematicas) {
                case 1:
                    numberOne = parameterOne();
                    numberTwo = parameterTwo();

                    resultado = sumar(numberOne,numberTwo);
                    alert("El resultado es: "+resultado);

                    finalizarOperacion = true;
                    break;
                case 2:
                    numberOne = parameterOne();
                    numberTwo = parameterTwo();

                    resultado = restar(numberOne,numberTwo);
                    alert("El resultado es: "+resultado);

                    finalizarOperacion = true;
                    break;
                case 3:
                    numberOne = parameterOne();
                    numberTwo = parameterTwo();

                    resultado = multiplicar(numberOne,numberTwo);
                    alert("El resultado es: "+resultado);

                    finalizarOperacion = true;
                    break;
                case 4:
                    numberOne = parameterOne();
                    numberTwo = parameterTwo();
                    
                    resultado = dividir(numberOne,numberTwo);
                    alert("El resultado es: "+resultado);
                   
                    finalizarOperacion = true;
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

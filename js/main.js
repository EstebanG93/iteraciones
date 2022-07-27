alert("¡Bienvenido a la calculadora!");
let numero1 = parseFloat(prompt("Ingrese primer número"));

while(isNaN(numero1)){
    alert("DEBE INGRESAR UN NÚMERO");
    numero1 = parseFloat(prompt("Debe ingresar un número:"));
}
console.log("Primer número: "+numero1);

let operation = prompt("Ingrese la operación inicial: \n+ (Suma)\n- (Resta)\n* (Multiplicación)\n/ (División)\n^ (Potenciación)");

while(operation != "="){
    let numero2 = parseFloat(prompt("Infrese el segundo número:"));
    while(isNaN(numero2)){
        alert("DEBE INGRESAR UN NÚMERO");
        numero2 = parseFloat(prompt("Debe ingresar un número:"));
    }
    console.log("Segundo número: "+numero2);
    switch(operation){
        case "+":
            console.log("Ha elegido "+operation);
            numero1=numero1+numero2;
            alert("El resultado es: "+numero1);
            break;
        case "-":
            console.log("Ha elegido "+operation);
            numero1=numero1-numero2;
            alert("El resultado es: "+numero1);
            break;
        case "*":
            console.log("Ha elegido "+operation);
            numero1=numero1*numero2;
            alert("El resultado es: "+numero1);
            break;
        case "/":
            console.log("Ha elegido "+operation);
            numero1=numero1/numero2;
            alert("El resultado es: "+numero1);
            break;
        case "^":
            console.log("Ha elegido "+operation);
            let aux = numero1;
            for(let control=1; control<numero2; control++){
                numero1=numero1*aux;
                // console.log("Valor potencia: "+control+"\nValor resultado actual: "+numero1);
            }
            alert("El resultado es: "+numero1);
            break;
        default:
            alert("DEBE INGRESAR UNA OPERACIÓN VÁLIDA!\nEl segundo número deberá volver a ingresarse");
            break;
    }
    console.log("Subtotal: "+numero1);
    operation = prompt("Ingrese la operación inicial: \n+ (Suma)\n- (Resta)\n* (Multiplicación)\n/ (División)\n^ (Potenciación)\n= (Resultado y salir)");
}
alert("El resultado es: "+numero1);
alert("Gracias por consultarnos\nFelíz día!");
console.log("El resultado es: "+numero1);
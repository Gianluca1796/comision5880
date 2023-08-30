// function saludar(){
//     console.log("Hola desde una función")
// }


// saludar()



// let resultado = 0;


// function sumar(numero1,numero2){
//     resultado = numero1 + numero2
// }

// function mostrarResultado(resultadoAMostrar){
//     console.log(resultadoAMostrar)
// }


// sumar(6,3)
// mostrarResultado(resultado)




// function sumar(numero1,numero2){
//     let resultadoLocal = numero1 + numero2
//     return resultadoLocal
// }

// let resultadoGlobal = sumar(6,3) 


// console.log(resultadoGlobal)


// EJEMPLO DE CALCULADORA MICRODESAFIO //

function operacion(num1,num2,operador){
    switch(operador){
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
    }
}


function calculadoraUsuario(){
    let num1 = parseFloat(prompt("Ingrese el primer número"))
    let num2 = parseFloat(prompt("Ingrese el segundo número"))

    while(isNaN(num1) || isNaN(num2)){
        alert("Ingrese solo números")
        num1 = parseFloat(prompt("Ingrese el primer número"))
        num2 = parseFloat(prompt("Ingrese el segundo número"))
    }

    let operador = prompt("Ingrese un operador (+, -, *, /)")

    while(operador != "+" && operador != "-" && operador != "*" && operador != "/"){
        alert("Ingrese un operador valido")
        operador = prompt("Ingrese un operador (+, -, *, /)")
    }

    let resultado = operacion(num1,num2,operador)

    alert(`El resultado es ${resultado}`)

}

calculadoraUsuario()


// const suma  = function (a, b) {return a + b}

// console.log(suma(6,3))



// const suma = (a, b) => { return a + b }


// const resta = (a, b) =>  a - b ;


// let numero1 = parseFloat(prompt("Ingrese el primero numero"))
// let numero2 = parseFloat(prompt("Ingrese el segundo numero"))


// console.log(resta(numero1,numero2))

// const IVA = 1.21

// let precioProducto = parseFloat(prompt("Ingrese el precio del producto sobre el cual quieres calcular el IVA"))


// const precioConIva = (imp, iva) => imp * iva;


// console.log(precioConIva(precioProducto,IVA))



// const valorM2 = 31.83; //valor fijo del seguro por Metro 2
// const comision = 1.025; //comisión del 2.5%

// const M2 = prompt("Ingresa los Metros cuadrados de la propiedad a cotizar un seguro:");

// const calcularPoliza = (autito) => autito * valorM2 * comision;

// const valorPoliza = calcularPoliza(M2);

// console.log("El costo de la póliza es: $", valorPoliza);
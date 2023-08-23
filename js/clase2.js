true // Verdadero
false // falso



// let edadPermitda = parseInt(prompt("¿Qué edad tienes?"))

// if (edadPermitda >= 18) {
//     alert("Bienvenido al boliche")
// }else{
//     alert("Debes ser mayor de 18 años para poder ingresar")
// }


// if(edadPermitda >= 25){

//     alert("Puedes ingresar al VIP")

// }else if(edadPermitda >= 18){

//     alert("Puedes ingresar al boliche")

// }else{
//     alert("No puedes ingresar")
// }



// let precioProducto = 180;


// if(precioProducto < 20){
//     alert("El producto esta en oferta")
// }else if(precioProducto < 50){
//     alert("El prodcuto no esta en oferta")
// }else if(precioProducto < 100){
//     alert("El producto es caro")
// }else{
//     alert("El producto está muy caro")
// }


// let nombreIngresado   = prompt("Ingresar nombre");
// let apellidoIngresado = prompt("Ingresar apellido");

// if((nombreIngresado !="") || (apellidoIngresado !="")) {
//     alert("Nombre: " + nombreIngresado + "\nApellido: " + apellidoIngresado); 
// } else {
//     alert("Error: Ingresar nombre y apellido");
// }



// let horario = parseInt(prompt("¿Qué hora es?")) 



// if(horario >= 6 && horario < 12){
//     alert("¡Buenos días!")
// }else if(horario >= 12 && horario < 20){
//     alert("¡Buenas tardes!")
// }else{
//     alert("¡Buenas noches!")
// }


// let nombreUsuario = prompt("Ingrese su nombre de usuario").toLowerCase()
// let usuario1 = "susana"



// console.log(nombreUsuario)
// if(nombreUsuario == usuario1 || nombreUsuario == "agustin"){
//     alert("Ustdes son alumnos de Coder")
// }else{
//     alert("Nombre de usuario incorrecto")
// }



//EJEMPLO CICLO FOR

// for(desde, hasta, actualizacion){
//     Codigo a ejecutar
// }


// for(let i = 0; i<= 5; i++){
//     console.log(i)
// }

// Solicitamos un valor al usuario
// let ingresarNumero = parseInt(prompt("Ingresar Numero"));

// // En cada repetición, calculamos el número ingresado X el número de repetición (i)
// for (let i = 0; i <= 10; i++) {
//     let resultado = ingresarNumero * i ;
//     alert(ingresarNumero + " X " + i + " = " + resultado);
// }


// for(let i =1 ;i <= 5; i++){
//     let nombre = prompt(`Ingrese el nombre ${i}`) 
//     console.log(nombre)
// }



// let usuario = prompt("Ingrese un nombre de usuario o 'salir' para cancelar")


// while(usuario != "salir"){
//     alert(`Usuario: ${usuario} ingresado correctamente`)
//     usuario = prompt("Ingrese otro nombre de usuario o 'salir' para cancelar")
// }


// let nombre = prompt("Ingrese el nombre").toUpperCase()

// while (nombre != "ESC") {
//     switch (nombre) {
//         case "ANA":
//             alert("Bienvenida Ana!")
//             break;
//         case "JUAN":
//             alert("Bienvenido Juan!")
//             break;
//         default:
//             alert(`Usuario desconocido, pero igualmente sos bienvenido ${nombre}`)
//             break;
//     }
//     nombre = prompt("Ingrese un nuevo nombre o 'ESC' para salir").toUpperCase()
// }

// let numeroIngresado = parseInt(prompt("Ingrese un numero"))

// if(isNaN(numeroIngresado)){
//     alert("Por favor, ingresa un número")
// }else{
//     if(numeroIngresado % 2 === 0){
//         alert(`${numeroIngresado} es par`)
//     }else{
//         alert(`${numeroIngresado} es impar`)
//     }
// }


let numerosPares = 0;
let numerosImpares = 0;
let flag = true;


while(flag){
    let entrada = prompt("Ingrese un número o ingrese 'salir' para terminar").toLowerCase()
    if(entrada === "salir"){
        flag = false;
    }else{
        let numero = parseInt(entrada)
        if(isNaN(numero)){
            alert("ingrese un numero valido")
        }else{
            if(numero % 2 === 0){
                numerosPares++
            }else{
                numerosImpares++
            }
        }
    }
}

console.log(`La cantidad de numeros pares son ${numerosPares}`)
console.log(`La cantidad de numeros impares son ${numerosImpares}`)

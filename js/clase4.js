// const numeros = [1,2,30,55,120]
// const nombres = ["Nicolas", "Emiliano", "Franco"]
// const suma = numeros[2] + numeros[3]
// console.log(suma)
// console.log(numeros)


// for (let i = 0; i < numeros.length; i++) {

//     const multiplicado = numeros[i] * 2

//     alert(multiplicado)

// }


//METODO PUSH
// numeros.push("Juan")
// console.log(numeros)

// //METODO UNSHIFT
// numeros.unshift("Primer elemento")
// console.log(numeros)

// //METODO POP 
// let elementoEliminado = numeros.pop()
// console.log(elementoEliminado)

// //METODO SHIFT
// numeros.shift()
// console.log(numeros)


// //METODO JOIN
// let nombresConvertidos = nombres.join("/")
// console.log(nombresConvertidos)

// //METODO INCLUDES
// console.log(nombres.includes("Maria"))


// const arrayNombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']
// arrayNombres.sort().reverse()
// console.log(arrayNombres) 


// const productos = ["notebook", "monitor", "mouse"]


// function cargarProducto() {
//     let nombreProducto = prompt("Ingrese el nombre del producto a agregar")
//     if (productos.includes(nombreProducto)) {
//         alert("El producto ya existe!")
//     } else {
//         productos.push(nombreProducto)
//         alert("El producto se agregó correctamente")
//     }
// }

// let flag = true

// while (flag) {
//     cargarProducto()
//     flag = confirm("¿Quieres seguir agregando productos?")
//     if (!flag) {
//         mostrarProductos()
//     }
// }


// function mostrarProductos() {
//     let productosAMostrar = productos.join(" / ")
//     alert(`Los productos a mostrar son: ${productosAMostrar}`)
// }




const notebook = {
    nombre: "Notebook HP",
    precio: 120000,
    stock: 200
}
const monitor = {
    nombre: "Monitor",
    precio: 75000,
    stock: 30
}
const mouse = {
    nombre: "Mouse",
    precio: 4000,
    stock: 20
}

const productos = 
[
    notebook,
    monitor,
    mouse
]

const IVA = 1.21

for (const producto of productos){
    producto.precio = producto.precio * IVA
    console.log(producto)
}



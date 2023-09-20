// function mayorQue(n){
//     return (m) => m > n
// }

// let mayorQueDiez = mayorQue(10)
// console.log(mayorQueDiez(12))
// console.log(mayorQueDiez(6))

// //Traducción de como quedaría la función mayorQueDiez
// // mayotQueDiez = (m) => m > 10


// const numeros = [1,2,3,4,5,6,7]
// const duplicados = []

// function porCadaUno(array,funcion){
//     for (let i = 0; i < array.length; i++){
//         funcion(array[i])
//     }
// }

// porCadaUno(numeros,console.log)

// // for (let i = 0; i < numeros.length; i++){
// //     console.log(numeros[i])
// // }


// porCadaUno(numeros,(num) => {
//     duplicados.push(num * 2)
// })

// console.log(duplicados)


// ***  EJEMPLO FOREACH *** //
// numeros.forEach((num) => {
//     console.log(`El número en esta iteracion es ${num}`)
// })


// const alumno1 = {
//     notas: [1,3,10]
// }


// alumno1.notas.forEach((nota) => {
//     console.log(nota)
// })
// const cursosComprados = []
// const cursos = [
//     {
//         nombre:"JavaScript",
//         precio: 1500,
//         categoria: "Programacion"
//     },
//     {
//         nombre:"React JS",
//         precio: 2500,
//         categoria: "Programacion"
//     },
//     {
//         nombre:"Next JS",
//         precio: 2000,
//         categoria: "Programacion"
//     },
//     {
//         nombre:"Marketing de redes",
//         precio: 3000,
//         categoria: "Marketing"
//     },
//     {
//         nombre:"Facebook ADS",
//         precio: 3500,
//         categoria: "Marketing"
//     }
// ]
// EJEMPLO FIND Y FILTER

// let nombreDelCurso = prompt("¿A que curso quieres inscribirte?")

// let cursoEncontrado = cursos.find((curso) => curso.nombre === nombreDelCurso)
// cursosComprados.push(cursoEncontrado)
// console.log(cursosComprados)
// console.log(cursoEncontrado)
// alert (`¡Genial! Te haz inscripto al curso de ${cursoEncontrado.nombre}`)


// let nombreCursos = prompt("¿Que cursos deseas ver?")
// let cursosEncontrados = cursos.filter((curso) => curso.categoria === nombreCursos)

// console.log(cursosEncontrados)


//EJEMPLO SOME

// console.log(cursos.some((curso) => curso.nombre == "Desarrollo Web"))


//EJEMPLO MAP

// const arrayNombres = cursos.map((curso) => curso.nombre)
// console.log(arrayNombres)

// const porcentajeDeAumento = 1.25

// const cursosConAumento = cursos.map((curso) => {
//     return {
//         nombre: curso.nombre,
//         precio: curso.precio * porcentajeDeAumento,
//         categoria:curso.categoria
//     }
// })

// console.log(cursosConAumento)
// console.log(cursos)

// EJEMPLO REDUCE
// const total = cursos.reduce((acc,ite) => acc + ite.precio, 0)

// console.log(total)


//EJEMPLO SORT

// cursos.sort((objetoA,objetoB)=>{
//     if(objetoA.precio > objetoB.precio){
//         return -1
//     }else if (objetoA.precio < objetoB.precio){
//         return 1
//     }else{
//         return 0
//     }
// })

// console.log(cursos)


// const db = []

// class Producto{
//     constructor(codigo,descripcion,stock,precioU){
//         this.codigo = codigo;
//         this.descripcion = descripcion;
//         this.stock = stock;
//         this.precioU = precioU
//     }
// }

// function crearProductos () {
//     let codigo = parseInt(prompt("Ingrese el código del producto"))
//     let descripcion = prompt("Ingrese la descipcion")
//     let stock = parseInt(prompt("Ingrese el stock del prod."))
//     let precioU= parseFloat(prompt("Ingrese el precio"))


//     const productoCreado = new Producto(codigo,descripcion,stock,precioU)

//     db.push(productoCreado)

//     console.table(db)
// }

//     crearProductos()



class Hamburguesa {
    constructor(nombre, precio, ingredientes, numeroCombo) {
        this.nombre = nombre;
        this.precio = precio;
        this.ingredientes = ingredientes;
        this.numeroCombo = numeroCombo
    }
}
const hamburguesas = []

hamburguesas.push(new Hamburguesa("Krusty Burger", 150.00, ['Carne', 'Queso'], 1))
hamburguesas.push(new Hamburguesa("Krusty Burger Doble", 100.00, ['Carne', 'Queso', 'Panceta'], 2))
hamburguesas.push(new Hamburguesa("Krusty Pollo", 150.00, ['Pollo', 'Queso'], 3))
hamburguesas.push(new Hamburguesa("Krusty Mega balde de Pollo", 140.00, ['Pollo', 'Queso',
    'Aderezo'
], 4))
hamburguesas.push(new Hamburguesa("Super Krusty", 150.00, ['Carne', 'Queso', 'huevo'], 5))
hamburguesas.push(new Hamburguesa("Super Krusty Doble", 180.00, ['Carne', 'Queso', 'huevo'], 6))
hamburguesas.push(new Hamburguesa("Super Krusty Triple", 120.00, ['Carne', 'Queso', 'huevo'], 7))
hamburguesas.push(new Hamburguesa("Krusty Vegan", 125.00, ['Espinaca', 'Soja'], 8))


// const hamburguesasMillonarias = hamburguesas.filter((hamburguesa) => hamburguesa.precio > 200.00)
// console.log(hamburguesasMillonarias)


// if (hamburguesasMillonarias.length > 0) {
//     console.table(hamburguesasMillonarias)
// } else {
//     console.log("no hay hamburguesas tan caras")
// }

const hamburgesasDobles = hamburguesas.filter((hamburguesa) => hamburguesa.nombre.includes("Doble"))

if(hamburgesasDobles.length > 0){
    console.table(hamburgesasDobles)
}else{
    console.warn("No vendemos hamburguesas dobles")
}
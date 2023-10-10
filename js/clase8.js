// console.log("hola")

// console.log("chau")


// let contador = 0

// const intervalo = setInterval(() => {
//     contador++
//     console.log(contador)
//     console.log("Accion a realizar 5 veces")
//     if(contador === 5){
//         clearInterval(intervalo)
//         console.log("Se termino")
//     }
// }, 1000);




// const tareaFutura = (res) => {
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=> {
//             // if(res === true){
//             //     resolve("Promesa Resuelta")
//             // }else{
//             //     reject("Promesa rechazada")
//             // }
//             //Es lo mismo con diferente sintaxis
//             res ? resolve("Promesa resuelta") : reject("Promesa rechazada")
//         },5000)
//     })
// }

// const valorDePeticion = false

// tareaFutura(valorDePeticion)
// .then((respuesta)=> {
//     console.log(respuesta)
// })
// .catch((respuesta)=> {
//     console.log(respuesta)
// })
// .finally(()=> {
//     console.log("Proceso finalizado")
// })



// const postList = document.getElementById("post-list")
// const URL = 'https://jsonplaceholder.typicode.com/posts'
// const fetchPosts = () => {
//     fetch(URL)
//     .then(response => {
//         if(!response.ok){
//             throw new Error ("Error al traer nuestros post")
//         }

//         return response.json()
//     })
//     .then(posts => {
//         const postsHTML = posts.map(post => 
//         `
//         <div>
//         <h2>${post.title}</h2>
//         <p>${post.body}</p>
//         </div>
//         `)
//         postList.innerHTML = postsHTML
//     })
// }

// fetchPosts()


// const resp = fetch('https://jsonplaceholder.typicode.com/posts')
// console.log(resp) 

// const pedir = async () => {
//     const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
//     console.log(resp)
// }

// pedir()


const contenedorProductos = document.getElementById("contenedor")

// const pedirProductos = async () => {
//     const resp = await fetch(URL)
//     const data = await resp.json()
//     console.log(data)
//     data.forEach((prod) => {
//         const div = document.createElement("div")
//         div.innerHTML = `
//         <div class="card-body">
//             <h5 class="card-title">Nombre: ${prod.nombre}</h5>
//             <p class="card-text">Precio: ${prod.precio}</p>
//             <p class="card-text"> Stock: ${prod.stock}</p>
//             <a href="#" class="btn btn-primary">Comprar</a>
//             </div>
//         `
//         contenedorProductos.appendChild(div)
//     })
// }

// const objeto = {
//     user: "hola",
//     pass: "chau"
// }

// const objetoNuevo = {...objeto,cantidad:1}
// console.log(objetoNuevo)

// pedirProductos()
const productos = []
const URL = "./productos.json"

const cargarProductos = async () => {
    fetch(URL)
        .then(response => {
            if (!response.ok) {
                throw new Error("La base de datos se cayó")
            }
            return response.json()
        })
        .then(data =>{
            productos.push(...data)
            mostrarEnHTML()
        })
        .catch(error => {
            console.error("Error al hacer el fetch: ", error)
        })

}

const mostrarEnHTML = () => {
    productos.forEach((prod)=> {
        const listItem = document.createElement("li")
        listItem.innerText =  `${prod.nombre} ${prod.precio}`
        contenedorProductos.appendChild(listItem)
    })

}



cargarProductos()





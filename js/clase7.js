// // console.log(document)
// // console.log(document.body)


// // // *** DIFERENTES SELECTORES *** //

// // const seccionContenido = document.getElementById("contenido")
// // console.log(seccionContenido)

// const parrafos = document.getElementsByClassName("parrafo")
// console.log(parrafos)

// // const titulo = document.getElementsByTagName("h1")
// // console.log(titulo)


// // // *** MODIFICAR NODOS *** //
// // seccionContenido.innerHTML = "<h2 id='ejemplo' class='textoAzul'>Este es mi subtitulo</h2>"
// // titulo[0].innerText = "Mi titulo cambió desde JS"


// // const ejemplo = document.getElementById("ejemplo")
// // ejemplo.innerText = "Aca se cambia el ejemplo"



// // const parrafoDePrueba = document.getElementById("parrafo")
// // console.log(parrafoDePrueba.classList)

// // parrafoDePrueba.classList.add("colorDeLetra")
// // console.log(parrafoDePrueba.classList)



// const frutas = ["Ananá", "Banana", "Durazno", "Kiwi", "Manzana", "Papaya", "Pera"]


// function cargarDom() {
//     const titulo = document.getElementById("titulo")

//     const listado = document.getElementById("listado")

//     titulo.innerHTML = "Ingresá a <a href='#'>www.mandafruta.com</a>"

//     frutas.forEach((fruta) => {
//         const li = document.createElement("li")
//         li.innerText = `${fruta}`
//         listado.appendChild(li)
//     })

// }

// cargarDom()


const peliculas = [{
        id: 1,
        titulo: "El señor de los anillos",
        genero: "Fantasia/Ciencia Ficcion",
        duracion: 120,
        director: "Lionel Messi",
        img:"./img/señoranillos.jfif"
    },
    {
        id: 2,
        titulo: "El padrino",
        director: "Francis Coppola",
        genero: "Drama",
        duracion: 120,
        img:"./img/padrino.jfif"
    },
    {
        id: 3,
        titulo: "Pulp Fiction",
        director: "Quentin Tarantino",
        genero: "accion",
        duracion: 122,
        img:"./img/pulp.jfif"
    },
]



// const contenedor = document.querySelector("#contenedorPeliculas")


// peliculas.forEach((pelicula) => {
//     let contenedorPeli = document.createElement("div")
//     contenedorPeli.classList.add("card")
//     contenedorPeli.style.width = "18rem"


//     contenedorPeli.innerHTML = `
//     <div class="card-body">
//     <img src="${pelicula.img}"/>
//     <h5 class="card-title">Titulo: ${pelicula.titulo}</h5>
//     <p class="card-text">Director: ${pelicula.director}</p>
//     <p class="card-text"> Genero: ${pelicula.genero}</p>
//     <p class="card-text">${pelicula.duracion} minutos</p>
//     <a href="#" class="btn btn-primary">Mirar Pelicula</a>
//     </div>`


//     contenedor.appendChild(contenedorPeli)

//     const card = document.querySelector(".card")
//     console.log(card)
//     const cards = document.querySelectorAll(".card")
//     console.log(cards)

// })

const select = document.getElementById("select")


peliculas.forEach((pelicula) => {
    const option = document.createElement("option")
    option.innerText = `${pelicula.titulo}`
    select.appendChild(option)
})


// const btnAlerta = document.getElementById("alerta")

// btnAlerta.addEventListener("click", mostrarAlerta)

// function mostrarAlerta(){
//     alert("El boton muestra la alerta")
// }


// const btnDarkMode = document.getElementById("color-mode")

// btnDarkMode.addEventListener("click", cambiarDarkMode)

// function cambiarDarkMode(){
//     body.classList.toggle("dark-mode")
// }




// const formAlerta = document.getElementById("alerta-input")


// formAlerta.addEventListener("change", () =>{
//     console.log(formAlerta.value)
// } )


// const formAbajo = document.getElementById("abajo-input")
// const parrafoAbajo = document.getElementById("abajo")

// formAbajo.addEventListener("input", () => {


//     console.log(formAbajo.value)





// })

// const form = document.getElementById("formulario")
// const username = document.getElementById("username")
// const pass = document.getElementById("pass")



// form.addEventListener("submit", (evt) => {
//     evt.preventDefault()

//     const user = {
//         username: username.value,
//         password: pass.value
//     }

//     console.log(user)
//     form.reset()
// })

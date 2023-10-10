// const btnAlert = document.getElementById("btn-SweetAlert")
// const btnToast = document.getElementById("btn-Toast")
const container = document.getElementById("contenedor")
const inputBuscador = document.getElementById("buscador")

// btnAlert.addEventListener("click", () => {
//     Swal.fire({
//         icon: 'info',
//         title: 'Soy un mensaje Toast',
//         position: 'top-end',
//         width: 300,
//         toast: true,
//         timer: 5000,
//         timerProgressBar: true,
//         showConfirmButton: false,
//         background: 'cornflowerblue',
//         color: 'whitesmoke'
//     })

// })


// btnToast.addEventListener("click", () => {
//     Toastify({
//         text: "This is a toast",
//         duration: 3000,
//         destination: "https://github.com/apvarun/toastify-js",
//         newWindow: true,
//         close: true,
//         gravity: "top", // `top` or `bottom`
//         position: "right", // `left`, `center` or `right`
//         stopOnFocus: true, // Prevents dismissing of toast on hover
//         style: {
//             background: "linear-gradient(to right, #00b09b, #96c93d)",
//         },
//         onClick: function () { } // Callback after click
//     }).showToast();
// })
// const carrito = []

async function traerProductos() {
    const resp = await fetch('./productos.json')
    const prods = await resp.json()
    mostrarProductos(prods)
}

function mostrarProductos(productos) {
    container.innerHTML = ""
    productos.forEach((prod) => {
        let div = document.createElement("div")
        div.innerHTML = `<div class="card">
        <div class="content">
            <div class="title">${prod.nombre}</div>
            <div class="price">$ ${prod.precio}</div>
            <div class="description">${prod.stock}</div>
        </div>
            <button id="${prod.id}" >
                Comprar
            </button>
    </div>`

        container.appendChild(div)
        const btnAgregar = document.getElementById(`${prod.id}`)
        btnAgregar.addEventListener("click", () => {
            agregarAlCarrito(productos, prod.id)
        })
    })
}

function agregarAlCarrito(productos, id) {
    const productoEncontrado = productos.find((prod) => prod.id == id)
    carrito.push(productoEncontrado)
    console.log(carrito)
}

// function confirmarCargar() {
//     Swal.fire({
//         title: '¿Deseas cargar los productos desde la base de datos?',
//         showDenyButton: true,
//         confirmButtonText: 'Cargar',
//         customClass: {
//             confirmButton: 'btn btn-success',
//             cancelButton: 'btn btn-danger'
//         },       
//         denyButtonText: `No cargar`,
//     }).then((result) => {
//         /* Read more about isConfirmed, isDenied below */
//         if (result.isConfirmed) {
//             traerProductos()
//         } else if (result.isDenied) {
//             Swal.fire('No se han cargado los datos', '', 'error')
//         }
//     })
// }

// confirmarCargar()

inputBuscador.addEventListener("input", () => {
    const inputValue = inputBuscador.value.trim().toUpperCase()

    if (inputValue == "") {
        traerProductos()
    } else {
        fetch("./productos.json")
            .then(resp => resp.json())
            .then(prods => {
                const productosFiltrados = prods.filter((prod) => prod.nombre.includes(inputValue))
                if (productosFiltrados.length > 0) {
                    mostrarProductos(productosFiltrados)
                } else {
                    Swal.fire({
                        title: "Error",
                        text: "No se encontraron productos!",
                        icon: "error"
                    })
                }
            })
    }

})

traerProductos()


const DateTime = luxon.DateTime
console.log(DateTime)

const now = DateTime.now().toString()
console.log(now)

// console.log(now)
// console.log(now.year)
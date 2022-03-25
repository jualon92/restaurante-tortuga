let listaCarrito = [
    { imagen: "/images/ham3.png", nombre: "Hamburguesa Gigante", unidades: 4, precio: 99 },
    { imagen: "/images/pizza15.avif", nombre: "Pizza salamin", unidades: 2, precio: 33 },
]
async function initCarrito() {
    console.warn("carrito iniciado")
    componentHandler.upgradeDom()

    // agrego cartas contenido dinamico
    let plantillaHbs =  await fetch('templates/productos-carrito.hbs').then(r => r.text()) 
    var template = Handlebars.compile(plantillaHbs);
   //let listaActual  = JSON.parse(window.localStorage.getItem("listaPedidos"))
    let html = template({ item : listaCarrito}) 
    document.querySelector(".contenedor-resumen").innerHTML += html 

    //agrego listeners
    function agregarListeners() {
        //listener ir hacia atras
        document.querySelector(".carrito-header__img").addEventListener("click", e => {
            location.hash = "menu"
        })


    }


    agregarListeners()
}

function quitarEsteProducto() {
    console.warn("quitar este ele")
    //  quitarDeLista(this)
    // renderProductos()
}
let listaCarrito = [
]

 

async function initCarrito() {
    console.warn("carrito iniciado")
    componentHandler.upgradeDom()

    // HANDLEBARS, CONTENIDO DINAMICO

    let plantillaHbs = await fetch('templates/productos-carrito.hbs').then(r => r.text())
    var template = Handlebars.compile(plantillaHbs);
     let listaActual  = JSON.parse(window.sessionStorage.getItem("listaCarro"))
    let html = template({ item: listaActual })
    document.querySelector(".contenedor-resumen").innerHTML += html



    // PRECIO X UNIDADES
    let listaCartas = document.querySelectorAll(".carrito-cartas")
    listaCartas.forEach(carta => {
        console.warn("inii")
        //  console.warn(carta.querySelector(".carrito-cartas__numero-precio"))
        let valorIndividual = parseFloat(carta.querySelector(".carrito-cartas__numero-precio").innerHTML)
        let unidades = parseInt(carta.querySelector(".unidad").innerHTML)
        let valorTotal = valorIndividual * unidades
        console.log("Unidades", unidades)
        console.log("valor inidivual", valorIndividual)
        console.log("suma", valorTotal)
        carta.querySelector(".carrito-cartas__numero-precio").innerHTML = valorTotal

    });


    /// ACUMULADOR DE TOTAL
    let acuTotal = 0
    let listaPrecios = document.querySelectorAll(".carrito-cartas__numero-precio")
    listaPrecios.forEach(ele => {
        const suma = parseFloat(ele.innerHTML)
        console.warn(suma)
        acuTotal += suma
    });
    //calcular total
    document.querySelector(".carrito-total__resultado").innerHTML = acuTotal




    // SET LISTENERS
    function agregarListeners() {
        //listener ir hacia atras
        document.querySelector(".carrito-header__img").addEventListener("click", e => {
            location.hash = "menu"
        })


    }



    agregarListeners()
    componentHandler.upgradeDom()
    if (faltaInstalar){
        document.querySelector("#btnCart-update").classList.toggle("hidden", false)
    } 
}


async function quitarEsteProducto(indice) {
    console.warn(indice)
    
    let listaInicial = JSON.parse(window.sessionStorage.getItem("listaCarro"))
    
    // Quitar contadores de compras
    let contadorCompras = window.sessionStorage.getItem("contadorCompras")
    let cantidadBorrada = listaInicial[indice].unidades
    contadorComprasFinal = parseInt(contadorCompras) - cantidadBorrada 
    // Setear nuevo contador de compras totales
    window.sessionStorage.setItem("contadorCompras", JSON.stringify(contadorComprasFinal))


    // Quitarlo de la lista de compras
    listaInicial.splice(indice, 1)

    // guardar en lista de carrito
    window.sessionStorage.setItem("listaCarro", JSON.stringify(listaInicial))
    // RE RENDER con lista limpia
    let plantillaHbs = await fetch('templates/productos-carrito.hbs').then(r => r.text())
    var template = Handlebars.compile(plantillaHbs);
    let html = template({ item: listaInicial })
    document.querySelector(".contenedor-resumen").innerHTML = html

    //total, deberia ser funcion
    let acuTotal = 0
    let listaPrecios = document.querySelectorAll(".carrito-cartas__numero-precio")
    listaPrecios.forEach(ele => {
        const suma = parseFloat(ele.innerHTML)
        console.warn(suma)
        acuTotal += suma
    });
    //calcular total
    document.querySelector(".carrito-total__resultado").innerHTML = acuTotal
 
   
    
}



async function borrarTodo() {
   
    listaCarrito = []

    //logica repetida, estaria mejor que tenga una  funcion render
    let plantillaHbs = await fetch('templates/productos-carrito.hbs').then(r => r.text())
    var template = Handlebars.compile(plantillaHbs);
    let html = template({ item: listaCarrito })
    document.querySelector(".contenedor-resumen").innerHTML = html
    
}

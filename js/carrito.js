let listaCarrito = [
]



async function initCarrito() {
    console.warn("carrito iniciado")
    componentHandler.upgradeDom()

    // HANDLEBARS, CONTENIDO DINAMICO

    let plantillaHbs = await fetch('templates/productos-carrito.hbs').then(r => r.text())
    var template = Handlebars.compile(plantillaHbs);
    //let listaActual  = JSON.parse(window.localStorage.getItem("listaPedidos"))
    let html = template({ item: listaCarrito })
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
}


async function quitarEsteProducto(indice) {
    console.warn(indice)
    listaCarrito.splice(indice, 1)

    //logica repetida, estaria mejor que tenga una  funcion render
    let plantillaHbs = await fetch('templates/productos-carrito.hbs').then(r => r.text())
    var template = Handlebars.compile(plantillaHbs);
    let html = template({ item: listaCarrito })
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

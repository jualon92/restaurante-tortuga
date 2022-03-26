 
async function initComida() {

    function getContadorCompras() {
        return parseInt(document.querySelector(".contador-pedidos__numero").innerHTML)

    }
    console.warn("carta")

    let plantillaHbs = await fetch('templates/cartas.hbs').then(r => r.text())
    var template = Handlebars.compile(plantillaHbs);
    let index = JSON.parse(sessionStorage.getItem("indiceKey"))

    // let html = template(burgerList[index])
    let listaActual = JSON.parse(window.sessionStorage.getItem("listaActiva"))
    console.log("burger lista sele", listaActual)
    let html = template(listaActual[index])

    let elementoATrabajar = listaActual[index]

    console.log("elemento trabajando ", elementoATrabajar)
    //  console.log("template listo " + html)
    document.querySelector("main").innerHTML = html
    document.querySelector("body").classList.add("body__carta")


    /* ------------------------------------------*/
    /*               ir hacia atras               */
    /* ------------------------------------------*/
    document.querySelector(".foto__burger").addEventListener("click", async (e) => {
        location.hash = "menu"
        console.log("antes", listaActual)
    })


    /* ------------------------------------------*/
    /*               AGREGAR AL CARRITO           */
    /* ------------------------------------------*/
    document.querySelector(".btn-carrito").addEventListener("click", async (e) => {
        // console.warn("agregar al carrito")
        //consultar contador

        let cantidadAComprar = getContadorCompras()
        console.warn("cantidad a comprar " + cantidadAComprar)

        let contador = JSON.parse(window.sessionStorage.getItem("contadorCompras"))
        window.sessionStorage.setItem("contadorCompras", cantidadAComprar + contador)
        console.warn("ACU comprados " + window.sessionStorage.getItem("contadorCompras"))
        //  window.sessionStorage.setItem("listaPedidos", )
        location.hash = "menu"


        //agregar a lista de carrito
        //es primera vez, agregar a la lista
       /*
        console.warn("dato", elementoATrabajar.unidades)

        let eleCarrito = listaCarrito.findIndex(ele => ele.nombre === elementoATrabajar.nombre)

        if (eleCarrito >= 0) { //  ya hay una entrada en el array
            //encontrar ese ele

            let objTarget = listaCarrito[eleCarrito]

            objTarget.unidades += cantidadAComprar


        } else { // es la primera vez que se ingresa ese producto
            elementoATrabajar.unidades = cantidadAComprar
            listaCarrito.push(elementoATrabajar)
        }*/

        const getListaCarrito = () => JSON.parse(window.sessionStorage.getItem("listaCarro"))
        let listaInicial = getListaCarrito() 
        let eleCarrito = listaInicial.findIndex(ele => ele.nombre === elementoATrabajar.nombre)

        if (eleCarrito >= 0) { //  ya hay una entrada en el array
            //encontrar ese ele

            let objTarget = listaInicial[eleCarrito]

            objTarget.unidades += cantidadAComprar
            window.sessionStorage.setItem("listaCarro", JSON.stringify(listaInicial))

        } else { // es la primera vez que se ingresa ese producto
            elementoATrabajar.unidades = cantidadAComprar
            listaInicial.push(elementoATrabajar)
            window.sessionStorage.setItem("listaCarro", JSON.stringify(listaInicial))
        }
         

        //window local storage
        

    })


    document.querySelector(".contador-pedidos__suma").addEventListener("click", (e) => {
        console.warn("click suma")
        document.querySelector(".contador-pedidos__numero").innerHTML = getContadorCompras() + 1
    })

    document.querySelector(".contador-pedidos__resta").addEventListener("click", (e) => {
        console.warn("click resta")
        if (getContadorCompras() > 0) {
            document.querySelector(".contador-pedidos__numero").innerHTML = getContadorCompras() - 1
        }

    })




}


function agregarProdu(ele) {
    console.warn("elemento: ", ele)
}
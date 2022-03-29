
//const horizontal = "transform: rotate(180deg)"
//const vertical = "transform: rotate(90deg);"

let decisionId = "burgerList"

window.sessionStorage.setItem("listaActiva", JSON.stringify(burgerList))
//que recuerde boton activo

async function initMenu() {

    let productoContainer = document.querySelector(".productos")
    let listaProductos = Array.from(document.querySelectorAll(".productos__item"))
    console.warn("initMenu")
    let listaCategorias = Array.from(document.querySelectorAll(".boton-alimento"))
    let estaVertical = true
    let indiceActivo = 0
    var indiceGuardado = ""


    

    //contenido estatica cartelera
    /*  async function getHTMLCartelera(listaProductos){
          let plantillaHbs = await fetch('templates/cartelera.hbs').then(r => r.text())
          var template =  Handlebars.compile(plantillaHbs);
          let html = template({listaProductos}) 
          console.warn(html)
          return html 
      }*/


    let plantillaHbs = await fetch('templates/cartelera.hbs').then(r => r.text())
    var template = Handlebars.compile(plantillaHbs);
    let listaActual = JSON.parse(window.sessionStorage.getItem("listaActiva"))
    console.log("cartelera en puntero", listaActual)
    let html = template({ item: listaActual })
    productoContainer.innerHTML = html

    //  document.querySelector(".contenedor-productos__btn-ordenar").style = window.sessionStorage.getItem("directionChoice")
    //console.log("html es : " + html )



    //al presionar un producto cartelera
    document.querySelectorAll(".boton-alimento").forEach(ele => {
        ele.addEventListener("click", async (e) => {


            let listaProductosAMostrar = getLista(ele.id)

            let plantillaHbs = await fetch('templates/cartelera.hbs').then(r => r.text())
            var template = Handlebars.compile(plantillaHbs);
            let html = template({ item: listaProductosAMostrar })
            productoContainer.innerHTML = html

            //sets lista a tomar files de cartas
            console.log("set lista", listaProductosAMostrar)
            let listaString = JSON.stringify(listaProductosAMostrar)
            window.sessionStorage.setItem("listaActiva", listaString)
            console.log("ele recordado", ele.id)
            decisionId = ele.id
            console.log("asignando")
            asignarComidaACarta()
            //cuando seleccione ese pasa ser el e le recordado en sesion
            // al tocar menu, renderiza plantilla con la decision

        })



    });





    document.querySelector("body").classList.remove("body__carta")
    //cargo 



    function asignarComidaACarta() {
        for (const producto of listaProductos) {
            producto.addEventListener("click", async (e) => {

                e.preventDefault() //necesario  
                console.log("viejo hash: " + location.hash)
                let id = "comida"
                location.hash = id //nuevo hash
                console.log("nuevo hash" + location.hash)
                let indice = Array.from(document.querySelectorAll(".productos__item")).indexOf(producto)
                console.log("DDDDDDDDDDDDDDDDDDD ", indice)
                indiceGuardado = indice
                localStorage.setItem("indiceKey", indiceGuardado);
            })
        }
    }

    asignarComidaACarta()

    //botonera categorias
    for (const btnCategoria of listaCategorias) {
        btnCategoria.addEventListener("click", async (e) => {

            //pintar al clickear
            listaCategorias[indiceActivo].classList.remove("boton-alimento--cate-activo")
            //   quitarCategorias(listaCategorias)
            btnCategoria.classList.add("boton-alimento--cate-activo")

            indiceActivo = listaCategorias.indexOf(btnCategoria)
            console.log(indiceActivo)

        })
        //pintar decision guardada
        if (btnCategoria.id === decisionId) {
            console.log(btnCategoria.id, "correcto")
            btnCategoria.classList.add("boton-alimento--cate-activo")
            indiceActivo = listaCategorias.indexOf(btnCategoria)
        }


    }

    let contadorCompras = JSON.parse(window.sessionStorage.getItem("contadorCompras"))
    let contadorMenu = document.querySelector(".footer-nav__contador-menu")
    if (contadorCompras > 0 && contadorCompras < 10) {
        document.querySelector(".footer-nav__carrito").src = "images/carritoRojo.svg"

        contadorMenu.src = getRutaFromHTML(contadorCompras)
        contadorMenu.style = "display:block;  "


    } else if (contadorCompras > 9) {
        document.querySelector(".footer-nav__carrito").src = "images/carritoRojo.svg"
        contadorMenu.src = "/images/simboloMayor9.png"
        contadorMenu.style = "display:block;  "
    } else {
        document.querySelector(".footer-nav__carrito").src = "images/carrito.svg"
    }



    /* cuando se activa un boton, los demas se desactivan, ciclo 1 x 1, si fueran 40 botones delay.
    function quitarCategorias(){ //podria recordarse el indice activo y no es necesario ciclar por todos los botones, mas performante?
        for (const btnCategoria of listaCategorias){
            btnCategoria.classList.remove("boton-alimento--cate-activo")
        }
    }
        */

    /*

    document.querySelector(".productos__item1").addEventListener("click", async (e) => {
        console.log(" fui clickeado")
        e.preventDefault() //necesario  
        console.log("viejo hash: " + location.hash)
        let id =  document.querySelector(".productos__item1").id // id de boton
        location.hash = id //nuevo hash
        console.log("nuevo hash" + location.hash)
    })
    */

    /* ------------------------------------------------------------ */
    /*      Desplazamiento de menu productos                        */
    /* ------------------------------------------------------------ */

    document.querySelector(".contenedor-productos__btn-ordenar").addEventListener("click", (e) => {
        if (estaVertical) {
            document.querySelector(".productos").style = "flex-wrap:wrap; row-gap:15px; ";
            document.querySelector(".contenedor-productos__btn-ordenar").style = "transform: rotate(90deg);"
            estaVertical = false
            //  window.sessionStorage.setItem("directionChoice", vertical)
        } else {
            document.querySelector(".productos").style = "";
            estaVertical = true
            document.querySelector(".contenedor-productos__btn-ordenar").style = "transform: rotate(180deg);"
            //que recuerde la decision
            //   window.sessionStorage.setItem("directionChoice", horizontal )

        }


    })

    let fueClickeado = false

    /* ------------------------------------------------------------ */
    /*      Agrego listeners nav                                     */
    /* ------------------------------------------------------------ */
    function agregarListenersNav() {
        document.querySelector(".footer-nav__carrito").addEventListener("click", e => {
            location.hash = "carrito"
        })

        document.querySelector(".box-ordenar__boton").addEventListener("click", e => {
            location.hash = "carrito"
        })
        /*
        document.querySelector(".cerrar").addEventListener("click", e => {
            document.querySelector(".modalTarget").close()

        })*/
    }

     //dropdown update 
     

    agregarListenersNav()
    componentHandler.upgradeDom()  // necesario para que MDL conozca nuevos elementos agregados de plantilla

    document.querySelector("#dropdown-update").addEventListener('click', async () => {
        console.log('👍', 'butInstall-clicked');
        const promptEvent = window.deferredPrompt;
        if (!promptEvent) {
            console.log("ya hay un sw")
            // The deferred prompt isn't available.
            return;
        }
        // Show the install prompt.
        promptEvent.prompt();
        // Log the result
        const result = await promptEvent.userChoice;
        console.log('👍', 'userChoice', result);
        // Reset the deferred prompt variable, since
        // prompt() can only be called once.
        window.deferredPrompt = null;
        // Hide the install button.
       
    });


    if (faltaInstalar){
        document.querySelector("#dropdown-update").classList.toggle("hidden", false)
    } 

}
//agregar listeners a botones

function saludar(e, ele, indiceGuardado) {
    console.log(indiceGuardado)


    sessionStorage.setItem("indiceKey", indiceGuardado);
    e.preventDefault() //necesario  
    console.log("hola ", ele)
    console.log("viejo hash: " + location.hash)
    let id = "comida"
    location.hash = id //nuevo hash
    console.log("nuevo hash" + location.hash)

}
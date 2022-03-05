

async function initMenu() {
    let listaProductos = Array.from(document.querySelectorAll(".productos__item"))
    console.warn("initMenu")
    let listaCategorias = Array.from(document.querySelectorAll(".boton-alimento"))
    let indiceActivo = 0
    var indiceGuardado = ""


    document.querySelector("body").classList.remove("body__carta")
    //cargo 

    for (const producto of listaProductos) {
        producto.addEventListener("click", async (e) => {
         
            e.preventDefault() //necesario  
            console.log("viejo hash: " + location.hash)
            let id = "comida"
            location.hash = id //nuevo hash
            console.log("nuevo hash" + location.hash)
            let indice = listaProductos.indexOf(producto)
            
            indiceGuardado = indice
            localStorage.setItem("indiceKey", indiceGuardado);
        })
    }


    //botonera categorias
    for (const btnCategoria of listaCategorias) {
        btnCategoria.addEventListener("click", async (e) => {

            //pintar 
            listaCategorias[indiceActivo].classList.remove("boton-alimento--cate-activo")
            //   quitarCategorias(listaCategorias)
            btnCategoria.classList.add("boton-alimento--cate-activo")

            indiceActivo = listaCategorias.indexOf(btnCategoria)

        })


    }

    let contadorCompras = JSON.parse(window.sessionStorage.getItem("contadorCompras"))
    let contadorMenu = document.querySelector(".footer-nav__contador-menu")
    if (contadorCompras > 0 && contadorCompras < 10) {
        document.querySelector(".footer-nav__carrito").src = "images/carritoRojo.svg"
        
        contadorMenu.src = getRutaFromHTML(contadorCompras)
        contadorMenu.style = "display:block; position:absolute;"


    } else if (contadorCompras > 9) {
        document.querySelector(".footer-nav__carrito").src = "images/carritoRojo.svg"
        contadorMenu.src = "/images/simboloMayor9.png"
        contadorMenu.style = "display:block; position:absolute;"
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

}
    //agregar listeners a botones


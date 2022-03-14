
//const horizontal = "transform: rotate(180deg)"
//const vertical = "transform: rotate(90deg);"

 

 

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
    var template =  Handlebars.compile(plantillaHbs);
    let html = template({ item : burgerList}) 
    productoContainer.innerHTML =   html

  //  document.querySelector(".contenedor-productos__btn-ordenar").style = window.sessionStorage.getItem("directionChoice")
    //console.log("html es : " + html )
  
    
    
    document.querySelectorAll(".boton-alimento").forEach(ele => {
        ele.addEventListener("click", async (e) => {
            
            
            let listaProductosAMostrar = getLista(ele.id)
            
            let plantillaHbs = await fetch('templates/cartelera.hbs').then(r => r.text())
            var template =  Handlebars.compile(plantillaHbs);
            let html = template({ item :  listaProductosAMostrar}) 
            productoContainer.innerHTML =   html
        })
    
    });
     
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

    document.querySelector(".contenedor-productos__btn-ordenar").addEventListener("click", (e) =>{
        if (estaVertical){
            document.querySelector(".productos").style = "flex-wrap:wrap; row-gap:15px; ";
            document.querySelector(".contenedor-productos__btn-ordenar").style =  "transform: rotate(90deg);"
            estaVertical = false
          //  window.sessionStorage.setItem("directionChoice", vertical)
        }else{
            document.querySelector(".productos").style = "";
            estaVertical = true
            document.querySelector(".contenedor-productos__btn-ordenar").style =  "transform: rotate(180deg);"
            //que recuerde la decision
         //   window.sessionStorage.setItem("directionChoice", horizontal )

        }
        

    })
}
    //agregar listeners a botones

function saludar(e,ele, indiceGuardado){
    console.log(indiceGuardado)
    
    
    localStorage.setItem("indiceKey", indiceGuardado); 
    e.preventDefault() //necesario  
    console.log("hola ", ele )
    console.log("viejo hash: " + location.hash)
    let id = "comida"
    location.hash = id //nuevo hash
    console.log("nuevo hash" + location.hash)
      
}
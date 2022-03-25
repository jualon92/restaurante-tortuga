async function initCarrito(){
    console.warn("carrito iniciado")
    componentHandler.upgradeDom() 


    //agrego listeners
    function agregarListeners(){
        //listener ir hacia atras
        document.querySelector(".carrito-header__img").addEventListener("click", e => {
            location.hash = "menu"
        })

         
    }
     

    agregarListeners()
} 

function quitarEsteProducto(){
    console.warn("quitar este ele")
  //  quitarDeLista(this)
   // renderProductos()
}
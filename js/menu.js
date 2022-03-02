 

let indiceGuardado = ""
async function initMenu() {
    let listaProductos = Array.from(document.querySelectorAll(".productos__item"))
    console.warn("initMenu")

    

    document.querySelector("body").classList.remove("body__carta")
    //cargo 
     
    for (const producto of listaProductos) {
        producto.addEventListener("click", async (e) => {
            console.log(" fui clickeado")
            e.preventDefault() //necesario  
            console.log("viejo hash: " + location.hash)
            let id =  "comida"
            location.hash = id //nuevo hash
            console.log("nuevo hash" + location.hash)
            let indice= listaProductos.indexOf(producto)
            console.log("indice " + indice)
            indiceGuardado = indice
        })
    }
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

 
async function initComida(){
 
    function getContadorCompras(){
       return parseInt(document.querySelector(".contador-pedidos__numero").innerHTML)
    
    }
    console.warn("carta")

    let plantillaHbs = await fetch('templates/cartas.hbs').then(r => r.text()) 
    var template = Handlebars.compile(plantillaHbs);
    let index = JSON.parse(localStorage.getItem("indiceKey"))
    
    let html = template(burgerList[index])
    console.log(burgerList[index])
   //  console.log("template listo " + html)
    document.querySelector("main").innerHTML = html
    document.querySelector("body").classList.add("body__carta")

    
    document.querySelector(".foto__burger").addEventListener("click", async (e) =>{
        location.hash = "menu"
    })

    document.querySelector(".btn-carrito").addEventListener("click", async (e) => {
       // console.warn("agregar al carrito")
        //consultar contador
        
        let cantidadAComprar = getContadorCompras()
        console.warn("cantidad a comprar " + cantidadAComprar)

        let contador = JSON.parse(window.sessionStorage.getItem("contadorCompras"))
        window.sessionStorage.setItem("contadorCompras", cantidadAComprar + contador)
        console.warn("ACU comprados " + window.sessionStorage.getItem("contadorCompras"))
        location.hash = "menu"
        
    })


    document.querySelector(".contador-pedidos__suma").addEventListener("click", (e) => {
        console.warn("click suma")
        document.querySelector(".contador-pedidos__numero").innerHTML = getContadorCompras() +  1 
    })

    document.querySelector(".contador-pedidos__resta").addEventListener("click", (e) => {
          console.warn("click resta")
        if (getContadorCompras() > 0){
            document.querySelector(".contador-pedidos__numero").innerHTML =   getContadorCompras() -  1
        } 
         
      })




}

 
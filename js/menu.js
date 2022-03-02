 

async function initMenu() {
    let burgerList = [
        {
            nombre: "Burger Doble Cheddar",
            descripcion: "Super Giga Cheddar-ium",
            imagen: "images/burgerGigante.png",
            precio: `$ 12.50`,
            texto: `La densidad del cheddar utilizado es dos veces el encontrado en
        la
        usual hamburguesa`,
            estrellas: 4.5,
            calorias: "180kcal",
            tiempo: "5-15min"
        }
    ]
    
    console.warn("initMenu")

    //cargo 
    document.querySelector(".productos__item1").addEventListener("click", async (e) => {
        console.log(" fui clickeado")
        e.preventDefault() //necesario  
        console.log("viejo hash: " + location.hash)
        let id =  document.querySelector(".productos__item1").id // id de boton
        location.hash = id //nuevo hash
        console.log("nuevo hash" + location.hash)
       
    })
}
    //agregar listeners a botones

   
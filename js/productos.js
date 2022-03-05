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
    ,
    {
        nombre: "Burger Dancing Chicken",
        descripcion: "Pollo bailarin",
        imagen: "/images/hamGrande.avif",
        precio: `$ 11.25`,
        texto: `Un pollo alegre es un sabor diferente`,
        estrellas: 4.2,
        calorias: "130kcal",
        tiempo: "10-25min"
    }
]

 
     
function getRutaFromHTML(nombre){
    
    let ruta = "/images/simbolo" + nombre + ".png"
  //  console.log(ruta)
    return ruta
}


let contadorCarrito = 0

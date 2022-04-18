


let burgerList = [
    {
        nombre: "Burger Doble Cheddar",
        descripcion: "Super Giga Cheddar-ium",
        imagen: "images/burgerGigante.png",
        precio: `12.50`,
        texto: `La densidad del cheddar utilizado es dos veces el encontrado en
    la
    usual hamburguesa`,
        estrellas: 4.5,
        calorias: "180kcal",
        tiempo: "5-15min",
        imagenCartelera: "images/ambur.webp"
    }
    ,
    {
        nombre: "Burger Dancing Chicken",
        descripcion: "Pollo bailarin",
        imagen: "/images/hamGrande.webp",
        precio: `11.25`,
        texto: `Un pollo alegre es un sabor diferente`,
        estrellas: 4.2,
        calorias: "130kcal",
        tiempo: "10-25min",
        imagenCartelera: "/images/ham3.png",
    },
    {
        nombre: "Tower Burger MAX",
        descripcion: "Hamburguesa de multiples pisos",
        imagen: "/images/towerburger-grande.png",
        precio: `26.25`,
        texto: `Hamburguesa recomendada para mas de una persona, procurar posicionarla en el medio de la mesa para no causar una desgracia`,
        estrellas: 5,
        calorias: "250kcal",
        tiempo: "35min",
        imagenCartelera: "/images/towerburger.png",
    }

]
 


let pizzaList = [  
    {
        nombre: "Fire Pizza",
        descripcion: "Pizza Extra picante",
        imagen: "/images/pizza-grande15.webp",
        precio: "6.11",
        texto:"No apta para paladares sensibles",
        estrellas:"1",
        calorias:"1kcal",
        tiempo:"12min",
        imagenCartelera: "/images/pizza10.webp"
    },{
        nombre: "Pizza Salamin",
        descripcion: "Pizza Pizza",
        imagen:  "/images/pizza-salaminGrande.webp",
        precio: "16.11",
        texto:"Salamandra",
        estrellas:"5",
        calorias:"1.4kcal",
        tiempo:"15min",
        imagenCartelera: "/images/pizza15.webp"
    } 
]


let panchoList = [  
    {
        nombre: "Mega Pancho XL",
        descripcion: "Pancho con serving",
        imagen: "/images/standardPancho-big.webp",
        precio: "20.11",
        texto:"Un par de servilletas para evitar problemas con el medio pote de mayonesa casera que orgullosamente ostenta",
        estrellas:"5",
        calorias:"10.5kcal",
        tiempo:"10min",
        imagenCartelera: "/images/standardPancho-small.webp"
    } 
]
     
function getRutaFromHTML(nombre){
    
    let ruta = "/images/simbolo" + nombre + ".png"
  //  console.log(ruta)
    return ruta
}

 
 
function getLista(nombreLista){ //quizas con  JSON.parse, buscar una alternativa que reemplac un if o mapa
    if (nombreLista == "pizzaList"){
        return pizzaList
    }else if(nombreLista == "burgerList"){
        return burgerList
    }
    else if(nombreLista == "panchoList"){
        return panchoList
    }else{
        console.warn("ruta inexistente")
    }
}
 
 
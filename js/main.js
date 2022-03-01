import burgerList from "./productos.js"


//podria hardcodear que posicion uno lleve a hamburguesa cheddar pero traeria problemas si mas adelante se cambia hamburguesa
let productoPos1 = document.querySelector(".productos__item1")

 

document.querySelector(".productos__item1").addEventListener("click", () => {
    getComidaHTML(burgerList[0])
})




async function getComidaHTML(objeto) {
    let menuInicial =  await fetch('vistas/menup.html').then(r => r.text()) 
    let plantillaHbs = await fetch('templates/cartas.hbs').then(r => r.text()) // obtener plantilla

    var template = Handlebars.compile(plantillaHbs);

    let html = template(objeto)
    //console.log(html)
    document.body.innerHTML = html
    document.body.classList.add("body__carta") //clase de body que falta para background



    document.querySelector(".btnTo-menu").addEventListener("click", (e) => {
        
        console.log("fui presionado")
        document.body.classList.remove("body__carta")
        document.body.innerHTML = menuInicial
        document.querySelector(".productos__item1").addEventListener("click", () => {
            // console.log(burgerList)

            getComidaHTML(burgerList[0])

        })

    })

}



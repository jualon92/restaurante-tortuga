async function initComida(){
    console.warn("carta")
     

    let plantillaHbs = await fetch('templates/cartas.hbs').then(r => r.text()) 
    var template = Handlebars.compile(plantillaHbs);
    
    let html = template(burgerList[0])
    console.log(burgerList[0])
     console.log("template listo " + html)
    document.querySelector("main").innerHTML = html 
    document.querySelector("body").classList.add("body__carta")


    document.querySelector(".foto__burger").addEventListener("click", async (e) =>{
        location.hash = "menu"
    })
}
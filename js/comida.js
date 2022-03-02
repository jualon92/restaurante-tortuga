async function initComida(){
    console.warn("carta")
     
     
    let plantillaHbs = await fetch('templates/cartas.hbs').then(r => r.text()) 
    var template = Handlebars.compile(plantillaHbs);
    let index = JSON.parse(localStorage.getItem("indiceKey"))
    
    let html = template(burgerList[index])
    console.log(burgerList[index])
     console.log("template listo " + html)
    document.querySelector("main").innerHTML = html
    document.querySelector("body").classList.add("body__carta")


    document.querySelector(".foto__burger").addEventListener("click", async (e) =>{
        location.hash = "menu"
    })
}

 
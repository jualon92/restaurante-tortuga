async function initPerfil(){
    
    console.warn("init perfil")
    document.querySelector(".carrito-header__img").addEventListener("click", e => {
        location.hash = "menu"
    })

    
    //contenido dinamico
    let persona = JSON.parse(storagePreferido.getItem("user"))
    
    let plantillaHbs = await fetch('templates/perfil.hbs').then(r => r.text())
    var template = Handlebars.compile(plantillaHbs);
    let html = template(persona)
    document.querySelector(".user-container").innerHTML = html
    document.querySelector(".img_perfil").src = JSON.parse(storagePreferido.getItem("user")).picture.large 

    componentHandler.upgradeDom() //necesario para que mdl funcione
}
async function initInicio(){
    console.warn("initInicio")
    document.querySelector(".btnP").addEventListener('click', e => {
        console.log("clickeado")
        e.preventDefault() //necesario  
        console.log("viejo hash: " + location.hash)
        let id = document.querySelector(".btnP").id // id de boton
        location.hash = id //nuevo hash
        console.log("nuevo hash" + location.hash)
    })


}
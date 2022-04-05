
/*const precargarImagenes = (e) => {
    const imageArray = new Array("images/burgerGigante.png", 
    "images/hamGrande.avif", "images/pizza-grande15.avif", "images/ambur.avif",
    "/images/towerburger-grande.png",
    "/images/pizza-salaminGrande.avif",
    "/images/pizza15.avif",
    "/images/pizza10.avif",
    "/images/standardPancho-big.avif",
    "/images/standardPancho-small.avif",
    "/images/towerburger.png",
    "/images/ham3.png",
    "images/zanella.svg"
    );

    for (const imagen of imageArray) {
        const tempImage = new Image();
        tempImage.src = imagen
    }
}

this.addEventListener("DOMContentLoaded", precargarImagenes);
*/
let imagenPerfil = null
let deferredPrompt;

let faltaInstalar = false;


window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent the mini-infobar from appearing on mobile.
    //event.preventDefault();
    console.log('👍', 'beforeinstallprompt', event);
    // Stash the event so it can be triggered later.
    window.deferredPrompt = event;
    // Remove the 'hidden' class from the install button container.
    faltaInstalar = true
    document.querySelector("#btn-update").classList.toggle("hidden", false)
});


async function initInicio() {
    componentHandler.upgradeDom()



    document.querySelector("#btn-update").addEventListener('click', async () => {
        await instalarSW()

    });

    let listaPrueba = []
    storagePreferido.setItem("listaCarro", JSON.stringify(listaPrueba))
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




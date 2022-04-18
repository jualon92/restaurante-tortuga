
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
let imagenUsada = ""
let faltaInstalar = false;
let  positionDisplay 
/*
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
*/

async function initInicio() {
    let direccion
     
    componentHandler.upgradeDom()
 
      
    function geoLoc() { 
        
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(reverseGeoLoc); 
            
        } else {
            locacion = "Geolocation is not supported by this browser.";
        }

        async function reverseGeoLoc(pos){
            direccion =  await 
            fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${pos.coords.latitude}&longitude=${pos.coords.longitude}&localityLanguage=en
            `).then(r => r.json())
            console.log(direccion)
            getInfo(direccion)
        }

        async function getInfo(direccion){
            let nombrePais = direccion.countryCode
            let nombreCiudad = direccion.locality.split(" ")[0] // campana partido => campana 
             positionDisplay = {"pais" : nombrePais, "ciudad" : nombreCiudad}

            console.log(positionDisplay)
        }

       
    }

    


    
    storagePreferido.setItem("listaActiva", JSON.stringify(burgerList))

    //
    document.querySelector("#btn-update").addEventListener('click', async () => {
        await instalarSW()

    });


    // nueva instancia de client storage
    let listaPrueba = []
    storagePreferido.setItem("listaCarro", JSON.stringify(listaPrueba))
    storagePreferido.setItem("contadorCompras", JSON.stringify(0))




    console.warn("initInicio")
    document.querySelector(".btnP").addEventListener('click', e => {
        console.log("clickeado")
        e.preventDefault() //necesario  
        console.log("viejo hash: " + location.hash)
        let id = document.querySelector(".btnP").id // id de boton
        location.hash = id //nuevo hash
        console.log("nuevo hash" + location.hash)
    })


    async function guardarImagen() {
        if (storagePreferido.getItem("user") === null) { //si usuario no existe en local storage
            console.warn("nuevo usuario")
            await $.ajax({
                url: 'https://randomuser.me/api/',
                dataType: 'json',
                success: function (data) {

                    let imgUser = data.results[0].picture.thumbnail
                    let user = data.results[0]
                    console.warn(user)
                    storagePreferido.setItem("user", JSON.stringify(user)) //clase? getItem usuario imagen  en vez de JSON.parse(getItem).imagen
                    storagePreferido.setItem("usuario-imagen", `url(${imgUser})`)

                }
            })
        }
    }

    geoLoc()
 
    guardarImagen()  //
     
}




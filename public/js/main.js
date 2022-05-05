

const storagePreferido = window.localStorage



async function  SW() {
    console.log('👍', 'butInstall-clicked');
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        console.log("ya hay un sw")
        // The deferred prompt isn't available.
        return;
    }
    // Show the install prompt.
    promptEvent.prompt();
    // Log the result
    const result = await promptEvent.userChoice;
    console.log('👍', 'userChoice', result);
    // Reset the deferred prompt variable, since
    // prompt() can only be called once.
    window.deferredPrompt = null;
    // Hide the install button.
}


class Main {
    initJS(id) { //podria ser un map de direcciones? rever
        if (id == 'inicio') {
            initInicio()
        } else if (id == "menu") {
            initMenu()
        } else if (id == "comida") {
            initComida()
        } else if (id == "carrito") {
            initCarrito()
        } else if (id == "perfil") {
            initPerfil()
        }

    }



    getNombreArchivo(id) {
        return 'vistas/' + id + '.html'
    }


    async cargarPlantilla(id) {
        console.log("nombre archivo" + this.getNombreArchivo(id))
        let archivo = this.getNombreArchivo(id) // "inicio" => inicio.html

        let plantilla = await fetch(archivo).then(r => r.text()) //get con async await


        // Carga del código de vista (HTML) de la plantilla

        let main = document.querySelector('main')

        main.innerHTML = plantilla


        this.initJS(id)




        // Carga del código script (JS) de la plantilla

    }


    async cargarPlantillas() {
        /* --------------------------------------------------------- */
        /* Carga inicial de la vista determinada por la url visitada */
        /* --------------------------------------------------------- */

        let id = location.hash.slice(1) || 'inicio' //primer vista se encuentra en nav inicio
        console.log("primer id " + id)
        await this.cargarPlantilla(id)
        //  this.marcarLink(id)

        //al presionar, cambiar hash.

        //al detectar cambio de hash, utilizar id para generar nueva plantilla
        window.addEventListener('hashchange', async () => { // al detectar cambio de hash
            console.log('Cambió la URL', "nueva" + location.hash.slice(1))

            let id = location.hash.slice(1) || "inicio" //recuperar id
            //   this.marcarLink(id)

            await this.cargarPlantilla(id) //utilizarlo para plantilla
        })
    }

    async start() {

        await this.cargarPlantillas()
    }
}


function registrarServiceWorker() {
    if ('serviceWorker' in navigator) {
        //estÃ³ de debe ejecutar cunado toda el documento web estÃ© cargado
        navigator.serviceWorker.register('/sw.js')
            .then(reg => {
                console.log('El service worker se registrÃ³ correctamente',reg)

                reg.onupdatefound = () => {
                    const installingWorker = reg.installing
                    installingWorker.onstatechange = () => {
                        console.log('SW --> ', installingWorker.state)
                        if(installingWorker.state == 'activated') {
                            console.error('Reinicio en 2 segundos ...')
                            setTimeout(() => {
                                console.log('Ok')
                                location.reload()
                            },2000)
                        }
                    }
                }

            })
            .catch(err => {
                console.error('Error al registrar el service worker', err)
            })
    }
    else {
        console.error('serviceWorker no estÃ¡ disponible en navigator')
    }
} 

//registrarServiceWorker()
const main = new Main()
main.start() //ini

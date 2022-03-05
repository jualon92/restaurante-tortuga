 
 
 

class Main {
    initJS(id) { //podria ser un map de direcciones? rever
       if(id == 'inicio') {
            initInicio()
        }else if (id == "menu"){
            initMenu()
        }else if (id == "comida"){
            initComida()
        }
        
    }


    async start() {
        await this.cargarPlantillas()
    }
    getNombreArchivo(id) { 
        return 'vistas/' + id + '.html'
    }


    async cargarPlantilla(id) {
        console.log("nombre archivo" + this.getNombreArchivo(id))
        let archivo = this.getNombreArchivo(id) // "inicio" => inicio.html
         
        let plantilla =  await fetch(archivo).then(r => r.text()) //get con async await
      
        
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
             console.log('Cambió la URL', "nueva" + location.hash.slice(1) )
           
            let id = location.hash.slice(1) || "inicio" //recuperar id
         //   this.marcarLink(id)
           
            await this.cargarPlantilla(id) //utilizarlo para plantilla
        })
    }
}


const main = new Main()
main.start() //ini

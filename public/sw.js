const NVERSION = 72


const CACHE_STATIC_NAME = `static-v${NVERSION}`

const CACHE_INMUTABLE_NAME = `inmutable-${NVERSION}`

const CACHE_DYNAMIC_NAME = `dynamic-v${NVERSION}`

const CON_CACHE = true


const appShellFiles = [
    //Imagenes
    '/images/c1.jpg',
    '/images/towerburger-grande.png',
    "/images/pizza.svg",
    "/images/hotdog.svg",
    "/images/ordenar-horizontal.png",
    "/images/burger.svg",
    "/images/mapa.svg",
    "/images/flecha-usuario.svg",
    "/images/zanella.svg",

    "/images/ham3.png",
    "/images/ambur.webp",
    "/images/towerburger.png",
    "/images/pizza10.webp",
    "/images/pizza15.webp",
    "/images/hamGrande.webp",
    "/images/burgerGigante.png",
    "/images/pizza-grande15.webp",
    "/images/pizza-salaminGrande.webp",



    // UI
    "/images/casa.svg",
    "/images/atras.png",
    "/images/estrella.svg",
    "/images/fuego.svg",
    "/images/carrito.svg",
    "/images/lupa.png",
    "/images/notificacion.svg",


    "/images/corazon.svg",
    "/images/menuGrande.avif",
    "/images/standardPancho-big.webp",
    "/images/standardPancho-small.webp",
    "/images/simbolo4.png",
    "/images/simbolo5.png",
    "/images/reloj.svg",
    "/images/carritoRojo.svg",
    "/images/simbolo1.png",
    "/images/simbolo2.png",

     

    //HTML
    "index.html",
    "/vistas/carrito.html",
    "/vistas/comida.html",
    "/vistas/inicio.html",
    "/vistas/menu.html",
    "/templates/cartas.hbs",
    "/templates/cartelera.hbs",
    "/templates/productos-carrito.hbs",
    "/templates/perfil.hbs",
    "/vistas/perfil.html",
    //JS
    "/js/carrito.js",
    "/js/comida.js",
    "/js/inicio.js",
    "/js/main.js",
    "/js/menu.js",
    "/js/productos.js",
    "/js/perfil.js",
    
    //CSS
    "/css/main.css",

    //google iconos
    "/images/iconos/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2",

]


self.addEventListener("install", e => {
    console.warn(" -----> sw install")

    self.skipWaiting() //skip waiting automatico de sw

    const cacheEstatic = caches.open(CACHE_STATIC_NAME).then(cache => {
        //   console.log(cache)
        //guardar recursos de API SHELL
        return cache.addAll( //promesa acaba en constante cache. setea cache y devuelve promesa
            appShellFiles)
    })

    const cacheInmutable = caches.open(CACHE_INMUTABLE_NAME).then(cache => {
        //  console.log(cache)
        //guardar recursos de API SHELL
        return cache.addAll([ //promesa acaba en constante cache. setea cache y devuelve promesa
            "https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.7.7/handlebars.min.js",
            "https://code.jquery.com/jquery-3.6.0.min.js",
            "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",
            "https://fonts.googleapis.com/icon?family=Material+Icons",
            "https://code.getmdl.io/1.3.0/material.red-orange.min.css",
            "https://code.getmdl.io/1.3.0/material.min.js",
        ])
    })

    e.waitUntil(Promise.all([cacheEstatic, cacheInmutable])) // esperar a que todas las promesas async terminen
})





self.addEventListener("activate", e => { //deberia borrar cache que no esten en whitelist
    console.warn(" -----> sw activate")
    const cacheWhitelist = [
        CACHE_STATIC_NAME,
        CACHE_DYNAMIC_NAME,
        CACHE_INMUTABLE_NAME
    ]

    //borro todos los cache que no esten en whiteList

    e.waitUntil( //espero que terminen todos los async procesos antes de terminar
        caches.keys().then(nombres => {
            return Promise.all(  // todas las promesas
                nombres.map(key => { //devuelve array de promesas
                    if (!cacheWhitelist.includes(key)) { // si la key es nueva

                        return caches.delete(key) // mapeo caches que necesito borrar
                    }
                })
            )

        }
        ))
})


 
self.addEventListener('fetch', e => {
    //console.warn('---> sw fetch!')

    if (CON_CACHE) {
        let { url, method } = e.request  //destructuring object
        //   console.log(e.request)

        if (method == 'GET' && !url.includes('mockapi.io')) {

            const respuesta = caches.match(e.request).then(res => {
                if (res) {
                    console.log('EXISTE: el recurso existe en el cache', url)
                    return res
                }
                console.error('NO EXISTE: el recurso NO existe en el cache', url)

                return fetch(e.request).then(nuevaRespuesta => {
                    caches.open(CACHE_DYNAMIC_NAME).then(cache => {
                        cache.put(e.request, nuevaRespuesta)
                    })
                    return nuevaRespuesta.clone()
                })
            })
            e.respondWith(respuesta)
        }
        else {
            console.warn('BYPASS', method, url)
        }
    }
})
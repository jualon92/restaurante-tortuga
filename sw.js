
const cacheName = 'devtools-tips-v3'


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
     
    "/images/casa.svg",
    "/images/corazon.svg",
    "/images/menuGrande.avif",

    //HTML
    "index.html",
    "/vistas/carrito.html",
    "/vistas/comida.html",
    "/vistas/inicio.html",
    "/vistas/menu.html",
    "/templates/cartas.hbs",
    "/templates/cartelera.hbs",
    "/templates/productos-carrito.hbs",
    
    //JS
    "/js/carrito.js",
    "/js/comida.js",
    "/js/inicio.js",
    "/js/main.js",
    "/js/menu.js",
    "/js/productos.js",

    //CSS
    "/css/main.css",
    
    //google iconos
    "/images/iconos/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2",

];

 

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil((async () => {
        const cache = await caches.open(cacheName);
        console.log('[Service Worker] Caching all: app shell and content');
        await cache.addAll(appShellFiles);
    })());
});


self.addEventListener("activate", e => {
    console.log("sw activate")
})

self.addEventListener("fetch", e => {
    console.log("sw fetch")
})




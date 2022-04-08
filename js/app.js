/*const CACHE_NAME = 'cache_b1';
const CACHE_DINAMIC = 'dinamic_b1';
const CACHE_INMUTABLE = 'inmutable_b1';
const APP_SHELL = ['/', './index.html', './css/style.css', 'icon.ico', 'js/app.js', 'images/avs/chica.jpg', 'images/avs/chico.jpg', 'images/avs/profe.png', 'images/avs/vieja.jpg'];
const APP_INMUTABLE =['https://fonts.googleapis.com/css?family=Quicksand:300,400', 
    'https://netdna.bootstrapcdn.com/font-awesome/3.1.1/css/font-awesome.css',
     'https://fonts.googleapis.com/css?family=Lato:400,300',
    'js/libs/jquery.js'
    ]


self.addEventLisetener('install', event =>{
    const cacheAPP = caches.open(CACHE_NAME).then( cache =>{
        cache.addAll(APP_SHELL);
    });
    const cacheINMUTABLE = cache.open(CACHE_INMUTABLE).then(cache =>{
        cache.addAll(APP_INMUTABLE);
    })

    event.waitUntil(Promise.all([cacheAPP, cacheINMUTABLE]));
})


self.addEventListener('active', event=>{
    
})*/


/*
    *   Instalar el Service Worker, para usarlo cuando estemos en local
    *   y cuando estemos en producción (GitHub Pages), para esto validaremos si se
    *   esta corriendo la PWA en desarrollo o en producción

    *   determinar en donde se esta corriendo la aplicación
*/
var url = window.location.href; //obtenemos todo el url
var pwaLocation = 'pwaIndividualIrasema/sw.js'; //path donde se encuentra el sw en GitHub

if(navigator.serviceWorker){
    if(url.includes('localhost')){
        pwaLocation = '/sw.js';
    }
navigator.serviceWorker.register(pwaLocation);
console.log(pwaLocation);
}


/*
    *   4.  Agregar la referencia al archivo js/sw-acceces.js
*/

importScripts('js/sw-access.js')

/*
    * 1. Determinar el contenido de los cache de la PWA
*/

const STATIC_CACHE = 'static_vi';
const DYNAMIC_NAME = 'dynamic_vi';
const INMUTABLE_CACHE = 'inmutable_vi';

const APP_SHELL = [
    '/',
    'index.html',
    'css/style.css',
    'images/icon.ico',
    'images/avs/chica.jpg',
    'js/app.js',
    'js/sw-access.js'
]

const APP_SHELL_INMUTABLE = [
    'https://fonts.googleapis.com/css?family=Quicksand:300,400',
    'https://fonts.googleapis.com/css?family=Lato:400,300',
    'https://netdna.bootstrapcdn.com/font-awesome/3.1.1/css/font-awesome.css',
    'js/libs/jquery.js'
]

/*
    *   2. Hacer la instalación del sw, cargando los caches.
*/

self.addEventListener('install', event => {
    const cacheStatic = caches.open(STATIC_CACHE).then(cache => {
         cache.addAll(APP_SHELL);
     });
     const cacheInmutable = caches.open(INMUTABLE_CACHE).then(cache => {
         cache.addAll(APP_SHELL_INMUTABLE);
     });
     event.waitUntil(Promise.all([cacheStatic,cacheInmutable]));
 });


/*
    *   3. Hacer la activación del sw, eliminando las versiones antiguas de cache.
*/

self.addEventListener('activate', event => {
    const respuesta = caches.keys().then(keys =>{
        keys.forEach(key => {
            if(key !== STATIC_CACHE && key.includes('static')){
                return caches.delete(key);
            }
        });
    });
    event.waitUntil(respuesta);
});


/* 
    *   3.1. Hacer la estrategia de cache, este ejemplo un marco referencial, cada equipo determinará 
    *   3.1.1. la estrategia adecuada para su sitio web, esto conforme a las estrategias trabajadas en clase.

*/
self.addEventListener('fetch', event => {
    const respuesta = caches.match(event.request).then( res => {
        if(res){return res;}
        else{
            return fetch(e.request).then(newRes => {
                //Agregar en el directorio /js un archivo llamdado sw-acces.js
                //y programar la funcion actualizaCacheDinamico, para tener mas limpio el proyecto.
                return actualizaCacheDinamico(DYNAMIC_CACHE, event.request, newRes);
            });
        }
    });
});
# Problemas a solucionar
 Se busca app web  que sirva para hacer pedidos de comida por celular.
 - Cargar rapido:
 Se utiliza preload en primera carga. Ademas se utiliza service worker para que mediante fetch carge los archivos principales en el cache.  Esto ademas posibilita funcionamiento offline.
 Las imagenes se pasaron a formato avif. Si html detecta iphone se utiliza webp  
 
 
 -  Capacidad de instalar:
Service worker mediante manifest.json() permite instalacion. Si detecta que no esta instalado, app muestra displays para instalar. Si ya esta instalado, no aparecen. Esto se logra mediante listener before event install

 - Permanencia:
Se opto por localStorage. Para poder testear o reiniciar el storage ya que no expira se da la opcion de borrar datos de navegacion

- API : se pide data de usuario random  mediante  jquery ajax a https://randomapi.com/  . Esto es para simular un usuario


# Conceptos aplicados
- Single Page Application, vanilla JS  
- prototipado Figma / Mobile first approach /  BEM, SASS, 7 in 1, mixins/herencia
- handlebars para template de cartas de alimentos 
- Material Design Lite para  algunos iconos/botones, y dropdown
- PWA, service worker para fetch e instalar aplicacion. 
- random api https://randomapi.com/  como mock api,  sesion storage para permanencia

 
### Metas
- que opcion Mi perfil utilice atributo nombre, direccion, etc, para hacer un resumen del usuario y permitir cambios.
- agregar checkout pro de mercadopago, que tome direccion del objeto persona obtenido de la api para utilizarlo en resumen antes de la compra
 

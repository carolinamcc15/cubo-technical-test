# :white_square_button: Prueba técnica Front End
El proyecto fue creado utilizando las siguientes tecnologías principales:
- Vite
- React.js
- TypeScript
- TailwindCSS


## :zap: Deploy en Vercel
La aplicación se encuentra disponible en la siguiente URL: [https://cubo-technical-test.vercel.app/](https://cubo-technical-test.vercel.app/)


## :computer: Instalación
1. En la ruta raíz del proyecto, ejecutar el comando `npm install`, para instalar las dependencias.
3. Ejecuta la aplicación por medio del comando `npm run dev`.

## :sparkles: Funcionalidades principales
### Visualizar todos los personajes `/characters`
En esta página muestra la lista de todos los personajes con ayuda de un componente de **paginación** (10 items por página).


![image](https://github.com/carolinamcc15/cubo-technical-test/assets/54415092/bc7b8eae-fff4-4a7b-8a98-e1569d1fd8f5)



### Detalles de un personaje `/characters/:id`
En esta página se muestra toda la información de un personaje en específico y es posible agregarlo o eliminarlo de favoritos.


![image](https://github.com/carolinamcc15/cubo-technical-test/assets/54415092/eaa75d80-71ee-4929-8732-cf8abea02217)


### Agregar y eliminar favoritos
Las cards de los personajes cuentan con un botón que permite agregarlo o eliminarlo de favoritos.

- La persistencia de los datos se maneja por medio de local storage.
- Se incluyeron mensajes de retroalimentación para mejorar la experiencia de usuario.
- También es posible agregarlos y eliminarlos desde la página de detalles del personaje.


![image](https://github.com/carolinamcc15/cubo-technical-test/assets/54415092/78789b25-f89a-460b-ae8d-3abdf03aa584)

### Visualización de favoritos `/favorites`
En esta página es posible visualizar la lista de favoritos que se han almacenado en el sistema, además tiene **filtros de búsqueda** por nombre y género del personaje.


 ![image](https://github.com/carolinamcc15/cubo-technical-test/assets/54415092/fe856ded-aa63-469b-9fd6-97ab7beca864)


![image](https://github.com/carolinamcc15/cubo-technical-test/assets/54415092/810a14a3-2205-4556-98a4-2f36a4b84135)

***
## :pushpin: Notas adicionales
- El sitio web cuenta con una página 404 cuando una ruta no coincide con las existentes.
- El sitio web es responsive en dispositivos móviles, tablets y de escritorio.
- Se incluyeron loaders tipo skeleton mientras se obtiene la información de cada página para mantener la consistencia y mejorar la experiencia de usuario.
- Se incluyó la paginación en la ruta de todos los personajes y los filtros solamente en la ruta de favoritos debido a que la API no provee la posibilidad de obtener personajes por nombre ni género.

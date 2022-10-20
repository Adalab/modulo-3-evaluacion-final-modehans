# **Buscador de Personajes de Harry Potter**

Aplicación web de búsqueda de personajes de Harry Potter, que nos permite pulstar sobre ellas y abrir un tarjeta con más información.
La API a la cual realizamos la petición es http://hp-api.herokuapp.com/api/characters/house/gryffindor.
La información sobre la API se encuentra en el siguiente enlace https://hp-api.herokuapp.com/.
[Página de busqueda de personajes](https://modehans.github.io/buscador-personajes-harry-potter/)

## Funcionamiento:

1. Al iniciar la página se ve un listado de personajes de la casa gryffindor, con foto, nombre y casa.

2.  

3.  Filtrar por nombre.

4.  Filtrar por casa

5.  Al seleccionar uno de los personajes cambia la visualización de la página y se ve la tarjeta con del pesonaje con la siguiente información:

                      - Foto.

                      - Nombre.

                      - Casa a la que pertenece.

                      - Estado de vida.

                      - Género

                      - Especie

                      - Nombres alternativos.

Desde el detalle beve poder volverse a la imágen principal del listado con los filtrados de la usuaria.

6. Si se hacen búsquedas no coincidentes, debe de aparecer el mensaje "No hay ningún personaje que coincida con la palabra XXX"

7. Al pulsar intro hay que impedir que el navegador navegue.

## Bonus

### BONUS: URL compartible

Como ejercicio extra os proponemos que la URL del detalle de personaje sea compatible, es decir,
que si visitamos esa URL directamente en el navegador se vea el detalle del personaje. Si refescamos
el navegador en el detalle de un personaje debe volver a mostrar el detalle del personaje.
Y en el caso de que el usuario navegue a una URL inexistente como por ejemplo
http://localhost:3000/#/detail/12345 (el id 12345 no existe) debemos mostrar un mensaje
del tipo "El personaje que buscas no existe".

### BONUS: Ordenación

Un extra interesante sería que ordenáseis el listado de personajes alfabéticamente por nombre.

### BONUS: Más filtros

Un extra interesante sería que añadáis más filtros para filtrar por ejemplo por género.

### BONUS: Boton Reset

Un extra interesante sería añadir un boton de reset para que la página vuelva a su listado principal

## Funcionamiento:

## Lo que he aprendido

## Instalación por primera vez del proyecto

1. Descargar el repositorio
   > git colone https://github.com/modehans/buscador-personajes-harry-potter.git
2. Abrir una terminal
3. Instalar las dependencias
   > npm install

## Arrancar el proyecto

Una vez instaladas las dependencias hay que arrancar el proyecto. para ello hay que ejecutar el siguiente comando en la terminal.

> npm start

De esta forma se abre una ventana en nuestro navegador y muestra la página web.
Cada vez que se modifique un fichero se refresca la página.

## Tecnología utilizada

- [React](https://es.reactjs.org/)
- [Sass](https://sass-lang.com/)
- [JS](https://developer.mozilla.org/es/docs/Web/JavaScript)

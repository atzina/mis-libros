# Lista de mis libros a leer


## Descripción

Esta aplicación es un prototipo diseñado para gestionar listas de libros que deseo leer. Incluye un buscador integrado que se conecta a la API de Google Books, permitiendo buscar una amplia variedad de libros. A partir de los resultados de la búsqueda, los libros pueden ser fácilmente añadidos a una lista personalizada. Además, la aplicación proporciona la funcionalidad para ver detalles del libro y también para eliminar libros de la lista según sea necesario, ofreciendo una manera simple y eficiente de organizar y gestionar futuras lecturas.

## Consieraciones técnicas

Para desarrollar esta aplicación, utilicé React para construir la interfaz de usuario, aprovechando su sistema de componentes para una mejor organización del código. Implementé el manejo del estado global utilizando Context API, lo que permite compartir datos entre componentes sin necesidad de pasar props manualmente para ahorrar tiempo. La aplicación se conecta a la API de Google Books para buscar libros y mostrar los resultados. También incluí funcionalidades para agregar libros a una lista y eliminarlos, proporcionando una experiencia de usuario fluida y eficiente.

## Mejoras y pasos siguientes

La aplicación aún necesita mejoras en los estilos y en la responsividad, ya que solo se implementaron algunos queries para dispositivos móviles y no se completaron. Además, es necesario comentar el código para una mejor comprensión y mantenimiento. También falta implementar el uso de localStorage para que los datos de la lista de libros persistan, incluso cuando se recargue la página.
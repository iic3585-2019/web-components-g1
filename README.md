## Setup

Clone the repo and install the dependencies using the following command:

```
yarn
```

## Run the game

To run the game you have to run the following command
```
yarn start
```

Then visit `localhost:8080` and there you go!

## Code structure

Hay cuatro componentes principales:
1. `/markdown.js`: contiene la lógica para hacer un tag que permita mostrar en estilo markdown el texto que tiene adentro. Está hecho usando shadowdom para poder separar el estilo markdown del total de la página.
1. `/starbar.js`: contiene la estructura de un tag `star-bar`, recibe el número de estrellas y el máximo de estrellas que pueden haber. Además, tiene la funcionalidad clickeable para cambiar la cantidad de estrellas seleccionadas.
1. `/product.js`: contiene la estructura de un tag `product-card` que muestra la información de un producto. Usa el tag de `star-bar` para mostrar las estrellas del producto. También, abre un modal para mostrar el detalle del producto que puede ser escrito usando markdown. Para mostrar el estilo MD usa el tag `mark-down`. El modal está hecho en base a un template en `static/index.html`.
1. `/products-container.js`: Es el contenedor de las tarjetas de los productos. Tiene un input que permite filtrar por nombre de producto y muestra los productos según eso.

Estos 4 componentes se definen como elementos HTML customizados en `index.js` y cada uno tiene un archivo `scss` en la misma carpeta para modificar su estilo.

The HTML index `static/index.html` is inside the static folder since this is the
folder that is served alongside the webpack bundles.

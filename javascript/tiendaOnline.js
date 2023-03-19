// Uso de Storage
class Producto {
  constructor(productos) {
    this.id = productos.id;
    this.prenda = productos.prenda;
    this.precio = productos.precio;
    this.cantidad = productos.cantidad;
    this.precioTotal = productos.precio;
  }

  agregarUnidad() {
    this.cantidad++;
  }

  quitarUnidad() {
    this.cantidad--;
  }

  actualizarPrecioTotal() {
    this.precioTotal = this.precio * this.cantidad;
  }
}

// Obtenemos el div por ID que contendrá nuestras cards para mostrar en la vista HTML
const viewProductsInHTML = (array) => {
  let contenedor = document.getElementById("container");
  contenedor.innerHTML = "";

  // Recorremos el array, por cada producto imprimimos una card
  for (const product of array) {
    let card = document.createElement("div");

    card.innerHTML = `
        <div class="card text-center" style="width: 18rem;">
            <div class="card-body">
                <img src="${product.img}" id="img${product.id}" class="card-img-top img-fluid" alt="${product.descripcion}">
                <h2 class="card-title">${product.prenda}</h2>
                <h5 class="card-subtitle mb-2 text-muted">${product.descripcion}</h5>
                <p class="card-text">$${product.precio}</p>

                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button id="add${product.prenda}${product.id}" type="button" class="btn btn-dark"> Agregar </button>
                </div>
            </div>
        </div>      
        `;

    contenedor.appendChild(card);

    let boton = document.getElementById(`add${product.prenda}${product.id}`);
    boton.addEventListener("click", () => addToCarrito(product));
  }
};

// checkeamos si hay algun valor guardado en el storage basado en la key
// Si existe la key buscada en el storage nos traemos lo almacenado
const checkCarritoStorage = () => {
  let contenidoEnStorage = JSON.parse(localStorage.getItem("storageCarrito"));

  if (contenidoEnStorage) {
    let array = [];

    for (const objeto of contenidoEnStorage) {
      let producto = new Producto(objeto);
      producto.actualizarPrecioTotal();
      array.push(producto);
    }

    imprimirTable(array);

    return array;
  } else return [];
};

//      Funcion para agregar produtos al carrito
const addToCarrito = (producto) => {
  let index = carrito.findIndex((elemento) => elemento.id === producto.id);
  console.log({ index });
  if (index != -1) {
    carrito[index].agregarUnidad();
    carrito[index].actualizarPrecioTotal();
  } else {
    let prenda = new Producto(producto);
    prenda.cantidad = 1;
    carrito.push(prenda);
  }

  // Actualizamos el storage y el contenido de la table
  localStorage.setItem("storageCarrito", JSON.stringify(carrito));
  imprimirTable(carrito);
};

//      Funcion para eliminar produtos al carrito
const deleteToCarrito = (id) => {
  let index = carrito.findIndex((element) => element.id === id);

  if (carrito[index].cantidad > 1) {
    carrito[index].quitarUnidad();
    carrito[index].actualizarPrecioTotal();
  } else {
    carrito.splice(index, 1);

    // document.getElementById("table-carrito").innerHTML = "";
    // document.getElementById("action-carrito").innerHTML = "";
  }

  localStorage.setItem("storageCarrito", JSON.stringify(carrito));
  imprimirTable(carrito);
};

//      Funcion para vaciar el carrito completo
const vaciarCarrito = () => {
  carrito = [];
  localStorage.removeItem("storageCarrito");
  swal("Compra eliminada con éxito", "", "success");

  document.getElementById("table-carrito").innerHTML = "";
  document.getElementById("action-carrito").innerHTML = "";
};

//      Funcion para comprar el carrito
const comprarCarrito = () => {
  carrito = [];
  localStorage.removeItem("storageCarrito");
  swal("Compra realizada con éxito", "", "success");

  document.getElementById("table-carrito").innerHTML = "";
  document.getElementById("action-carrito").innerHTML = "";
};

const obtenerPrecioTotal = (array) => {
  return array.reduce((total, elemento) => total + elemento.precioTotal, 0);
};

// Recibe el contenido del carrito y lo imprime en el html
// en una table
const imprimirTable = (array) => {
  let contenedor = document.getElementById("table-carrito");
  contenedor.innerHTML = "";

  // Creamos el div que contendrá la table
  let table = document.createElement("div");

  // A ese div le agregaremos todos los datos de la table
  table.innerHTML = `
        <table id="tableCarrito" class="table table-striped table-hover">
            <thead>         
                <tr>
                    <th>Item</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Accion</th>
                </tr>
            </thead>

            <tbody id="bodyTable">

            </tbody>
        </table>
    `;

  contenedor.appendChild(table);

  // Una vez que dibujamos la table, obtenemos el id del body de la table
  // donde imprimiremos los datos del array
  let bodyTable = document.getElementById("bodyTable");

  for (let product of array) {
    let datos = document.createElement("tr");
    datos.innerHTML = `
                <td>${product.prenda}</td>
                <td>${product.cantidad}</td>
                <td>$${product.precioTotal}</td>
                <td><button id="agregar${product.id}" class="btn btn-dark">Agregar</button></td>
                <td><button id="eliminar${product.id}" class="btn btn-dark">Eliminar</button></td>
      `;

    bodyTable.appendChild(datos);

    let botonAgregar = document.getElementById(`agregar${product.id}`);
    botonAgregar.addEventListener("click", () => addToCarrito(product));
    let botonEliminar = document.getElementById(`eliminar${product.id}`);
    botonEliminar.addEventListener("click", () => deleteToCarrito(product.id));
  }

  let precioTotal = obtenerPrecioTotal(array);
  let actionCarrito = document.getElementById("action-carrito");
  actionCarrito.innerHTML = `
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <h5 class="w-100 text-left"> PrecioTotal: $${precioTotal}</h5>
            <button id="vaciarCarrito" onclick="vaciarCarrito()" class="btn btn-dark me-md-2">Vaciar Carrito</button>
            <button id="comprarCarrito" onclick="comprarCarrito()" class="btn btn-dark">Comprar Carrito</button>
        </div>
	`;
};

//      Funcion para filtrar busqueda en base al valor ingresado al input
const filtrarBusqueda = (e) => {
  e.preventDefault();
  let ingreso = document.getElementById("searchId").value.toLowerCase();
  let arrayFilter = productos.filter((elemento) =>
    elemento.prenda.toLowerCase().includes(ingreso)
  );

  viewProductsInHTML(arrayFilter);
};

//      Event
let btnFiltrar = document.getElementById("filterButton");
btnFiltrar.addEventListener("click", filtrarBusqueda);

//      funcion para obtener los valores del json con un fetch
let productos = fetch("./json/productos.json")
  .then((response) => response.json())
  .then((data) => viewProductsInHTML(data))
  .catch(() => console.log("Error al buscar productos"))
  .finally(() => console.log("Carga de imgs en la vista"));

//       Invocación de funciones ---

//       Consulta al Storage para saber si hay información almacenada
//       Si hay datos, se imprimen en el HTML al refrescar la página
let carrito = checkCarritoStorage();

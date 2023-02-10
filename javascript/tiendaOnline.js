// Función que muestra lo que se agrega al carrito
const mostrarCarrito = () => {
    let mensaje = `Carrito:`;
    Carrito.forEach((value, index) => {
    mensaje += `
    ${index + 1} - ${value.producto} ${value.descripcion} ${value.talle} $${value.precio}`;
    });
    alert(mensaje);
};

// Función que muestra el catalogo, para agregar productos al carrito
const mostrarCatalogo = () => {
    let mensaje =  `Productos: Seleccione el codigo para agregar al carrito`;
    Productos.forEach((value, index) => {
    mensaje += `
        ${index + 1} - ${value.producto} ${value.descripcion} ${value.talle} $${value.precio}
    `;
    });
    
    let opcion = parseInt(prompt(mensaje));
    Carrito.push(Productos[opcion - 1]);
};

// Función que filtra por producto(actualmente Pantalon - Remera)
const filtrarCatalogo = () => {
    let productoFiltrado = prompt(`Filtre por tipo de producto: 
                            Pantalon - Remera`
    );
    let filtro = Productos.filter( (element, index, producto) => {
        return element.producto == productoFiltrado;
    });
    let respuesta = '';
    
    for (let i=0;i<filtro.length;i++)
    {
        respuesta += `
        ${filtro[i].producto}  ${filtro[i].descripcion}`;
    }
    alert(respuesta);
};
  
// Función que muestra el total de lo agregado al carrito
const mostrarTotal = () => {
    let total = 0;
    Carrito.forEach((value) => {
      total += value.precio;
    });
    alert(" Su total es: " + total);
};
  
// array de carrito
const Carrito = [];

class Producto {
    constructor(producto, talle, descripcion, precio) {
        this.producto = producto;
        this.talle = talle;
        this.descripcion = descripcion;
        this.precio = precio;
    }
}
  
// contantes con los valores a mostrar
const remeraStranger = new Producto("Remera","L","Stranger Things Hellfire Club logo ranglan", 5150);
const remeraChicago = new Producto("Remera","M","Chicago", 5150);
const remeraBulls = new Producto("Remera","M","Bulls", 2150);
const remeraNewYork = new Producto("Remera","S","New York", 3150);
const remeraSanAndres= new Producto("Remera","XL","San Andres", 4150);
const remeraShrek = new Producto("Remera","XL","Shrek", 3150);
const remeraLMessi = new Producto("Remera","XXL","Lionel Messi", 6150);
const remeraDMaradona = new Producto("Remera","XXL","Diego Maradona", 6150);
const pantalonStranger = new Producto("Pantalon","L","Stranger Things Hellfire Club logo ranglan", 6650);
const pantalonChicago = new Producto("Pantalon","M","Chicago", 650);
const pantalonBulls = new Producto("Pantalon","M","Bulls", 5550);
const pantalonNewYork = new Producto("Pantalon","S","New York", 5450);
const pantalonSanAndres= new Producto("Pantalon","XL","San Andres", 6550);
const pantalonShrek = new Producto("Pantalon","XL","Shrek", 7750);
const pantalonLMessi = new Producto("Pantalon","XXL","Lionel Messi", 6950);
const pantalonDMaradona = new Producto("Pantalon","XXL","Diego Maradona", 6650);

const Productos = [remeraStranger, remeraChicago, remeraBulls, remeraNewYork, remeraSanAndres, remeraShrek, remeraLMessi, remeraDMaradona, pantalonStranger, pantalonChicago, pantalonBulls, pantalonNewYork, pantalonSanAndres, pantalonShrek, pantalonLMessi, pantalonDMaradona];
  
let opcion = parseInt(
    prompt(`Bienvenido a RemerJS, que operación desea realizar?  
                1- Ver Catalogo 
                2- Filtrar por producto 
                3) Mi Carrito 
                4) Total de compras 
                5) Finalizar compra
                6) Cancelar operación`
            )
 );

let terminoLaCompra = false;
  
// while que sigue mostrando prompt hasta que desee finalizar la compra o cancelarla
while (!terminoLaCompra) {
    switch (opcion) {
    case 1:
        mostrarCatalogo();
        break;
    case 2:
        filtrarCatalogo();
        break;
    case 3:
        mostrarCarrito();
        break;
    case 4:
        mostrarTotal();
        break;
    case 5:
        alert("Su compra ha sido exitosa. Gracias por elegirnos!");
        terminoLaCompra = true;
        break;
    default:
        break;
    }
    opcion = parseInt(
        prompt(`Bienvenido a RemerJS, que operación desea realizar?  
        1- Ver Catalogo 
        2- Filtrar por producto 
        3- Mi Carrito 
        4- Total de compras 
        5) Finalizar compra
        6) Cancelar operación`
        )
    );
    if (opcion == 6) {
      alert("Su operación ha sido cancelada. Nos vemos pronto, RemerJS!");
      terminoLaCompra = true;
    }
  }
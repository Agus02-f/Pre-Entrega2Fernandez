class Producto {
  constructor(precio, cantidad) {
    this.precio = parseFloat(precio);
    this.cantidad = parseInt(cantidad);
    this.categoria = categoria.toLowerCase();
  }

  calcularPrecioconIva() {
    return this.precio * 1.21 * this.cantidad;
  }
}
class Carrito {
  constructor() {
    this.productos = [];
    this.total = 0;
  }

  agregarProducto(precio, cantidad, categoria) {
    const producto = new Producto(precio, cantidad, categoria);
    this.productos.push(producto);
  }

  calcularTotalconIva(categoria) {
    let total = 0;

    return this.productos
     .filter((producto) => !categoria || producto.categoria === categoria)
     .reduce((acc, producto) => acc + producto.calcularPrecioconIva(), 0);
  }
}
const carrito = new Carrito();

let precio;
let cantidad;
let categoria;
let continuar = false;
do {
  precio = prompt('Ingrese precio');
  cantidad = prompt('Ingrese cantidad');
  categoria = prompt('Ingrese categoria');
  continuar = prompt('Quiere continuar ingresando valores? (y/N)') === 'y';
  carrito.agregarProducto(precio, cantidad, categoria);
} while(continuar);
alert('El total a pagar es: ' + carrito.calcularTotalconIva('lacteos'));
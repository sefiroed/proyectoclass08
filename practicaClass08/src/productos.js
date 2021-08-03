/*Creamos nuestra clase con los metodos a utilizar 
en la carpeta index.js*/

class Producto {
  productos;
  constructor() {
    this.productos = [];
  }
  guardar(dato) {
    const producto = { id: this.productos.length, ...dato };
    this.productos.push(producto);
    return producto;
  }
  leer() {
    return this.productos;
  }
  leerPorId(id) {
    return this.productos.find((producto) => producto.id == id);
  }
}

export default Producto;

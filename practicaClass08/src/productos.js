// import express from 'express';

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

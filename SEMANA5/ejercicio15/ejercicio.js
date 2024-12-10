let inventario = [];

function agregarProducto(producto) {
  if (inventario.some(p => p.codigo === producto.codigo)) {
    alert("El código ya existe");
  } else {
    inventario.push(producto);
  }
}

function eliminarProducto(codigo) {
  inventario = inventario.filter(p => p.codigo !== codigo);
}

function visualizarProductos() {
  inventario.forEach(p => console.log(p));
}

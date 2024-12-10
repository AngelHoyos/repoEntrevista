let productos14 = [
    { nombre: "Papa", stock: 20, umbral: 10 },
    { nombre: "Arroz", stock: 5, umbral: 10 },
    { nombre: "Aceite", stock: 8, umbral: 10 }
  ];
  
  function verificarStock() {
    productos14.forEach(producto => {
      if (producto.stock < producto.umbral) {
        alert(`Stock bajo de ${producto.nombre}`);
      }
    });
  }
  
  function actualizarStock(nombre, cantidad) {
    let producto = productos14.find(p => p.nombre === nombre);
    producto.stock += cantidad;
  }
  
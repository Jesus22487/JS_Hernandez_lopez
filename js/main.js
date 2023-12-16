

document.addEventListener("DOMContentLoaded", function () {
  const productos = document.querySelectorAll('.card');
  const listaCarrito = document.getElementById('listaCarrito');
  const totalCarrito = document.getElementById('totalCarrito');
  const vaciarCarritoBtn = document.getElementById('vaciarCarrito');
  const realizarPagoBtn = document.getElementById('realizarPago');

  
  //almacenar con localstorage.getitem con key carrito que es el id en HTML.
  //
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  productos.forEach((producto, index) => {
    const ordenarBtn = producto.querySelector('.Ordenar');
    const inputCantidad = producto.querySelector('input');
    const precioProducto = parseFloat(producto.getAttribute('dataPrecio'));

    ordenarBtn.addEventListener('click', () => {
      const cantidad = parseInt(inputCantidad.value);
      if (cantidad > 0) {
        agregarAlCarrito(index, cantidad, precioProducto);
        actualizarCarrito();
      } else {
        Swal.fire("Ingresa al menos un producto");
      }
    });
  });

  vaciarCarritoBtn.addEventListener('click', () => {
    carrito = [];    
      localStorage.removeItem('carrito');
        actualizarCarrito();
  });

  
  realizarPagoBtn.addEventListener('click', () => {
    if (carrito.length > 0) {
      const total = calcularTotal();
     
      Swal.fire({
        position: "top",
        icon: "success",
        title: (`Gracias por su compra: $${total.toFixed(2)}`),
        showConfirmButton: false,        
      });

      localStorage.removeItem('carrito');

      console.log("entra el temporizador 2 seg");
      setTimeout(() => {        
        location.reload();
      }, 2000);
            
      } else {
      Swal.fire("Añade productos al carrito antes de realizar el pago.");
    }
               
  });
  

  function agregarAlCarrito(index, cantidad, precioProducto) {
    const producto = {
      nombre: productos[index].querySelector('.cardTitle').textContent,
      precio: precioProducto,
      cantidad: cantidad
    };

    const existente = carrito.find(item => item.nombre === producto.nombre);

    if (existente) {
      existente.cantidad += cantidad;
    } else {
      carrito.push(producto);
    }

    // Guardar carrito en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }

  function actualizarCarrito() {
    console.log("actualizando el carro de compra");
    listaCarrito.innerHTML = '';

    carrito.forEach(producto => {
      const li = document.createElement('li');
      li.className = 'listGroupItem';
      li.textContent = `${producto.nombre} - Cantidad: ${producto.cantidad}`;
      listaCarrito.appendChild(li);
    });

    const total = calcularTotal();
    totalCarrito.textContent = total.toFixed(2);
  }

  actualizarCarrito();//se llama funcion para visualizar la lista de lo que se tenga almacenado en local storage

  function calcularTotal() {
    return carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
  }
});


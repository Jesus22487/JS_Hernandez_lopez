// Precios de los productos
const precios = {
    Hamburguesa: 150,
    Pizza: 280,
    Ensalada: 100,
    Sushi: 150,
    Pasta: 80
};

// Función para agregar un producto a la lista
function agregarProducto() {
    let producto = document.getElementById("producto").value;     
    let cantidad = parseInt(document.getElementById("cantidad").value);

    if (isNaN(cantidad)) {
        alert('Por favor, ingrese una cantidad válida.');
        return;
    }

    let precio = precios[producto]; //variable que se enlaza con el objeto precios 
    let totalProducto = cantidad * precio;

    // Crear objeto con la información del producto
    let productoInfo = {
        nombre: producto,
        cantidad: cantidad,
        precio: precio,
        total: totalProducto
    };

    // Guardar el producto en el localStorage
    let productos = JSON.parse(localStorage.getItem("productos")) || [];
    productos.push(productoInfo);
    localStorage.setItem("productos", JSON.stringify(productos));

    // Actualizar la lista de productos y el total en la interfaz
    actualizarLista();  
 }
// Función para actualizar la lista de productos y el total
function actualizarLista() {
    let listaProductos = document.getElementById("listaProductos");
    let totalElemento = document.getElementById('total');

    // Limpiar la lista y el total
    listaProductos.innerHTML = '';
    let total = 0;

    // Obtener productos del localStorage
    let productos = JSON.parse(localStorage.getItem('productos')) || [];

    // Recorrer la lista de productos y mostrar en la interfaz
    productos.forEach(function(producto) {

let li = document.createElement('li');
        li.textContent = producto.nombre + " - Cantidad: " + producto.cantidad + ", Precio: $" + producto.precio.toFixed(2) + ", Total: $" + producto.total.toFixed(2);
        listaProductos.appendChild(li);

        total += producto.total;
    });

    // Actualizar el total en la interfaz
    totalElemento.textContent = total.toFixed(2);
}
 
// Función para realizar el cobro
function cobrar() {   

    // Después de realizar el cobro, limpiar el localStorage y la interfaz
    localStorage.removeItem("productos");
    actualizarLista();
    alert("Cobro realizado con éxito.");}

// Cargar la lista de productos al cargar la página
window.onload = function() {
    actualizarLista();
};


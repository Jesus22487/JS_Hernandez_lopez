// alert("empezemos con la aventura de programar");

const PRECIO_PRODUCTO_1 = 120;

let producto = prompt("Ingresa un número de producto");

console.log("Seleccionaste: " + producto + " productos");

if (producto > 0) {
    let totalCuenta = calcularProducto(producto); // se manda a llamar la función
    console.log("Tu cuenta es por " + totalCuenta);

    let monto = parseFloat(prompt("Con cuánto vas a pagar?"));

    while (monto < totalCuenta) {
        console.log("Su pago fue de " + monto);
        monto = parseFloat(prompt("Con cuánto vas a pagar?"));
    }

    console.log("Gracias por su pago. ¡Compra exitosa!");
} else {
    alert("Refresca para volver a intentar");
}

function calcularProducto(producto) {
    return producto * PRECIO_PRODUCTO_1;
}

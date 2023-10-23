//alert("empezemos con la aventura de programar");

const PRECIO_PRODUCTO_1 = 120;

let producto= prompt("ingresa un numero de producto" );

console.log("Seleccionaste : " + producto + "productos");

if (producto > 0){
    console.log("Seleccionaste : " + producto + "productos");

  
    let totalCuenta = calcularProducto (producto); //se manda a llamar función
    console.log("tu cuenta es por " + totalCuenta );

    prompt("con cuanto vas a pagar?")


    let total = prompt("con cuanto vas a pagar?");
    
    while (total >= totalCuenta) {
        console.log ("su pago fue de " + total);
        total = prompt("con cuanto vas a pagar?");
    }


} else{
    alert ( "refresca para volver a intentar")
}


 function calcularProducto (producto) { //se crea función

    return producto * PRECIO_PRODUCTO_1;

}

function totalPago (totalCuenta, montoActual) { 

   let total;
   
  total= totalCuenta - montoActual;

  return total;
}
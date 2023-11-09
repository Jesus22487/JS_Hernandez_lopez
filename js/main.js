// alert("empezemos con la aventura de programar");




const PRECIO_PRODUCTO_1 = 120;



let especialidad = prompt ("que estas buscando,comida o bebida");
let nombreProducto = prompt("ingresa platillo")


//esta función se encarga de mostrar en la consola la información de cada elemento del array menu de una manera específica.
function mostrarMenu (menu){ 
   menu.forEach( menu => console.log(menu.nombreProducto+ " - " +menu.especialidad+ " - " +menu.precio));
}

//const resultado = menu: Crea una nueva variable llamada resultado y le asigna el valor del array menu la función filtrarMenu filtra el array menu basándose en dos funciones de filtro (filtrarnombreProducto y filtrarespecialidad). Luego, si hay elementos que cumplen con las condiciones de ambos filtros, muestra la información de esos elementos utilizando la función mostrarMenu. Si no hay elementos que cumplan con las condiciones, muestra una alerta indicando que no tienen esa especialidad.
function filtrarMenu(){
   const resultado = menu
   .filter(filtrarnombreProducto)
   .filter(filtrarespecialidad);




   if(resultado.length > 0){
    mostrarMenu (resultado);

   }else{
    alert("no tenemos esa especialidad") 
     
   }
}

function filtrarnombreProducto(menu){
    if(nombreProducto){
        return menu.nombreProducto === nombreProducto;

    }
   //Si la variable nombreProducto no está definida o es falsa, la función simplemente devuelve el valor original del parámetro menu sin aplicar ningún filtro
    return menu;
}

function filtrarespecialidad(menu){
    if(especialidad){
        return menu.especialidad === especialidad;

    }   
    return menu;
}


//filtrarMenu(menu);//llamado de funcion donde se ingresara producto y/o especialidad.

/**************************************************************************************************************************************************************************** */

 let producto = prompt("Cuantos productos llevas");




function calcularProducto (producto) {
    return producto * PRECIO_PRODUCTO_1;
}

//document.write("Seleccionaste: " + producto + " productos")
console.log("Seleccionaste: " + producto + " productos");

//funcion para comenzar la captura de producto
function elegirProducto (){
    if (producto > 0) {

        let totalCuenta = calcularProducto(producto); // se manda a llamar la función
            console.log("Tu cuenta es por " + totalCuenta);
    
        let monto = parseFloat(prompt("Con cuánto vas a pagar?"));
    
        while (monto < totalCuenta) {
            console.log("Su pago fue de " + monto + " falta por pagar");
                alert("falta por pagar $" +( totalCuenta - monto))
                    monto = parseFloat(prompt("Con cuánto vas a pagar?"));
            
          
        }
        console.log("Gracias por su pago. ¡Compra exitosa!");
            alert( "su cambio $" + (monto - totalCuenta));
       
    } else {
        alert("Refresca para volver a intentar");
    }

}//terina funcion elegeir producto


console.table(menu)
elegirProducto()
let resultadoDeduccion;
let deduccionesPorCompras = [];

// Solicitar al usuario el monto de la compra
let ingreso = prompt('Ingrese el monto de su compra: ');

// Convertir la entrada a un número
ingreso = parseFloat(ingreso);

// Verificar si la entrada es un número válido
if (isNaN(ingreso) || ingreso <= 0) {
    alert("Por favor, ingrese un monto de compra válido y mayor que cero.");
} else {
    // Llamar a la función para calcular el porcentaje después de recibir la entrada
    calcularPorcentaje(ingreso);
    // Llamar a la función para almacenar la deducción después de calcular el porcentaje
    almacenarDeduccion();
}

function calcularPorcentaje(ingreso) {
    resultadoDeduccion = ingreso * 0.25; // Calcula el 25% del monto de la compra
    document.write("Deducción calculada: " + resultadoDeduccion + "<br>");
    return resultadoDeduccion;
}

function almacenarDeduccion() {
    deduccionesPorCompras.push(resultadoDeduccion);
    document.write("Deducciones almacenadas: " + deduccionesPorCompras + "<br>");
}


document.write(deduccionesPorCompras);




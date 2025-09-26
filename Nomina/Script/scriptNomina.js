/*
40 HORAS COSTO NORMAL=200
HORAS EXTRA X2
*/
function calcularNomina(){
  let horasTrabajadas = parseFloat(document.getElementById("horasTrabajadas").value);
  let tarifaHora = parseFloat(document.getElementById("tarifaHora").value);
  
  let horasNormales = 0;
  let horasExtras = 0;

  if (horasTrabajadas > 40) {
    horasNormales = 40;
    horasExtras = horasTrabajadas - 40;
  } else {
    horasNormales = horasTrabajadas;
    horasExtras = 0;
  }

  subtotal = (horasNormales * tarifaHora) + (horasExtras * tarifaHora * 2);
  impuesto = subtotal * 0.10;
  total = subtotal - impuesto;


  document.getElementById("horasNormales").value = horasNormales;
  document.getElementById("horasExtras").value = horasExtras;
  document.getElementById("Subtotal").value = subtotal;
  document.getElementById("ISP").value = impuesto;
  document.getElementById("Monto").value = total;
}

function limpiarFormulario(){
  document.getElementById("horasTrabajadas").value = "";
  document.getElementById("tarifaHora").value = "";
  document.getElementById("horasNormales").value = "";
  document.getElementById("horasExtras").value = "";
  document.getElementById("Subtotal").value = "";
  document.getElementById("ISP").value = "";
  document.getElementById("Monto").value = "";
  document.getElementById("empleadoID").value = "";
  
}


const inputNombre = document.getElementById('nombre');

inputNombre.addEventListener('input', function() {
    
    const valor = this.value;

    const textoFormateado = valor.split(' ').map(palabra => {
        if (palabra.length > 0) {
            return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
        }
        return ''; 
    }).join(' ');

    
    this.value = textoFormateado;
});
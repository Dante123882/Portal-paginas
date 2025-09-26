
   function calcularSuma() {
  
    let numero1String = document.getElementById("numero1").value;
    let numero2String = document.getElementById("numero2").value;

    
    let numero1 = parseFloat(numero1String);
    let numero2 = parseFloat(numero2String);

    
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, ingresa números válidos");
        document.getElementById("numero1").value = "";
        document.getElementById("numero2").value = "";
        document.getElementById("resultado").value = "";
        return;
    }
    let resultado = numero1 + numero2;
    document.getElementById("resultado").value = resultado;
    }


  function calcularResta() {
  
  let numero1String = document.getElementById("numero1").value;
  let numero2String = document.getElementById("numero2").value;

  
  let numero1 = parseFloat(numero1String);
  let numero2 = parseFloat(numero2String);

  
  if (isNaN(numero1) || isNaN(numero2)) {
    alert("Por favor, ingresa números válidos");
    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";
    document.getElementById("resultado").value = "";
    return;
  }
  let resultado = numero1 - numero2;
  document.getElementById("resultado").value = resultado;
  }



    function calcularmultiplicacion() {
    
    let numero1String = document.getElementById("numero1").value;
    let numero2String = document.getElementById("numero2").value;

    
    let numero1 = parseFloat(numero1String);
    let numero2 = parseFloat(numero2String);

    
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, ingresa números válidos");
        document.getElementById("numero1").value = "";
        document.getElementById("numero2").value = "";
        document.getElementById("resultado").value = "";
        return;
    }
    let resultado = numero1 * numero2;
    document.getElementById("resultado").value = resultado;
    }

 


  function calcularDivision() {
  
  let numero1String = document.getElementById("numero1").value;
  let numero2String = document.getElementById("numero2").value;

  
  let numero1 = parseFloat(numero1String);
  let numero2 = parseFloat(numero2String);

  
  if (isNaN(numero1) || isNaN(numero2)) {
    alert("Por favor, ingresa números válidos");
    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";
    document.getElementById("resultado").value = "";
    return;
  }
  let resultado = numero1 / numero2;
  document.getElementById("resultado").value = resultado;

  }

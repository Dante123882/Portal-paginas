function calcular(operador) {
    // 1. Obtenemos los valores de los inputs
    const numero1String = document.getElementById("numero1").value;
    const numero2String = document.getElementById("numero2").value;

    // 2. Convertimos los valores a números flotantes
    const numero1 = parseFloat(numero1String);
    const numero2 = parseFloat(numero2String);

    // 3. Verificamos si los valores ingresados son números válidos
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, ingresa números válidos en ambos campos.");
        return; // Detenemos la función si la entrada no es válida
    }

    let resultado;

    // 4. Usamos un switch para determinar qué operación realizar
    switch (operador) {
        case '+':
            resultado = numero1 + numero2;
            break;
        case '-':
            resultado = numero1 - numero2;
            break;
        case '*':
            resultado = numero1 * numero2;
            break;
        case '/':
            // Verificación para evitar la división por cero
            if (numero2 === 0) {
                alert("Error: No se puede dividir por cero.");
                return;
            }
            resultado = numero1 / numero2;
            break;
        default:
            alert("Operación no válida.");
            return;
    }

    // 5. Mostramos el resultado en el input correspondiente
    document.getElementById("resultado").value = resultado;
}
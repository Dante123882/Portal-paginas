// Esperamos a que todo el contenido de la página (HTML) se cargue primero
document.addEventListener('DOMContentLoaded', () => {

    // 1. Seleccionamos todos los enlaces del menú y todos los contenidos de los programas
    const menuLinks = document.querySelectorAll('.menu-link');
    const programas = document.querySelectorAll('.programa-contenido');

    // Función para mostrar un programa específico y ocultar los demás
    function mostrarPrograma(idPrograma) {
        // Recorremos todos los divs de programas
        programas.forEach(programa => {
            // Comprobamos si el ID del programa actual es el que queremos mostrar
            if (programa.id === idPrograma) {
                // Si es, le añadimos la clase 'activo' para que el CSS lo muestre
                programa.classList.add('activo');
            } else {
                // Si no es, le quitamos la clase 'activo' para que el CSS lo oculte
                programa.classList.remove('activo');
            }
        });
    }

    // 2. Recorremos cada enlace del menú para añadirle un detector de clics
    menuLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Prevenimos el comportamiento por defecto del enlace (que es recargar la página o saltar)
            event.preventDefault();

            // Obtenemos el valor del atributo 'data-target' del enlace en el que hicimos clic
            const targetId = link.dataset.target; // Por ej: 'programa1'

            // Llamamos a la función para mostrar el programa correspondiente
            mostrarPrograma(targetId);
        });
    });

    // Opcional: Mostrar el primer programa por defecto al cargar la página
    if (menuLinks.length > 0) {
        mostrarPrograma(menuLinks[0].dataset.target);
    }
});
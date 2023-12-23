document.addEventListener('DOMContentLoaded', (event) => {
    // Asegúrate de que este código se ejecute después de que el DOM esté completamente cargado.
    document.querySelectorAll('.toggle-button').forEach(button => {
        // Inicializar el texto del botón y la visibilidad de la información adicional.
        const scheduleItem = button.closest('.schedule-item');
        const eventInfo = scheduleItem.querySelector('.event-info');
        button.textContent = '▼'; // Flecha hacia abajo por defecto
        eventInfo.style.display = 'none'; // Información oculta por defecto

        // Agregar el evento de clic para cada botón
        button.addEventListener('click', function() {
            // Cambiar la visibilidad de '.event-info'
            const isExpanded = eventInfo.style.display === 'block';
            eventInfo.style.display = isExpanded ? 'none' : 'block';
            // Cambiar el texto del botón basado en la visibilidad
            button.textContent = isExpanded ? '▼' : '▲';
        });
    });
});

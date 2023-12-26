document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.toggle-button').forEach(button => {
        button.addEventListener('click', function() {
            const scheduleItem = this.closest('.schedule-item');
            const eventInfo = scheduleItem.querySelector('.event-info');
            const toggleImage = button.querySelector('.toggle-image');

            // Alternar la clase 'isActive'
            eventInfo.classList.toggle('isActive');

            // Cambiar la fuente de la imagen basado en la clase 'isActive'
            if (eventInfo.classList.contains('isActive')) {
                toggleImage.src = '../assets/images/icons/up.webp';
                toggleImage.alt = 'Contraer';
            } else {
                toggleImage.src = '../assets/images/icons/down.webp';
                toggleImage.alt = 'Expandir';
            }
        });

        // Inicializar el estado de '.event-info' y la imagen del botón
        const scheduleItem = button.closest('.schedule-item');
        const eventInfo = scheduleItem.querySelector('.event-info');
        const toggleImage = button.querySelector('.toggle-image');
        
        if (eventInfo.classList.contains('isActive')) {
            toggleImage.src = '../assets/images/icons/up.webp';
            toggleImage.alt = 'Contraer';
        } else {
            toggleImage.src = '../assets/images/icons/down.webp';
            toggleImage.alt = 'Expandir';
            eventInfo.classList.remove('isActive'); // Asegurarse de que la clase no esté presente
        }
    });
});
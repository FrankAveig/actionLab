document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.schedule-item .toggle-button');
  
    // Función para cerrar todos los detalles y eliminar la clase de animación
    function closeAllDetails() {
      document.querySelectorAll('.schedule-item .event-info').forEach((detail, index) => {
        detail.classList.remove('isActive');
        const buttonImage = toggleButtons[index].querySelector('.toggle-image');
        buttonImage.src = './assets/images/icons/down.webp';
        buttonImage.alt = 'Expandir';
        toggleButtons[index].classList.remove('next-button-active');
      });
    }
  
    // Función para manejar el clic en los botones
    function handleButtonClick(button, eventInfo, toggleImage, index) {
      const isCurrentlyActive = eventInfo.classList.contains('isActive');
      closeAllDetails();
      if (!isCurrentlyActive) {
        eventInfo.classList.add('isActive');
        toggleImage.src = './assets/images/icons/up.webp';
        toggleImage.alt = 'Contraer';
        // Añadir la clase de animación al siguiente botón si existe
        if (index + 1 < toggleButtons.length) {
          toggleButtons[index + 1].classList.add('next-button-active');
        }
      }
    }
  
    // Agregar el evento de clic a todos los botones de alternancia
    toggleButtons.forEach((button, index) => {
      const eventInfo = button.closest('.schedule-item').querySelector('.event-info');
      const toggleImage = button.querySelector('.toggle-image');
      button.addEventListener('click', () => handleButtonClick(button, eventInfo, toggleImage, index));
    });
  
    // Abrir el primer detalle que tiene botón y aplicar la clase de animación al siguiente botón
    if (toggleButtons.length > 0) {
      const firstEventInfo = toggleButtons[0].closest('.schedule-item').querySelector('.event-info');
      const firstToggleImage = toggleButtons[0].querySelector('.toggle-image');
      handleButtonClick(toggleButtons[0], firstEventInfo, firstToggleImage, 0);
    }
  });
  
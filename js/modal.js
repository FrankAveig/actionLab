document.addEventListener('DOMContentLoaded', (event) => {
    // Función para abrir los modales
    const openModalButtons = document.querySelectorAll('[data-modal-target]');
    openModalButtons.forEach(button => {
      button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
      });
    });
  
    // Función para cerrar los modales
    const closeModalButtons = document.querySelectorAll('.close-button');
    closeModalButtons.forEach(button => {
      button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
      });
    });
  
    // Función para cerrar el modal haciendo clic en cualquier lugar fuera del modal
    window.onclick = function(event) {
      if (event.target.className === 'modal') {
        closeModal(event.target);
      }
    }
  
    function openModal(modal) {
      if (modal == null) return;
      modal.style.display = 'block';
    }
  
    function closeModal(modal) {
      if (modal == null) return;
      modal.style.display = 'none';
    }
  });
const countdown = document.getElementById('countdown');
const eventDate = new Date('March 13, 2024 20:00:00').getTime();

const interval = setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `
    <span id="days">${days}</span> días 
    <span id="hours">${hours}</span> horas 
    <span id="minutes">${minutes}</span> minutos 
    <span id="seconds">${seconds}</span> segundos 
  `;

  if (distance < 0) {
    clearInterval(interval);
    countdown.innerHTML = "El evento ha comenzado";
  }
}, 1000);

document.getElementById('reserve-button').addEventListener('click', () => {
  // Aquí pondrías la lógica para llevar al usuario al proceso de reserva
  alert('Redirigiendo al proceso de reserva...');
});
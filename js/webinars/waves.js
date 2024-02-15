/* function animateWave() {
    const path = document.querySelector('#wave path');
    let phase = 0; // La fase de la ola que cambiará con el tiempo
  
    function updatePath() {
      phase += 0.1; // Ajusta para cambiar la velocidad de la animación
      
      const newPath = createWavePath(phase);
      path.setAttribute('d', newPath);
      
      requestAnimationFrame(updatePath);
    }
  
    updatePath();
  }
  
  function createWavePath(phase) {
    // Define aquí los puntos de control iniciales de tu ola
    const wavePoints = [
      // Punto inicial
      { x: 0, y: 51 },
      // Puntos de control y punto final para la primera curva
      { x: 40, y: 56.7 },
      { x: 80, y: 62 },
      { x: 160, y: 74 },
      // Repite para cada curva...
    ];
  
    // Modifica los puntos de la ola basándote en la fase para simular el movimiento
    const newPoints = wavePoints.map(point => {
      const y = point.y + Math.sin(point.x + phase) * 10; // Ajusta el factor para cambiar la amplitud
      return { ...point, y };
    });
  
    // Construye la nueva cadena 'd' basándote en los nuevos puntos
    let newPath = `M${newPoints[0].x},${newPoints[0].y}`;
    for (let i = 1; i < newPoints.length; i += 3) {
      newPath += `C${newPoints[i].x},${newPoints[i].y} ${newPoints[i + 1].x},${newPoints[i + 1].y} ${newPoints[i + 2].x},${newPoints[i + 2].y}`;
    }
  
    return newPath;
  }
  
  animateWave();
 */

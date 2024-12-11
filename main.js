// Animación de las notificaciones con retraso
const notifications = document.querySelectorAll('.notification');

notifications.forEach((notification, index) => {
  setTimeout(() => {
    notification.style.animationDelay = `${index * 0.5}s`; // Retraso entre notificaciones
    notification.classList.add('active'); // Aplica la animación definida
  }, index * 500); // 500 ms de separación entre cada una
});

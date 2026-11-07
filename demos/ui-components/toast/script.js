function showToast(type, title, message, duration = 3000) {
  const container = document.getElementById('toast-container');

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;

  toast.innerHTML = `
    <h4>${title}</h4>
    <p>${message}</p>
    <div class="progress-track">
      <div class="progress-bar"></div>
    </div>
  `;

  toast.querySelector('.progress-bar').style.animationDuration = duration + 'ms';

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(120%)';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

document.addEventListener('DOMContentLoaded', () => {
  const loadComponent = (id, file) => {
    fetch(file)
      .then(response => response.text())
      .then(html => {
        const container = document.getElementById(id);
        if (container) {
          container.innerHTML = html;
        }
      });
  };

  loadComponent('header', 'partials/header.html');
  loadComponent('footer', 'partials/footer.html');
});

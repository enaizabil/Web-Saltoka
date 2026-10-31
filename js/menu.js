// Menú desplegable en móvil. Sin JavaScript el menú queda siempre visible.
document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', function () {
  var boton = document.querySelector('.nav-toggle');
  var menu = document.getElementById('menu');
  if (!boton || !menu) return;

  boton.addEventListener('click', function () {
    var abierto = menu.classList.toggle('open');
    boton.setAttribute('aria-expanded', abierto ? 'true' : 'false');
  });

  // Vídeos: YouTube solo se carga cuando se pulsa el botón de reproducir.
  document.querySelectorAll('[data-video]').forEach(function (enlace) {
    enlace.addEventListener('click', function (e) {
      e.preventDefault();
      var marco = document.createElement('iframe');
      marco.src = 'https://www.youtube-nocookie.com/embed/' + enlace.getAttribute('data-video') + '?autoplay=1';
      marco.title = enlace.getAttribute('aria-label') || 'YouTube';
      marco.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      marco.allowFullscreen = true;
      enlace.replaceWith(marco);
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.classList.contains('open')) {
      menu.classList.remove('open');
      boton.setAttribute('aria-expanded', 'false');
      boton.focus();
    }
  });
});

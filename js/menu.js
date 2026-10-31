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

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.classList.contains('open')) {
      menu.classList.remove('open');
      boton.setAttribute('aria-expanded', 'false');
      boton.focus();
    }
  });
});

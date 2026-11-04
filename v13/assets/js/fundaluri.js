// Doar pentru previzualizare: schimbă fundalul secțiunii de înscriere și ține minte alegerea.
(function () {
  var end = document.getElementById('inscriere');
  var buttons = Array.prototype.slice.call(document.querySelectorAll('.fundaluri button'));
  if (!end || !buttons.length) return;

  function pick(button) {
    document.documentElement.style.setProperty('--end-bg', button.dataset.c);
    buttons.forEach(function (b) { b.setAttribute('aria-pressed', String(b === button)); });
    try { localStorage.setItem('fundal-inscriere', button.dataset.c); } catch (e) {}
  }

  var saved = null;
  try { saved = localStorage.getItem('fundal-inscriere'); } catch (e) {}
  pick(buttons.filter(function (b) { return b.dataset.c === saved; })[0] || buttons[0]);

  buttons.forEach(function (b) {
    b.style.setProperty('--c', b.dataset.c);
    b.addEventListener('click', function () { pick(b); });
  });
})();

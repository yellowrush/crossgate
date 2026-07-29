(function () {
  var preferredTheme;
  try {
    preferredTheme = localStorage.getItem('theme');
  } catch (err) {}

  function setTheme(newTheme) {
    document.documentElement.setAttribute('data-theme', newTheme);
    try {
      localStorage.setItem('theme', newTheme);
    } catch (err) {}
  }

  var isColorSchemeDark = window.matchMedia('(prefers-color-scheme: dark)');
  setTheme(preferredTheme || (isColorSchemeDark.matches ? 'dark' : 'light'));
})();

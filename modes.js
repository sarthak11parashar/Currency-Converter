
document.addEventListener('DOMContentLoaded', function() {

  const themeToggle = document.querySelector('.theme-toggle');
  const body = document.body;

  // This function checks localStorage and applies the theme.
  function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }

  // This function runs when the toggle button is clicked.
  function handleThemeToggle() {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  }

  themeToggle.addEventListener('click', handleThemeToggle);
  applySavedTheme();
});







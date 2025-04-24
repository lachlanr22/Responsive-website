document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.search-container');
  const btn       = document.querySelector('.search-btn');
  const input     = document.querySelector('.search-input');

  btn.addEventListener('click', function() {
    container.classList.toggle('active');
    if (container.classList.contains('active')) input.focus();
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.search-container');
  const btn       = document.querySelector('.search-btn');
  const input     = document.querySelector('.search-input');
  btn.addEventListener('click', function() {
    container.classList.toggle('active');
    if (container.classList.contains('active')) input.focus();
  });

  const heading = document.querySelector('.page-heading');
  if (heading) {
    heading.classList.add('visible');
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
});

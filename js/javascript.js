document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.search-container');
  const btn = document.querySelector('.search-btn');
  const input = document.querySelector('.search-input');
  const submitBtn = document.querySelector('.search-submit-btn');

  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    const isOpen = container.classList.contains('active');

    if (isOpen && input.value.trim()) {
      container.classList.remove('active');
      input.value = '';
    } else {
      container.classList.toggle('active');
      input.focus();
    }
  });

  submitBtn.addEventListener('click', function () {
    if (container.classList.contains('active')) {
      container.classList.remove('active');
      input.value = '';
    }
  });

  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      container.classList.remove('active');
      input.value = '';
    }
  });

  document.addEventListener('click', function (e) {
    if (!container.contains(e.target)) {
      container.classList.remove('active');
      input.value = '';
    }
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

document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.search-container');
  const btn       = document.querySelector('.search-btn');
  const input     = document.querySelector('.search-input');
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

  submitBtn.addEventListener('click', function (e) {
    e.stopPropagation();
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
  if (heading) heading.classList.add('visible');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  const lightbox       = document.getElementById('lightbox');
  const lightboxImg    = document.getElementById('lightbox-img');
  const lightboxCaption= document.getElementById('lightbox-caption');
  const closeBtn       = document.querySelector('.lightbox-close');
  const nextBtn        = document.querySelector('.lightbox-next');
  const prevBtn        = document.querySelector('.lightbox-prev');
  const images         = Array.from(document.querySelectorAll('.work-image img'));
  let currentIndex     = -1;

  function openLightbox(index) {
    const img = images[index];
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxCaption.textContent = img.closest('.work-item').querySelector('.work-text p').textContent;
    lightbox.classList.remove('hidden');
    lightbox.classList.add('fade-in');
    document.body.style.overflow = 'hidden';
    currentIndex = index;
  }

  function closeLightbox() {
    lightbox.classList.remove('fade-in');
    lightbox.classList.add('hidden');
    document.body.style.overflow = '';
    currentIndex = -1;
  }

  function showNext(direction) {
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + direction + images.length) % images.length;
    openLightbox(nextIndex);
  }

  images.forEach((img, index) => {
    img.addEventListener('click', () => openLightbox(index));
  });

  closeBtn.addEventListener('click', closeLightbox);
  nextBtn.addEventListener('click', () => showNext(1));
  prevBtn.addEventListener('click', () => showNext(-1));

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('hidden')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNext(1);
    if (e.key === 'ArrowLeft') showNext(-1);
  });
});

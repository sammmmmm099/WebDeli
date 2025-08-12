// WebInstant Base Script
document.addEventListener('DOMContentLoaded', () => {
  /* ===== Dynamic Year Update ===== */
  const currentYear = new Date().getFullYear();
  document.querySelectorAll('[id^="year"]').forEach(el => {
    el.textContent = currentYear;
  });

  /* ===== Navigation Toggle (Hamburger Menu) ===== */
  const hamburgerBtn = document.getElementById('hamburger');
  const mainNav = document.getElementById('mainNav');

  if (hamburgerBtn && mainNav) {
    hamburgerBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent event from bubbling up
      mainNav.classList.toggle('show');
      hamburgerBtn.classList.toggle('active');
    });

    // Close nav when clicking outside (mobile only)
    document.addEventListener('click', (e) => {
      if (!mainNav.contains(e.target) && !hamburgerBtn.contains(e.target)) {
        mainNav.classList.remove('show');
        hamburgerBtn.classList.remove('active');
      }
    });

    // Close nav when clicking a link (mobile UX)
    mainNav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (mainNav.classList.contains('show')) {
          mainNav.classList.remove('show');
          hamburgerBtn.classList.remove('active');
        }
      });
    });
  }

  /* ===== Highlight Active Navigation Link ===== */
  const navLinks = document.querySelectorAll('.main-nav .nav-link');
  const currentPath = location.pathname.split('/').pop() || 'index.html';

  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });

  /* ===== Form Submission Handler ===== */
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      alert('✅ Thanks! Your message is ready to send.');
      form.reset();
    });
  });
});
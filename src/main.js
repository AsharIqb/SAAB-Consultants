import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.padding = '1rem 0';
      navbar.style.background = 'rgba(11, 15, 25, 0.95)';
    } else {
      navbar.style.padding = '1.5rem 0';
      navbar.style.background = 'rgba(11, 15, 25, 0.8)';
    }
  });

  const form = document.getElementById('leadForm');
  if(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for your interest! A SAAB consultant will contact you shortly.');
      form.reset();
    });
  }
});

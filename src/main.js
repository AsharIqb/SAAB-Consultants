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
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.innerText;
      btn.innerText = 'Sending...';
      
      const formData = new FormData(form);
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
      
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        });
        const result = await response.json();
        if (response.status == 200) {
            alert('Thank you for your interest! A SAAB consultant will contact you shortly.');
            form.reset();
        } else {
            console.log(response);
            alert('Something went wrong! Please try again or email us directly.');
        }
      } catch (error) {
        console.log(error);
        alert('Something went wrong! Please try again or email us directly.');
      } finally {
        btn.innerText = originalText;
      }
    });
  }
});

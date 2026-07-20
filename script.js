const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.textContent = isOpen ? '✕' : '☰';
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = '☰';
  });
});

document.getElementById('bookingForm').addEventListener('submit', event => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const service = document.getElementById('service').value;
  const details = document.getElementById('details').value.trim();
  const message = document.getElementById('message').value.trim();

  const text = [
    'Namaste, I would like to make a VedJyot booking request.',
    '',
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Service: ${service}`,
    `Preferred date/city: ${details || 'Not specified'}`,
    `Additional details: ${message || 'None'}`
  ].join('\n');

  const url = `https://wa.me/12267243493?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank', 'noopener');
});

const filterButtons = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('.property');
filterButtons.forEach(button => button.addEventListener('click', () => {
  filterButtons.forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  const filter = button.dataset.filter;
  cards.forEach(card => {
    const show = filter === 'all' || card.dataset.type === filter;
    card.style.display = show ? '' : 'none';
  });
}));
document.querySelectorAll('.save').forEach(button => button.addEventListener('click', () => {
  const saved = button.textContent === '♥';
  button.textContent = saved ? '♡' : '♥';
  button.setAttribute('aria-label', saved ? 'Save listing' : 'Remove saved listing');
}));
document.querySelector('.menu-btn').addEventListener('click', () => {
  const nav = document.querySelector('.nav-links');
  nav.classList.toggle('mobile-open');
});

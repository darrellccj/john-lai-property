const menu = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
menu?.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', open); });
document.querySelectorAll('nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
document.querySelectorAll('.filters button').forEach(button => button.addEventListener('click', () => {
  document.querySelector('.filters .active').classList.remove('active'); button.classList.add('active');
  document.querySelectorAll('.property-card').forEach(card => card.style.display = button.dataset.filter === 'all' || card.dataset.type.includes(button.dataset.filter) ? '' : 'none');
}));
document.querySelectorAll('.property-photo button').forEach(button => button.addEventListener('click', () => { const liked = button.textContent === '♡'; button.textContent = liked ? '♥' : '♡'; button.classList.toggle('liked', liked); }));
document.querySelector('form')?.addEventListener('submit', event => { event.preventDefault(); event.currentTarget.reset(); document.querySelector('.toast').classList.add('show'); setTimeout(() => document.querySelector('.toast').classList.remove('show'), 4000); });

// Bring sections into view with intentional, staggered movement.
const motionOK = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const motionSections = document.querySelectorAll('main > section:not(.hero)');
motionSections.forEach((section, index) => {
  section.classList.add('reveal-target');
  section.querySelectorAll('.property-card, .steps article, .launch-card, .article, .numbers > div').forEach((item, itemIndex) => item.style.setProperty('--reveal-index', itemIndex));
  if (!motionOK) section.classList.add('is-visible');
});
if (motionOK && 'IntersectionObserver' in window) {
  const reveal = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); reveal.unobserve(entry.target); }
  }), { threshold: .12 });
  motionSections.forEach(section => reveal.observe(section));
} else { motionSections.forEach(section => section.classList.add('is-visible')); }

window.addEventListener('scroll', () => document.querySelector('.site-header')?.classList.toggle('scrolled', window.scrollY > 24), { passive: true });

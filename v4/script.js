document.querySelectorAll('.listing-filters button').forEach(button => button.addEventListener('click', () => { document.querySelector('.listing-filters .active').classList.remove('active'); button.classList.add('active'); }));
document.querySelectorAll('.save').forEach(button => button.addEventListener('click', () => { button.classList.toggle('saved'); button.textContent = button.classList.contains('saved') ? '♥' : '♡'; }));
const menu = document.querySelector('.menu-toggle'); const nav = document.querySelector('nav'); menu?.addEventListener('click', () => { nav.classList.toggle('open'); });

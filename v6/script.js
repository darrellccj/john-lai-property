document.querySelector('.menu-toggle').addEventListener('click', () => {
  const nav = document.querySelector('nav');
  const visible = nav.style.display === 'flex';
  nav.style.display = visible ? 'none' : 'flex';
  nav.style.position = 'absolute'; nav.style.top = '70px'; nav.style.left = '0'; nav.style.right = '0';
  nav.style.padding = '22px 20px'; nav.style.background = '#fffdfa'; nav.style.flexDirection = 'column'; nav.style.alignItems = 'flex-start';
});
document.querySelectorAll('.filters button').forEach(button => button.addEventListener('click', () => {
  document.querySelector('.filters .active').classList.remove('active'); button.classList.add('active');
}));

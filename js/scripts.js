// Preloader hide
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('preloader').classList.add('hide'), 280);
});

// Navbar: efecto “scrolled”
(function(){
  const nav = document.querySelector('.navbar');
  const onScroll = () => {
    if (window.scrollY > 10) nav.classList.add('nav-scrolled');
    else nav.classList.remove('nav-scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
})();
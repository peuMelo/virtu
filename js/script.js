document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));

      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });

      history.pushState(null, null, window.location.pathname);
    });
  });
});

window.addEventListener('load', () => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
});
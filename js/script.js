window.addEventListener('load', () => {
  
  window.scrollTo(0, 0);

  
  window.addEventListener('hashchange', () => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));

      
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth'
        });

       
        if (history.replaceState) {
          history.replaceState(null, null, window.location.pathname);
        }
      }
    });
  });
});

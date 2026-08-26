// Small interactions — no libraries required.
const revealItems = document.querySelectorAll('.project, .service-list article, .steps > div');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = `opacity .7s ease ${Math.min(i * .06, .35)}s, transform .7s ease ${Math.min(i * .06, .35)}s`;
  observer.observe(el);
});

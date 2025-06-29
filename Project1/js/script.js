// Animate input and tagline on load
window.addEventListener('load', () => {
  const mainText = document.querySelector('main p');
  const searchInput = document.querySelector('main input');

  [mainText, searchInput].forEach((el, index) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    setTimeout(() => {
      el.style.transition = 'all 0.7s ease-out';
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }, index * 300); // staggered animation
  });
});

// Optional: Highlight search box on focus
const input = document.querySelector('main input');
input.addEventListener('focus', () => {
  input.style.boxShadow = '0 0 12px #ff2e2e';
});
input.addEventListener('blur', () => {
  input.style.boxShadow = '0 6px 12px rgba(0,0,0,0.3)';
});

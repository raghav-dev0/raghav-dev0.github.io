// typewriter effect for the hero h1
document.addEventListener('DOMContentLoaded', () => {
  const h1 = document.querySelector('h1');
  if (!h1 || !h1.textContent.trim()) return;

  const text = h1.textContent.trim();
  h1.textContent = '';
  h1.style.borderRight = '2px solid var(--green)';

  let i = 0;
  const type = () => {
    if (i < text.length) {
      h1.textContent += text[i++];
      setTimeout(type, 60);
    } else {
      // remove cursor after done
      setTimeout(() => { h1.style.borderRight = 'none'; }, 700);
    }
  };
  type();
});

const items = [...document.querySelectorAll('.reveal')];
const preference = matchMedia('(prefers-reduced-motion: reduce)');
let observer;
function run() {
  observer?.disconnect();
  if (preference.matches || !('IntersectionObserver' in window)) {
    document.documentElement.classList.remove('motion-ready');
    items.forEach(item => item.classList.add('visible'));
    return;
  }
  items.forEach(item => item.classList.remove('visible'));
  document.documentElement.classList.add('motion-ready');
  observer = new IntersectionObserver(entries => {
    const entering = entries.filter(entry => entry.isIntersecting);
    entering.forEach((entry, index) => {
      entry.target.style.setProperty('--delay', `${Math.min(index * 90, 270)}ms`);
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -25px 0px' });
  requestAnimationFrame(() => items.forEach(item => observer.observe(item)));
}
async function init() {
  try {
    const response = await fetch("content.json", { cache: "no-cache" });
    if (!response.ok) throw new Error("Content unavailable");
    const content = await response.json();
    document.querySelectorAll("[data-content]").forEach(element => {
      const value = content[element.dataset.content];
      if (typeof value === "string" && value.trim()) element.textContent = value;
    });
  } catch { /* The HTML copy remains available if the content file cannot load. */ }
  run();
}
init();
preference.addEventListener('change', run);
document.querySelector('.replay').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'instant' });
  run();
});

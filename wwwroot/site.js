// 1. Typing effect for the subtitle
const typer = document.querySelector('[data-type]');
if (typer) {
  const words = typer.dataset.type.split('|');
  let w = 0, c = 0, deleting = false;
  const tick = () => {
    const word = words[w];
    typer.textContent = word.slice(0, c);
    if (!deleting && c === word.length) { deleting = true; return setTimeout(tick, 1400); }
    if (deleting && c === 0) { deleting = false; w = (w + 1) % words.length; }
    c += deleting ? -1 : 1;
    setTimeout(tick, deleting ? 40 : 80);
  };
  setTimeout(tick, 2200);
}

// 2. Fade in sections when you scroll to them
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// 3. Tabs (Projects / Experience / Tech stack)
document.querySelectorAll('[data-tab]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-tab]').forEach(b => b.classList.toggle('active', b === btn));
    document.querySelectorAll('[data-panel]').forEach(p =>
      p.classList.toggle('active', p.dataset.panel === btn.dataset.tab));
  });
});
(() => {
  const enabled = matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
  const glow = document.createElement('div');
  glow.className = 'cursor-glow';
  glow.setAttribute('aria-hidden', 'true');
  document.body.prepend(glow);
  let frame = 0, x = 0, y = 0, targetX = 0, targetY = 0, started = false;
  function draw() {
    x += (targetX - x) * 0.18;
    y += (targetY - y) * 0.18;
    glow.style.transform = `translate3d(${x - 325}px, ${y - 325}px, 0)`;
    frame = Math.abs(targetX - x) + Math.abs(targetY - y) > 0.25 ? requestAnimationFrame(draw) : 0;
  }
  function hide() {
    glow.classList.remove('is-visible');
    cancelAnimationFrame(frame);
    frame = 0;
    started = false;
  }
  window.addEventListener('pointermove', event => {
    if (!enabled.matches || event.pointerType !== 'mouse') return;
    targetX = event.clientX;
    targetY = event.clientY;
    if (!started) { x = targetX; y = targetY; started = true; }
    glow.classList.add('is-visible');
    if (!frame) frame = requestAnimationFrame(draw);
  }, { passive: true });
  document.documentElement.addEventListener('pointerleave', hide);
  window.addEventListener('blur', hide);
  enabled.addEventListener('change', hide);
  document.addEventListener('visibilitychange', () => { if (document.hidden) hide(); });
})();

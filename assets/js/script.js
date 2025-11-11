// Select background element
const bg = document.querySelector('.background');

// Configuration
const baseHue = 210;      // main tone (e.g., bluish-gray)
const baseLight = 75;     // starting lightness
const hueRange = 20;      // hue variation range
const lightRange = 10;    // lightness variation range
const saturation = 40;    // color intensity (lower = duller)
const lerpSpeed = 0.05;   // how quickly it follows mouse

// Initialize state
let target = { x: 0.5, y: 0.5 };
let current = { x: 0.5, y: 0.5 };

// Set initial color
bg.style.backgroundColor = `hsl(${baseHue}, ${saturation}%, ${baseLight}%)`;

// Fade in background when page loads (optional)
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// Linear interpolation helper
function lerp(a, b, t) {
  return a + (b - a) * t;
}

// Track mouse position
document.addEventListener('mousemove', e => {
  target.x = e.clientX / window.innerWidth;
  target.y = e.clientY / window.innerHeight;
});

// Animation loop
function animate() {
  current.x = lerp(current.x, target.x, lerpSpeed);
  current.y = lerp(current.y, target.y, lerpSpeed);

  const dx = current.x - 0.5;
  const dy = current.y - 0.5;

  const hue = baseHue + dx * hueRange * 2;
  const light = baseLight + dy * lightRange * 2;

  const safeHue = (hue + 360) % 360;
  const safeLight = Math.min(100, Math.max(0, light));

  bg.style.backgroundColor = `hsl(${safeHue}, ${saturation}%, ${safeLight}%)`;

  requestAnimationFrame(animate);
}

animate();


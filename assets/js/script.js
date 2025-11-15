/*
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
*/

document.addEventListener('DOMContentLoaded', function() {

  // Toggle menu list
  const project_toggle = document.querySelector(".project-toggle");
  const project_list = document.querySelector(".project-list");
  project_toggle.addEventListener("click", function() {
    project_list.classList.toggle("open");
  })

  // Change heor image on hover
  const projects = document.querySelectorAll(".project-list li a");
  const drop_inner = document.querySelector(".project-list");
  const project_images = document.querySelectorAll(".hero-img .project");
  const default_project = document.querySelector(".hero-img .default");

  projects.forEach(function(e) {
    let project_id = e.getAttribute("data-id");

    e.addEventListener("mouseover", function() {
      project_images[project_id].classList.add("active");
      default_project.classList.remove("active");
    })
    e.addEventListener("mouseout", function() {
      project_images[project_id].classList.remove("active");
      default_project.classList.add("active");
    })
  })
  })




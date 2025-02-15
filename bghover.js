const nav3d = document.querySelector('.nav3d');
const body = document.querySelector('.index-bg');

// Determine base path dynamically
const basePath = window.location.origin + "/assets/bg/";

// Helper function to change background with a crossfade effect
function setBackgroundWithFade(element, imagePath) {
  element.style.transition = "background 0.35s ease";
  
  // Set the background image
  setTimeout(() => {
    element.style.background = `url('${basePath}${imagePath}') no-repeat center center fixed`;
    element.style.backgroundSize = "cover";
  }, 0);
}

// Event listeners for hover
nav3d.addEventListener('mouseenter', () => {
  setBackgroundWithFade(body, "bg3d-r.png");
});

nav3d.addEventListener('mouseleave', () => {
  setBackgroundWithFade(body, "dreamer.png");
});

const nav3d = document.querySelector('.nav3d');
const body = document.querySelector('.index-bg');

// Helper function to change background with a crossfade effect
function setBackgroundWithFade(element, newBackground) {
  // Add a transition effect
  element.style.transition = "background 0.35s ease";
  
  // Change the background after a slight delay for smooth crossfade
  setTimeout(() => {
    element.style.background = `${newBackground} no-repeat center center fixed`;
    element.style.backgroundSize = "cover";
  }, 0); // No delay necessary unless fine-tuning
}

// Event listeners for hover
nav3d.addEventListener('mouseenter', () => {
  setBackgroundWithFade(body, "url('assets/bg/bg3d-r.png')");
});

nav3d.addEventListener('mouseleave', () => {
  setBackgroundWithFade(body, "url('assets/bg/dreamer.png')");
});

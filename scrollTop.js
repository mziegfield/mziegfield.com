// Get the button:
let mybuttonTop = document.getElementById("topHvrBtn");
let mybutton2 = document.getElementById("backHvrBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
  scrollFunctionBack();
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybuttonTop.style.display = "block";
  } else {
    mybuttonTop.style.display = "none";
  }
}

function scrollFunctionBack() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    mybutton2.style.display = "block";
  } else {
    mybutton2.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

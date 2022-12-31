console.log("Hello World!");

// Get the banner element
var banner = document.querySelector('.top-banner');

// Get the close button element
var closeButton = document.querySelector('.close-banner');

// Add a click event listener to the close button
closeButton.addEventListener('click', function() {
  // Hide the banner element
  banner.style.display = 'none';
});
const backToTopEl = document.querySelector('.backToTopBtn');
const homeEl = document.querySelector('.home');

function handleBackToTopClick() {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleBackToTopBtnVisibility() {
    if (window.scrollY > 200) {
        backToTopEl.style.opacity = "1"; // Show the button when the user scrolls past the header/home
    } else {
        backToTopEl.style.opacity = "0"; // Hide the button if the user is near the top or in the header/home
    }
}

backToTopEl.addEventListener('click', handleBackToTopClick);

// Add a scroll event listener to monitor scrolling and toggle the button visibility
window.addEventListener('scroll', () => {
    // Toggle the button visibility
    toggleBackToTopBtnVisibility();
});

// Call the toggleBackToTopBtnVisibility function immediately to update the visibility on page load
toggleBackToTopBtnVisibility();




function revealElements(className, revealPoint) {
    const elements = document.querySelectorAll(className);
    const windowHeight = window.innerHeight;
  
    elements.forEach(element => {
      const revealTop = element.getBoundingClientRect().top;
  
      if (revealTop < windowHeight - revealPoint) {
        element.classList.add('active');
      } else {
        element.classList.remove('active');
      }
    });
  }
  
  window.addEventListener('scroll', () => {
    revealElements('.slowReveal', 350);
  });
  
  window.addEventListener('scroll', () => {
    revealElements('.quickReveal', 125);
  });
  




//hamburger menu for tablet and mobile

//error handling for contact form

//404 error 

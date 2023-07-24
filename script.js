const backToTopEl = document.querySelector('.backToTopBtn');
const homeEl = document.querySelector('.home');

function handleBackToTopClick() {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleBackToTopBtnVisibility() {
    if (window.scrollY > 200 && !homeEl.contains(backToTopEl)) {
        backToTopEl.style.opacity = "0"; // Show the button when the user scrolls 200px or more and is not in the header
    } else {
        backToTopEl.style.opacity = "1"; // Hide the button if the user is near the top or in the header
    }
}

backToTopEl.addEventListener('click', handleBackToTopClick);

// Add a scroll event listener to monitor scrolling and toggle the button visibility
window.addEventListener('scroll', () => {
    // Toggle the button visibility
    toggleBackToTopBtnVisibility();
});

//scroll reveal for projects

//hamburger menu for tablet and mobile

//error handling for contact form

//404 error 

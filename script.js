//Back To Top Button

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


//JS animation

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
  revealElements('.quickReveal', 125);
});

//Lenis Smooth Scroll

/*const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
*/

//GSAP animation

gsap.registerPlugin(ScrollTrigger)

const splitTypes = document.querySelectorAll('.revealType') 

splitTypes.forEach((char, i) => {
  const text= new SplitType(char, { types: 'chars, words'} );
  console.log(text);

  gsap.from(text.chars, {
    scrollTrigger: {
      trigger: char,
      start: 'top 80%',
      end: 'top 20%',
      scrub: false,
      markers: false
    },
    scaleY: 0,
    y: -20,
    transformOrigin: 'top',
    opacity: 0,
    stagger: 0.1,
    duration: 0.8
  })

});


//hamburger menu for tablet and mobile

const hamburgerEl = document.querySelector('.faMobileMenu');
const mobileMenuEl = document.querySelector('.mobileMenu');
const closeMenuEl = document.querySelector('.faMobileMenuClose')
const mobileMenuRedirects = document.querySelectorAll('.mobileMenu a')

function toggleMobileMenu() {
  mobileMenuEl.classList.toggle("activated");
}

hamburgerEl.addEventListener("click", toggleMobileMenu);
closeMenuEl.addEventListener("click", toggleMobileMenu);

mobileMenuRedirects.forEach((link) => {
  link.addEventListener("click", toggleMobileMenu);
})


//remove reveal scroll for media queries at 505px

// Define the media query condition
const mediaQuery = window.matchMedia("(max-width: 505px)");

// Function to remove the "quickReveal" class from elements
function removeQuickRevealClass() {
  const quickRevealEL = document.querySelectorAll('.quickReveal');

  quickRevealEL.forEach((quickReveal) => {
    quickReveal.classList.remove('quickReveal'); // Remove the class
  });
}

// Initial call to remove the class if the condition is met
if (mediaQuery.matches) {
  removeQuickRevealClass();
}

// Add a listener to remove the class when the condition is met
mediaQuery.addListener((event) => {
  if (event.matches) {
    removeQuickRevealClass();
  }
});

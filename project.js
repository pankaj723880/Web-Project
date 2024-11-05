// Script for Navigation
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetID = this.getAttribute('href').slice(1);
        document.getElementById(targetID).scrollIntoView({
            behavior: 'smooth'
          
        });
    });
});


window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    
    // Set a timeout for 3 seconds before hiding the preloader
    setTimeout(() => {
        preloader.style.transition = 'opacity 0.5s ease'; // Smooth fade-out effect
        preloader.style.opacity = '0'; // Start fading out

        // Wait for the transition to complete before fully removing the preloader
        setTimeout(() => {
            preloader.style.display = 'none'; // Hide the preloader completely
        }, 1000); // 500ms matches the transition duration
    }, 3000); // 3000ms = 3 seconds
});


// Get the testimonial form and display area
const testimonialForm = document.getElementById('testimonial-form');
const userTestimonialsDiv = document.getElementById('user-testimonials');

// Handle testimonial form submission
testimonialForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get user input values
    const userName = document.getElementById('user-name').value;
    const userExperience = document.getElementById('user-experience').value;

    // Create a new testimonial element
    const testimonialBlock = document.createElement('blockquote');
    testimonialBlock.textContent = `"${userExperience}" - ${userName}`;

    // Append the testimonial to the display area
    userTestimonialsDiv.appendChild(testimonialBlock);

    // Clear form fields after submission
    document.getElementById('user-name').value = '';
    document.getElementById('user-experience').value = '';
});
// Script for Menu Section
document.querySelectorAll('#menu section button').forEach((button, index) => {
    button.addEventListener('click', function() {
        alert(`You have selected: ${document.querySelectorAll('#menu section h3')[index].innerText}`);
    });
});

// Script for Contact Form
const contactForm = document.querySelector('#contact form');
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;
    if (name && email && message) {
        alert(`Thank you, ${name}. Your message has been sent.`);
        contactForm.reset();
    } else {
        alert('Please fill out all fields.');
    }
});

// Script for Smooth Scrolling for "View Our Menu" Button
const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('menu').scrollIntoView({
        behavior: 'smooth'
    });
});
// Get the dropdown and menu container
const mealTypeSelect = document.getElementById('meal-type');
const menuContainer = document.getElementById('menu-container');

// JavaScript code to filter menu items based on meal type
document.addEventListener("DOMContentLoaded", function () {
    const mealTypeSelect = document.getElementById("meal-type");
    const menuItems = document.querySelectorAll(".menu-item");

    // Function to filter menu items
    function filterMenuItems() {
        const selectedType = mealTypeSelect.value;
        
        menuItems.forEach(item => {
            // Get the data-type attribute of each menu item
            const itemType = item.getAttribute("data-type");

            // Show or hide the menu item based on the selected type
            if (selectedType === "all" || selectedType === itemType) {
                item.style.display = "block"; // Show item
            } else {
                item.style.display = "none"; // Hide item
            }
        });
    }

    // Event listener for changes on the meal type dropdown
    mealTypeSelect.addEventListener("change", filterMenuItems);

    // Initial filter on page load
    filterMenuItems();
});


// Add event listener to the dropdown
mealTypeSelect.addEventListener('change', filterMenu);

// Get the view more button and the more dishes container
const viewMoreButton = document.getElementById('view-more-button');
const moreDishes = document.querySelectorAll('#more-dishes');

// Add event listener to the view more button
viewMoreButton.addEventListener('click', function() {
    // Show all dishes with the 'more-dishes' class
    moreDishes.forEach(dish => {
        dish.style.display = 'block'; // Set the display to block
    });
    
    // Hide the view more button
    viewMoreButton.style.display = 'none';
});
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('hide-preloader');
    }, 3000); // adjust time as needed
});
window.addEventListener('scroll', handleScroll, { passive: true });


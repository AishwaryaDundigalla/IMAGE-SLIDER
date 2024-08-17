// Get the slider and navigation elements
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');

// Define the image array
const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg'
];

// Set the initial slide
let currentSlide = 0;

// Function to display the first image when the page loads
function displayFirstImage() {
    slider.children[currentSlide].classList.add('active');
}

// Function to navigate to the next slide
function nextSlide() {
    slider.children[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % images.length;
    slider.children[currentSlide].classList.add('active');
}

// Function to navigate to the previous slide
function prevSlide() {
    slider.children[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + images.length) % images.length;
    slider.children[currentSlide].classList.add('active');
}

// Add event listeners to the navigation buttons
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Display the first image when the page loads
displayFirstImage();

// Optional: Automatic slideshow
let slideshowInterval = setInterval(nextSlide, 3000);

// Optional: Pause the slideshow when the user interacts with the slider
slider.addEventListener('mouseover', () => {
    clearInterval(slideshowInterval);
});

slider.addEventListener('mouseout', () => {
    slideshowInterval = setInterval(nextSlide, 3000);
});
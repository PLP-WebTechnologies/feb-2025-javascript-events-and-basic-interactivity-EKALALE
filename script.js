// Button click event
const button = document.getElementById('magicButton');
button.addEventListener('click', () => {
    button.textContent = 'You clicked me!';
    button.style.backgroundColor = 'lightgreen';
});

// Hover effect
button.addEventListener('mouseover', () => {
    button.style.backgroundColor = 'lightblue';
});
button.addEventListener('mouseout', () => {
    button.style.backgroundColor = '';
});

// Keypress detection
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        alert('You pressed Enter!');
    }
});

// Double-click bonus
button.addEventListener('dblclick', () => {
    alert('Secret unlocked! 🎉');
});

// Slideshow / Image Gallery (very basic example)
let images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
let index = 0;
setInterval(() => {
    const slide = document.getElementById('slide');
    index = (index + 1) % images.length;
    slide.src = images[index];
}, 3000);

// Accordion functionality
const headers = document.querySelectorAll('#accordion h3');
headers.forEach(header => {
    header.addEventListener('click', () => {
        header.nextElementSibling.style.display = 
            header.nextElementSibling.style.display === 'block' ? 'none' : 'block';
    });
});

// Form validation
const form = document.getElementById('signupForm');
const feedback = document.getElementById('formFeedback');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (name === '' || email === '' || password === '') {
        feedback.textContent = 'All fields are required!';
        feedback.style.color = 'red';
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        feedback.textContent = 'Invalid email address!';
        feedback.style.color = 'red';
        return;
    }

    if (password.length < 8) {
        feedback.textContent = 'Password must be at least 8 characters!';
        feedback.style.color = 'red';
        return;
    }

    feedback.textContent = 'Form submitted successfully!';
    feedback.style.color = 'green';
});

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Perform any desired actions when the form is submitted
        alert('Form submitted successfully!');
    });
});

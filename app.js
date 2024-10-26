document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();  // Prevents the default form submission

        emailjs.sendForm('service_vfblx2h', 'template_nnw4nce', contactForm)
            .then(function(response) {
                alert('Message sent successfully!');
                contactForm.reset(); // Clears the form after successful submission
            }, function(error) {
                alert('Failed to send message, please try again.');
                console.error('EmailJS Error:', error); // Logs error details in the console
            });
    });
});

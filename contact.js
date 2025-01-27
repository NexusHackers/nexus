    document.addEventListener("DOMContentLoaded", function () {
        // Initialize EmailJS with your User ID (public key)
        emailjs.init("9F1krai-sc2Z_XyXC"); // Replace 'YOUR_USER_ID' with your actual EmailJS public key
    
        const contactForm = document.querySelector("form");
    
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form submission
    
            // Collect form data
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;
    
            // Optional: Get the message container to show success or error messages
            let messageContainer = document.getElementById("form-message");
    
            // Send the email using the service, template, and parameters
            emailjs.send("service_m33nvbu", "template_an0hebf", {
                name: name,
                email: email,
                message: message,
            })
            .then(function(response) {
                // Show neon green success message with flicker effect
                messageContainer.textContent = "Message sent successfully!";
                messageContainer.style.color = "#39ff14"; // Neon green
                messageContainer.style.textShadow = "0 0 5px #39ff14, 0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor";
                messageContainer.classList.add("flicker"); // Add flicker effect
    
                // Clear the form after successful submission
                contactForm.reset();
            }, function(error) {
                // Show neon red error message with flicker effect
                messageContainer.textContent = "Failed to send message. Please try again.";
                messageContainer.style.color = "#ff073a"; // Neon red
                messageContainer.style.textShadow = "0 0 5px #ff073a, 0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor";
                messageContainer.classList.add("flicker"); // Add flicker effect
            });
        });
    });
    
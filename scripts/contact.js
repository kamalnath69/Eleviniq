document.getElementById("contactForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const sendButton = document.getElementById("sendButton");
    const btnText = document.getElementById("btnText");
    const btnLoader = document.getElementById("btnLoader");

    // Show loader
    btnText.style.display = "none";
    btnLoader.style.display = "inline";

    const formData = {
        fullname: e.target.name.value,
        institution: e.target.institution.value,
        email: e.target.email.value,
        phone: e.target.phone.value,
        message: e.target.message.value,
    };

    try {
        const response = await fetch("https://edvatiq-backend.onrender.com/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            // Show success modal
            showModal("Success!", "Your message was received, and we will get back to you shortly.");
            e.target.reset();
        } else {
            // Show error modal for response errors
            showModal("Error!", "Something went wrong. Please try again.");
        }
    } catch (error) {
        // Show error modal for network or other exceptions
        showModal("Network Error!", "Error sending message. Please try again later.");
    } finally {
        // Hide loader and reset button state
        btnText.style.display = "inline";
        btnLoader.style.display = "none";
    }
});

// Function to Show the Modal
function showModal(title, message) {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modalTitle");
    const modalMessage = document.getElementById("modalMessage");

    modalTitle.textContent = title;
    modalMessage.textContent = message;

    // Show modal (remove 'hidden' class)
    modal.classList.remove("hidden");

    // Close the modal when the close button is clicked
    document.getElementById("closeModal").onclick = () => {
        modal.classList.add("hidden");
    };
}

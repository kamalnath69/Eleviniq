document.getElementById("contactForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const sendButton = document.getElementById("sendButton");
    const btnText = document.getElementById("btnText");
    const btnLoader = document.getElementById("btnLoader");

    // Show loader
    btnText.style.display = "none";
    btnLoader.classList.remove("tw-hidden");

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
            showModal("Success!", "Your message was sent successfully!");
            e.target.reset();
        } else {
            showModal("Error!", "Something went wrong. Please try again.");
        }
    } catch (error) {
        showModal("Error!", "Error sending message. Please try again later.");
    } finally {
        // Hide loader
        btnText.style.display = "inline";
        btnLoader.classList.add("tw-hidden");
    }
});

function showModal(title, message) {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modalTitle");
    const modalMessage = document.getElementById("modalMessage");

    modalTitle.textContent = title;
    modalMessage.textContent = message;

    // Show the modal
    modal.classList.remove("tw-hidden");

    // Close the modal when the close button is clicked
    document.getElementById("closeModal").addEventListener("click", () => {
        modal.classList.add("tw-hidden");
    });
}

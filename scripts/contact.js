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
            alert("Message sent successfully!");
            e.target.reset();
        } else {
            alert("Something went wrong. Please try again.");
        }
    } catch (error) {
        alert("Error sending message. Please try again laterr.");
    } finally {
        // Hide loader
        btnText.style.display = "inline";
        btnLoader.classList.add("tw-hidden");
    }
});

const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("full-name").value.trim();
        const formType = form.dataset.formType;

        let message = "";

        if (formType === "join") {
            message = `Sent successfully.\nThanks for your application, ${name}!`;
        }
        else if (formType === "contact") {
            message = `Enquiry sent successfully.\nThanks for contacting us, ${name}! We will get back to you as soon as possible.`;
        }
        else if (formType === "feedback") {
            message = `Feedback submitted successfully.\nThank you for your feedback, ${name}!`;
        }

        alert(message);

        form.reset();
    });
}
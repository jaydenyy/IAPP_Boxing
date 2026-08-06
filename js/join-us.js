const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("full-name").value.trim();

    alert(`Sent successfully.
Thanks for your application, ${name}!`);

    form.reset();
});
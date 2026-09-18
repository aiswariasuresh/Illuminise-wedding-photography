document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("#contactForm");

    if (form) {

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            document.querySelector("#formMessage").textContent =
                "Thank you! Your enquiry has been received. We will get back to you soon.";

            form.reset();

        });

    }

});

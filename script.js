const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.style.left = `${posX}px`;
    cursorOutline.style.top = `${posY}px`;

    cursorOutline.animate([{ left: `${posX}px`, top: `${posY}px` }], {
        duration: 500,
        fill: "both",
    });
});

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const form = event.target;

    fetch(form.action, {
        method: "POST",
        body: new FormData(form),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error sending feedback. Please try again later.");
            }

            alert("Feedback sent successfully!");
            form.reset();
        })
        .catch((error) => {
            console.error("Error:", error);
            alert("Error sending feedback. Please try again later.");
        });
});


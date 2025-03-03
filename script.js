document.addEventListener("DOMContentLoaded", function() {
    const bubbleContainer = document.querySelector(".bubbles");

    for (let i = 0; i < 10; i++) {
        let bubble = document.createElement("div");
        bubble.style.left = Math.random() * 100 + "%";
        bubble.style.animationDuration = Math.random() * 5 + 10 + "s";
        bubbleContainer.appendChild(bubble);
    }
});

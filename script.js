// Back to Top Button
const btnBack = document.querySelector(".btn-back");

// Hide button on initial load
btnBack.style.display = "none";

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    // Show button when near the bottom (last 15% of the page)
    if (scrollTop + windowHeight >= docHeight * 0.85) {
        btnBack.style.display = "block";
    } else {
        btnBack.style.display = "none";
    }
});

/**
 * Smoothly scrolls the window back to the top
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
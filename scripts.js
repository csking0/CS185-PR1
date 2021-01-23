// scroll-to-top button script
top_button = document.getElementById("top_button");
window.onscroll = function() { scrollDetector() };

function scrollDetector() {
    var scrollTop = window.scrollY;
    var documentHeight = document.body.offsetHeight;
    var windowHeight = window.innerHeight;
    var scrollPercent = 100 * scrollTop / (documentHeight - windowHeight)
    if (scrollPercent > 25) {
        // display goToTop button when scrolled past 1/4 of the page
        top_button.style.display = "block";
    }
    else {
        top_button.style.display = "none";
    }
}

function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
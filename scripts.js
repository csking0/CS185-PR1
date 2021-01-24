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

// image overlay handling
var modal = document.querySelector(".modal");
var modalImage = document.querySelector(".modal_image");
Array.from(document.querySelectorAll(".img_thumbnail")).forEach(item => {
    item.addEventListener("click", event => {
        modal.style.display = "block";
        modalImage.src = event.target.src;
    })
});
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// video overlay handling
var videoModal0 = document.querySelector(".videoModal0");
document.querySelector(".videoThumbnail0").addEventListener("click", event => {
    videoModal0.style.display = "block";
});

var videoModal1 = document.querySelector(".videoModal1");
document.querySelector(".videoThumbnail1").addEventListener("click", event => {
    videoModal1.style.display = "block";
});

var videoModal2 = document.querySelector(".videoModal2");
document.querySelector(".videoThumbnail2").addEventListener("click", event => {
    videoModal2.style.display = "block";
});

var videoModal3 = document.querySelector(".videoModal3");
document.querySelector(".videoThumbnail3").addEventListener("click", event => {
    videoModal3.style.display = "block";
});

var videoModal4 = document.querySelector(".videoModal4");
document.querySelector(".videoThumbnail4").addEventListener("click", event => {
    videoModal4.style.display = "block";
});

window.onclick = function(event) {
    if (event.target == videoModal0) {
        videoModal0.style.display = "none";
    }
    if (event.target == videoModal1) {
        videoModal1.style.display = "none";
    }
    if (event.target == videoModal2) {
        videoModal2.style.display = "none";
    }
    if (event.target == videoModal3) {
        videoModal3.style.display = "none";
    }
    if (event.target == videoModal4) {
        videoModal4.style.display = "none";
    }
};

// email validation script
function validateEmail(input) {
    var validFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.value.match(validFormat)) {
        if (invalid_email.style.display == "block") {
            invalid_email.style.display = "none";
        }
        valid_email.style.display = "block";
    }
    else {
        if (valid_email.style.display == "block") {
            valid_email.style.display = "none";
        }
        invalid_email.style.display = "block";
    }
}

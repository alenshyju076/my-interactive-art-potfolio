// Lightbox functionality
function openLightbox() {
    document.getElementById('lightbox').style.display = "block";
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = "none";
}

function currentSlide(n) {
    var images = ["art1.jpg", "art2.jpg", "art3.jpg", "art4.jpg"];
    document.getElementById('lightbox-img').src = images[n - 1];
}

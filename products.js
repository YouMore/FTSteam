var numberSlide = 1;
drawNewSlide(numberSlide);
function drawNewSlide(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
        numberSlide = 1
    }
    if (n < 1) {
        numberSlide = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[numberSlide - 1].style.display = "block";
    dots[numberSlide - 1].className += " active";
}

function nextSlide() {
    drawNewSlide(numberSlide += 1);
}
function prevSlide() {
    drawNewSlide(numberSlide -= 1);
}
/* Устанавливает текущий слайд */
function currentSlide(n) {
    drawNewSlide(numberSlide = n);
}
/* Основная функция слайдера */

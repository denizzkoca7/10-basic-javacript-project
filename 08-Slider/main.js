const sliderLeftButton = document.querySelector('.bxs-left-arrow-circle');
const sliderRightButton = document.querySelector('.bxs-right-arrow-circle');
const sliders = document.getElementsByClassName('slider-box');
const circle = document.querySelectorAll('.slider-circle')
let number = 0;

sliderRightButton.addEventListener('click', () => {
    changeSlide(number + 1)

});

sliderLeftButton.addEventListener('click', () => {
    changeSlide(number - 1)
});



function changeSlide(slideNumber) {

    if (slideNumber >= sliders.length) {
        slideNumber = 0
    }
    if (slideNumber < 0) {
        slideNumber = sliders.length - 1
    }
    sliders[number].classList.toggle('active');
    circle[number].classList.toggle('active')
    sliders[slideNumber].classList.toggle('active');
    circle[slideNumber].classList.toggle('active')
    number = slideNumber
}

circle.forEach((current, currentIndex) => {
    current.addEventListener('click', () => {
        if(number !== currentIndex) {
            changeSlide(currentIndex)
        }
    })
})
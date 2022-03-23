let count = 0;
const buttons = document.querySelectorAll('.btn');
const countText = document.querySelector(".count");



buttons.forEach(btn => {
    btn.addEventListener('click', () => {

        if (btn.classList.contains('increase')) {
            count++
        } else if (btn.classList.contains('decrease')) {
            count--
        } else {
            count = 0
        }

        if (count > 0) {
            countText.style.color = 'rgb(9, 255, 0)'

        }
        if (count < 0) {
            countText.style.color = 'red'
        }
        if (count === 0) {
            countText.style.color = 'white'
        }

        countText.textContent = count
    })
});
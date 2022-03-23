var acc = document.getElementsByClassName("accordion-header");
var i;

for (i = 0; i < acc.length + 1; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    })
}
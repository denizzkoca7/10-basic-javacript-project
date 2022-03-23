 var changeButton = document.getElementById("btn");

 changeButton.addEventListener("click", () => {
 document.body.style.background = `rgb(${Math.floor(Math.random() * 360)}, ${Math.floor(Math.random() * 360)}, ${Math.floor(Math.random() * 360)})`
 })


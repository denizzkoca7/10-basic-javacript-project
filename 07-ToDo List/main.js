// Create a "close" button an append it to each list item

var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.title = "sil"
    span.appendChild(txt);
    myNodelist[i].appendChild(span)
}

//Click on a close button to hide the current list item 

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none"
    }
}

//Add a "checked" symbol when clicking on a list item

var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked')
    }
}, false)

//Create a new list item when clicking on the "Add" button

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myinput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === "") {
        alert("Bir değer giriniz!");
    } else {
        document.getElementById("mylist").appendChild(li);
        document.getElementById("myinput").value = "";

        var span = document.createElement("span");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function () {
                var div = this.parentElement;
                div.style.display = "none"
            }
        }
    }
}
var addbtn = document.querySelector(".addbtn")
var blurpopup = document.querySelector(".blurpopupbox")
var popupbox = document.querySelector(".popupbox")

addbtn.addEventListener("click", function () {
    blurpopup.style.display = "block";
    popupbox.style.display = "block";
})


var cancelpop = document.getElementById("cancelpopbtn")

cancelpop.addEventListener("click", function (event) {
    event.preventDefault()
    blurpopup.style.display = "none";
    popupbox.style.display = "none";
})

var containers = document.querySelector(".containers")
var bookname = document.getElementById("bookname")
var authorname = document.getElementById("authorname")
var shortdiscp = document.getElementById("textdiscp")
var addpopbtn = document.getElementById("addpopbtn")

addpopbtn.addEventListener("click", function (event) {
    event.preventDefault()
    var bookcon = document.createElement("div")
    bookcon.setAttribute("class", "bookcontainer")
    bookcon.innerHTML = `<h2>${bookname.value}</h2>
        <h5>${authorname.value}</h5>
        <p>${shortdiscp.value}</p>
        <button onclick="del(event)">delete</button>`
    containers.append(bookcon)
    blurpopup.style.display = "none";
    popupbox.style.display = "none";
})


function del(event) {
    event.target.parentElement.remove()
}
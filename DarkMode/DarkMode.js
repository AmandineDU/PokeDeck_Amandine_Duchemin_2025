//dark mode
const toggleBtnLB = document.getElementById("text-lb")
const body = document.querySelector("body")
const btn_head = document.querySelector(".btn-com-lb")

let darkmode = localStorage.getItem("dark-mode")

//active et desactive le dark mode quand on click sur l'élément
toggleBtnLB.addEventListener("click", function() {
    body.classList.toggle("fond-dark-mode-theme")
    btn_head.classList.toggle("btn-dark-mode")
})
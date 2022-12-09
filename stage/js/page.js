let toggle = document.querySelector(".toggle-slide");
let content = document.querySelector(".content-area");
let sidebar = document.querySelector(".sidebar");



toggle.addEventListener("click" , function (){
    content.classList.toggle("no-sidebar")
    sidebar.classList.toggle("no-sidebar")
})


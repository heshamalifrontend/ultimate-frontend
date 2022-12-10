//start toggle slide
let toggle = document.querySelector(".toggle-slide");
let content = document.querySelector(".content-area");
let sidebar = document.querySelector(".sidebar");
toggle.addEventListener("click" , function (){
    content.classList.toggle("no-sidebar")
    sidebar.classList.toggle("no-sidebar")
})
//end toggle slide

// start hidden links
let link1 = document.querySelector(".child-links1")
let form = document.querySelector(".link1")
let misc = document.querySelector(".link2")
let link2 = document.querySelector(".child-links2")

form.addEventListener("click",function(){
    link1.classList.toggle("block")
})
misc.addEventListener("click",function(){
    link2.classList.toggle("block")
})
// end hidden links


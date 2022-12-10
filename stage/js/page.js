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

// start toggle notification 
let bell = document.querySelector(".fa-bell")
let notification = document.querySelector(".notification")
bell.addEventListener("click",()=>{
notification.classList.toggle("active")
})
// end toggle notification 



// start toggle user 
let userPic = document.querySelector(".user-pic")
let userDesc = document.querySelector(".user")



userPic.addEventListener("click",()=>{
    userDesc.classList.toggle("active")
})


// end toggle user 




// start toggle settings 
let gear = document.querySelector(".settings")
console.log(gear)

gear.addEventListener("click", () => {
    gear.classList.toggle("sidebargear")
})
// end toggle settings 

// start rotate gear 
let parentGear = document.querySelector(".parent-gear")
let Gear = document.querySelector(".fa-gear")

parentGear.addEventListener("click",()=>{
    Gear.classList.toggle("active")
})
// end start gear 
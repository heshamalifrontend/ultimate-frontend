let toggle=document.querySelector(".toggle-slide"),content=document.querySelector(".content-area"),sidebar=document.querySelector(".sidebar"),link1=(toggle.addEventListener("click",function(){content.classList.toggle("no-sidebar"),sidebar.classList.toggle("no-sidebar")}),document.querySelector(".child-links1")),form=document.querySelector(".link1"),misc=document.querySelector(".link2"),link2=document.querySelector(".child-links2");form.addEventListener("click",function(){link1.classList.toggle("block")}),misc.addEventListener("click",function(){link2.classList.toggle("block")});
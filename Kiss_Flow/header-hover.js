document.addEventListener("DOMContentLoaded",()=>{
    let platform_hover=document.querySelector(".platform-info");
    let platform_content=document.querySelector(".Platform");
    let container=document.querySelector(".container-web");
    let solution=document.querySelector(".Solutions");
    let resource=document.getElementById("resource");
  
    platform_content.addEventListener("mouseover",()=>{
    platform_hover.style.visibility="visible";
    document.body.style.backgroundColor = "rgb(71, 71, 71)";
    container.style.opacity= "0.5";
    
}
)
platform_content.addEventListener("mouseout",()=>{
    platform_hover.style.visibility="hidden";
    document.body.style.backgroundColor = "#fffdfd";
    container.style.opacity= "1";
})
platform_hover.addEventListener("mouseover",()=>{
    platform_hover.style.visibility="visible";
    document.body.style.backgroundColor = "rgb(71, 71, 71)";
    container.style.opacity= "0.7";
})

platform_hover.addEventListener("mouseout",()=>{
    platform_hover.style.visibility="hidden";
    document.body.style.backgroundColor = "#fffdfd";
    container.style.opacity= "1";
})


// ----------------------------------------------------------------------support-----------------------------------------------------------
solution.addEventListener("mouseover",()=>{
    platform_hover.style.visibility="visible";
    document.body.style.backgroundColor = "rgb(71, 71, 71)";
    container.style.opacity= "0.5";
    
}
)
solution.addEventListener("mouseout",()=>{
    platform_hover.style.visibility="hidden";
    document.body.style.backgroundColor = "#fffdfd";
    container.style.opacity= "1";
})
platform_hover.addEventListener("mouseover",()=>{
    platform_hover.style.visibility="visible";
    document.body.style.backgroundColor = "rgb(71, 71, 71)";
    container.style.opacity= "0.7";
})

platform_hover.addEventListener("mouseout",()=>{
    platform_hover.style.visibility="hidden";
    document.body.style.backgroundColor = "#fffdfd";
    container.style.opacity= "1";
})





resource.addEventListener("mouseover",()=>{
    platform_hover.style.visibility="visible";
    document.body.style.backgroundColor = "rgb(71, 71, 71)";
    container.style.opacity= "0.5";
    
}
)
resource.addEventListener("mouseout",()=>{
    platform_hover.style.visibility="hidden";
    document.body.style.backgroundColor = "#fffdfd";
    container.style.opacity= "1";
})
platform_hover.addEventListener("mouseover",()=>{
    platform_hover.style.visibility="visible";
    document.body.style.backgroundColor = "rgb(71, 71, 71)";
    container.style.opacity= "0.7";
})

platform_hover.addEventListener("mouseout",()=>{
    platform_hover.style.visibility="hidden";
    document.body.style.backgroundColor = "#fffdfd";
    container.style.opacity= "1";
})










});


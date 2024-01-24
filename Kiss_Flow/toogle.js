
document.addEventListener('DOMContentLoaded', function () {
    let toogle=document.querySelector(".language");
    let container=document.querySelector(".lang1");
    toogle.addEventListener('click',()=>
    {
        if(container.style.display=="none")
       {
       container.style.display="block";
    }
    else{
       container.style.display="none";     
    }
}
    
    );
 
    
   
});




var batdau = document.querySelector(".start")
var chuot = document.querySelectorAll(".chuot img")
batdau.addEventListener("click",function(){
    chuot[Math.floor(Math.random() * 9)].classList.add("open")
})

    for(var i = 0 ; i < chuot.length ; i++)
    {
        
        chuot[i].addEventListener("click",function(e)
        {
            e.target.classList.remove("open")
            chuot[Math.floor(Math.random() * 9)].classList.add("open")
        })
    }






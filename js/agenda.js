// Portfolio submenu resize
const subMenuYears = document.getElementById("subMenuYears");

function widthResizer() {
    let width = window.innerWidth
    console.log(width)
    if (width < 768){
        subMenuYears.style.top = "45px";
    }

    else{
        subMenuYears.style.top = "42px";
       
    }
        
}

// Getting the width of the browser on load
widthResizer()

// Getting the width of the browser whenever the screen resolution changes.
window.addEventListener('resize', widthResizer)
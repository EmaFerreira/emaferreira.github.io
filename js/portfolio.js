// Portfolio submenu resize
const portfolioSubMenu = document.getElementById("subMenuPortfolioSections");

function widthResizer() {
    let width = window.innerWidth
    console.log(width)
    if (width < 768) {
        portfolioSubMenu.style.top = "45px";
    }

    else {
        portfolioSubMenu.style.top = "33px";

    }

}

// Getting the width of the browser on load
widthResizer()

// Getting the width of the browser whenever the screen resolution changes.
window.addEventListener('resize', widthResizer)
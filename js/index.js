// Change navbar toggle icon on open and close

let navOpen = false;

const buttonT = document.getElementById("buttonT");
const iconT = document.getElementById("iconT");

buttonT.addEventListener('click', changeIcon);

function changeIcon() {
    if (!navOpen) {
        iconT.textContent = "-";
        navOpen = true;
    } else {
        iconT.textContent = "+";
        navOpen = false;
    }
}






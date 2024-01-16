//BURGER
function changeImage() {
    var imageElement = document.getElementById("burger");
    var menuElement = document.getElementById("menu");


    if (imageElement.src.match("burger2.png")) {
        imageElement.src = "../img/burger.png";

        menuElement.classList.add("menu-hidden");
    } else {

        imageElement.src = "../img/burger2.png";

        menuElement.classList.remove("menu-hidden");
        menuElement.classList.add("menu-visible");
    }
}

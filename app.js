let mobileMenu = document.querySelector(".nav-mobile-menu")
let mainMenu = document.querySelector(".menu")

mobileMenu.addEventListener("click", function () {
    mobileMenu.classList.toggle("active-menu");
    if(mobileMenu.classList.contains("active-menu")) {
        mainMenu.classList.add("active-menu")
    } else {
        mainMenu.classList.remove("active-menu")
    }
})



let dataNav = document.querySelector("body").getAttribute("data-nav")

mobileMenu.addEventListener("click", function () {
    if (dataNav === "false") {
        dataNav = "true";
    } else {
        dataNav = "false";
    }

    document.querySelector("body").dataset.nav = dataNav;
});

let body = document.querySelector("body")

mobileMenu.addEventListener("click", function () {
    let dataNav = body.dataset.nav;

    if (dataNav === "false") {
        dataNav = "true";
    } else {
        dataNav = "false";
    }

    if (dataNav === "true") {
        body.classList.add("no-scroll");
        body.classList.remove("scroll");
    } else {
        body.classList.remove("no-scroll");
        body.classList.add("scroll");
    }
});
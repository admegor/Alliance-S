const burgerBtn = document.querySelector(".nav-header-burger");
const navHeader = document.querySelector(".header__menu");
const submenuLists = document.querySelectorAll(".has-submenu");
const menuCatalogTrigger = document.querySelector('.menu-catalog-item');
const menuCatalog = document.querySelector('.header-catalog');

function menu() {

    burgerBtn.addEventListener('click', (el) => {
        el.preventDefault();
        console.log("ckick!");
        burgerBtn.classList.toggle('active');
        if (burgerBtn.classList.contains('active')) {
            navHeader.classList.add('open');
        } else {
            navHeader.classList.remove('open');
        }
    }) 
    
    for (let submenuList of submenuLists) {
        submenuList.addEventListener('click', (e) => {
            e.preventDefault();
            for (let i = 0; i < submenuLists.length; i++) {
                console.log(submenuLists[i]);
                if (submenuLists[i].classList.contains('open')) {
                    submenuLists[i].classList.remove('open');
                }
            }
            submenuList.classList.add('open');
        })
    }

    menuCatalogTrigger.addEventListener("mouseenter", () => {
        menuCatalog.classList.add('show');
        console.log("show");
    })
    menuCatalogTrigger.addEventListener("mouseout", () => {
        menuCatalog.classList.remove('show');
        console.log("hidden");
    })
    menuCatalog.addEventListener("mouseenter", () => {
        menuCatalog.classList.add('show');
        console.log("show");
    })
    menuCatalog.addEventListener("mouseout", () => {
        menuCatalog.classList.remove('show');
        console.log("hidden");
    })
    

}
menu();
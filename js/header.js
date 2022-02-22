const blur = document.getElementById("blur");
const header = document.querySelector("header");
const body = document.querySelector("body");
const popups = document.querySelectorAll("[data-popup]")
const popupTriggers = document.querySelectorAll("[data-popupTrigger]")

function showBlur() {
    blur.classList.add("active")
}

function hideBlur() {
    blur.classList.remove("active")
}

function blockScroll() {
    body.classList.add("scroll-block")
}

function unblockScroll() {
    body.classList.remove("scroll-block")
}

function makeHeaderWhite(){
    header.classList.add("white-bg");
}

function removeWhiteHeader(){
    header.classList.remove("white-bg")
}

function closeAll(){
    popups.forEach(el=>{
        el.classList.remove("active")
    })
    popupTriggers.forEach(el=>{
        el.classList.remove("active")
    })
    hideBlur()
    unblockScroll()
    removeWhiteHeader()
}

function toogleMenu(trigger,menuElement, openFunc=()=>{}){
    // That statement allows us to close a mobile catalogue without opening burger(because them are on one button)
    // *if catalogue opened burger button are active and burger arent, so we need to click burger button and don`t 
    //  open the burger, kust close the catalogue, so we check if the button has cative and if it has we close all
    //  popups and dont open the related to button popup
    if(menuElement.classList.contains("active") || trigger.classList.contains("active") ){
        closeAll()
        trigger.classList.remove("active")
        menuElement.classList.remove("active")
        hideBlur()
        unblockScroll();
    } else{
        closeAll()
        openFunc()
        trigger.classList.add("active")
        menuElement.classList.add("active")
        showBlur()
        blockScroll();
        makeHeaderWhite()
    }
}

// Search
const searchOpen = document.getElementById("search-open");
const searchClose = document.getElementById("header_search-bar-close");
const searchBlock = document.querySelector(".header_middle")
const searchBar = document.getElementById("search-bar");
const searchResults = document.getElementById("search-block")

searchOpen.addEventListener("click", ()=>{
    toogleMenu(searchOpen,searchBlock)
})

searchClose.addEventListener("click", ()=>{
    closeAll()
})

searchBar.addEventListener("input", ()=>{
    searchBar.value != "" ? searchResults.classList.add("opened") : searchResults.classList.remove("opened")
})


// Authorization
const authOpenButton = document.querySelectorAll(".authorization-open")
const authBlock = document.getElementById("authorization")
const authCloseButton = document.getElementById("authorization-close")

authOpenButton.forEach(el=>{
    el.addEventListener("click", ()=>{
        toogleMenu(el,authBlock)
    })
})

authCloseButton.addEventListener("click", ()=>{
    closeAll()
})

// Cart
const cartOpenButton = document.getElementById("cart-open")
const cartBlock = document.getElementById("cart")
const cartCloseButton = document.getElementById("cart-close")

cartOpenButton.addEventListener("click", ()=>{
    toogleMenu(cartOpenButton,cartBlock)
})

cartCloseButton.addEventListener("click", ()=>{
    closeAll()
})

// Burger
const burgerOpenButton = document.getElementById("burger-open")
const burgerBlock = document.getElementById("burger")

burgerOpenButton.addEventListener("click", ()=>{
    toogleMenu(burgerOpenButton,burgerBlock)
})

// Catalogue
const catalogueOpenButton = document.querySelectorAll(".catalogue-open")
const catalogueBlock = document.getElementById("catalogue")

// Beacause catalugue pop up hasn`t his own close btn, so we must simulate it by 
// Setting active burger btn to active (if we will clicl on it then all popups will close with catalogue)
function createCatalogueClosebtn(){
    burgerOpenButton.classList.add("active")
}

catalogueOpenButton.forEach(el=>{
    el.addEventListener("click", ()=>{
        toogleMenu(el,catalogueBlock,createCatalogueClosebtn)
    })
})

const unfoldButton = document.querySelectorAll(".catalogue-item__unfold");

unfoldButton.forEach(el=>{
    const list = el.parentNode.querySelector("ul");

    el.addEventListener("click",()=>{
        if(list.classList.contains("folded")){
            list.classList.remove("folded")
            el.style.display = "none"
        }
    })
    
})

function foldAll(){
    const unfoldButton = document.querySelectorAll(".catalogue-item__unfold")

    unfoldButton.forEach(el=>{
        el.style.display = "block"
        el.parentNode.querySelector("ul").classList.add("folded")
    })
}
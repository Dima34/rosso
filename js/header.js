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

function closeAll(){
    popups.forEach(el=>{
        el.classList.remove("active")
    })
    popupTriggers.forEach(el=>{
        el.classList.remove("active")
    })
    hideBlur()
    unblockScroll()
}

function toogleMenu(trigger,menuElement, openFunc=()=>{}){
    if(menuElement.classList.contains("active")){
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
    }
}

function makeHeaderWhite(){
    header.classList.add("white-bg");
}

function removeWhiteHeader(){
    header.classList.remove("white-bg")
}


// Search
const searchOpen = document.getElementById("search-open");
const searchClose = document.getElementById("header_search-bar-close");
const searchBar = document.getElementById("search-bar");
const searchResults = document.getElementById("search-block")

searchOpen.addEventListener("click", ()=>{
    closeAll()
    openSearch()
})

searchClose.addEventListener("click", ()=>{
    closeSearch()
})

searchBar.addEventListener("input", ()=>{
    searchBar.value != "" ? searchResults.classList.add("opened") : searchResults.classList.remove("opened")
})

function openSearch() {
    makeHeaderWhite();
    showBlur()
    blockScroll();
    header.classList.add("search--opened")
}

function closeSearch() {
    removeWhiteHeader();
    searchResults.classList.remove("opened")
    searchBar.value = ""
    hideBlur()
    unblockScroll()
    header.classList.remove("search--opened")
}

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

// Catalogue
const catalogueOpenButton = document.querySelectorAll(".catalogue-open")
const catalogueBlock = document.getElementById("catalogue")

catalogueOpenButton.forEach(el=>{
    el.addEventListener("click", ()=>{
        toogleMenu(el,catalogueBlock)
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

// Burger
const burgerOpenButton = document.getElementById("burger-open")
const burgerBlock = document.getElementById("burger")

burgerOpenButton.addEventListener("click", ()=>{
    toogleMenu(burgerOpenButton,burgerBlock)
})



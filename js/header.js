const blur = document.getElementById("blur");
const header = document.querySelector("header");
const body = document.querySelector("body");

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
    closeSearch()
    authClose()
    cartClose()
    burgerClose()
    catalogueClose()
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

function authOpen() {
    authBlock.classList.add("active")
    showBlur()
    blockScroll();
    makeHeaderWhite()
}

function authClose() {
    authBlock.classList.remove("active")
    hideBlur()
    unblockScroll()
    removeWhiteHeader()
}

authOpenButton.forEach(el=>{
    el.addEventListener("click", ()=>{
        closeAll()
        authOpen();
    })
})

authCloseButton.addEventListener("click", ()=>{
    authClose();
})

// Cart
const cartOpenButton = document.getElementById("cart-open")
const cartBlock = document.getElementById("cart")
const cartCloseButton = document.getElementById("cart-close")

function cartOpen() {
    cartBlock.classList.add("active")
    showBlur()
    blockScroll();
    makeHeaderWhite()
}

function cartClose(){
    cartBlock.classList.remove("active")
    hideBlur()
    unblockScroll()
    removeWhiteHeader()
}

cartOpenButton.addEventListener("click", ()=>{
    closeAll()
    cartOpen()
})

cartCloseButton.addEventListener("click", ()=>{
    cartClose()
})

// Catalogue
const catalogueOpenButton = document.querySelectorAll(".catalogue-open")
const catalogueBlock = document.getElementById("catalogue")

function catalogueToggle() {

    if(catalogueBlock.classList.contains("active")){
        catalogueClose()
    } else{
        catalogueOpen()
    }
}

function catalogueClose(){
    catalogueButtonsRemoveClass()
    catalogueBlock.classList.remove("active")
    hideBlur()
    unblockScroll();   
    foldAll()    
    removeWhiteHeader()
}

function catalogueOpen(){
    closeAll()
    catalogueButtonsAddClass()
    catalogueBlock.classList.add("active")
    showBlur()
    blockScroll();
    makeHeaderWhite()
}

function catalogueButtonsRemoveClass(){
    catalogueOpenButton.forEach(el=>{
        el.classList.remove("active")
    })
}

function catalogueButtonsAddClass(){
    catalogueOpenButton.forEach(el=>{
        el.classList.add("active")
    })
}

catalogueOpenButton.forEach(el=>{
    el.addEventListener("click", ()=>{
        catalogueToggle()
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

function burgerToggle() {
    console.log(burgerBlock.classList.contains("active"));

    if(burgerBlock.classList.contains("active")){
        closeAll()
    } else{
        burgerOpen()
    }
}

function burgerOpen() {
    console.log(`open`);
    burgerBlock.classList.add("active")
    burgerOpenButton.classList.add("active")
    showBlur()
    blockScroll();
}

function burgerClose(){
    console.log(`close`);
    burgerBlock.classList.remove("active")
    burgerOpenButton.classList.remove("active")
    hideBlur()
    unblockScroll()
}

burgerOpenButton.addEventListener("click", ()=>{
    burgerToggle()
})



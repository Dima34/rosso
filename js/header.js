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


// Search
const searchOpen = document.getElementById("search-open");
const searchClose = document.getElementById("header_search-bar-close");
const searchBar = document.getElementById("search-bar");
const searchResults = document.getElementById("search-block")

searchOpen.addEventListener("click", ()=>{
    openSearch()
})

searchClose.addEventListener("click", ()=>{
    closeSearch()
})

searchBar.addEventListener("input", ()=>{
    searchBar.value != "" ? searchResults.classList.add("opened") : searchResults.classList.remove("opened")
})

function openSearch() {
    header.classList.add("search--opened")
    showBlur()
    blockScroll();
}

function closeSearch() {
    header.classList.remove("search--opened")
    searchResults.classList.remove("opened")
    searchBar.value = ""
    hideBlur()
    unblockScroll()
}

// Authorization
const authOpenButton = document.getElementById("authorization-open")
const authBlock = document.getElementById("authorization")
const authCloseButton = document.getElementById("authorization-close")

function authOpen() {
    authBlock.classList.add("active")
    showBlur()
    blockScroll();
}

function authClose() {
    authBlock.classList.remove("active")
    hideBlur()
    unblockScroll()
}

authOpenButton.addEventListener("click", ()=>{
    authOpen();
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
}

function cartClose(){
    cartBlock.classList.remove("active")
    hideBlur()
    unblockScroll()
}

cartOpenButton.addEventListener("click", ()=>{
    cartOpen()
})

cartCloseButton.addEventListener("click", ()=>{
    cartClose()
})

// Favorites
const favoritesOpenButton = document.getElementById("favorites-open")
const favoritesBlock = document.getElementById("favorites")
const favoritesCloseButton = document.getElementById("favorites-close")

function favoritesOpen() {
    favoritesBlock.classList.add("active")
    showBlur()
    blockScroll();
}

function favoritesClose(){
    favoritesBlock.classList.remove("active")
    hideBlur()
    unblockScroll()
}

favoritesOpenButton.addEventListener("click", ()=>{
    favoritesOpen()
})

favoritesCloseButton.addEventListener("click", ()=>{
    favoritesClose();
})
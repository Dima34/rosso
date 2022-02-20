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
const authOpen = document.getElementById("authorization-open")
const authBlock = document.getElementById("authorization")
const authClose = document.getElementById("authorization-close")

function authOpenFucn() {
    authBlock.classList.add("active")
    showBlur()
    blockScroll();
}

function authCloseFucn() {
    authBlock.classList.remove("active")
    hideBlur()
    unblockScroll()
}

authOpen.addEventListener("click", ()=>{
    authOpenFucn();
})

authClose.addEventListener("click", ()=>{
    authCloseFucn();
})

// Cart
const cartOpen = document.getElementById("cart-open")
const cartBlock = document.getElementById("cart")
const cartClose = document.getElementById("cart-close")

function cartOpenFunc() {
    cartBlock.classList.add("active")
    showBlur()
    blockScroll();
}

function cartCloseFunc(){
    cartBlock.classList.remove("active")
    hideBlur()
    unblockScroll()
}

cartOpen.addEventListener("click", ()=>{
    cartOpenFunc()
})

cartClose.addEventListener("click", ()=>{
    cartCloseFunc()
})
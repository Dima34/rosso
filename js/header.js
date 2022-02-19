const headerMiddle = document.querySelector(".header_middle");
const searchOpen = document.getElementById("search-open");
const searchClose = document.getElementById("header_search-bar-close");

console.log(searchOpen);
console.log(searchClose);

searchOpen.addEventListener("click", ()=>{
    headerMiddle.classList.add("search--opened")
})

searchClose.addEventListener("click", ()=>{
    headerMiddle.classList.remove("search--opened")
})
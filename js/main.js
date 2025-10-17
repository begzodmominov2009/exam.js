let menus_category = document.getElementById("menus-category");
let category = document.getElementById("category");
let search_category = document.getElementById("search-category")
let menus = document.getElementById("menus")
let close = document.getElementById("close")

menus_category.addEventListener("click", () => {
    category.classList.add("category-view")
})
window.addEventListener("scroll" , () => {
    category.classList.remove("category-view")
    category.classList.add("duration")
})
search_category.addEventListener("click" , () => {
    menus.classList.add("menus-view")
})
close.addEventListener("click" , () => {
    menus.classList.remove("menus-view")
    menus.classList.add("close-transition")
})
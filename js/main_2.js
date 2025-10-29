let menus_category = document.getElementById("menus-category");
let category = document.getElementById("category");
let search_category = document.getElementById("search-category")
let menus = document.getElementById("menus")
let close = document.getElementById("close")
let menus_category_close = document.getElementById("menus-category-close")
let register_head = document.getElementById("register-head")
let register = document.getElementById("register")
let register_close = document.getElementById("register-close")


menus_category.addEventListener("click", () => {
    category.classList.add("category-view")
    menus_category.classList.add("menus-category-hidde")
    menus_category_close.classList.add("menus-category-hidden")

})
menus_category_close.addEventListener("click", () => {
    category.classList.remove("category-view")
    category.classList.add("duration")
    menus_category_close.classList.remove("menus-category-hidden")
    menus_category.classList.remove("menus-category-hidde")
})

search_category.addEventListener("click", () => {
    menus.classList.add("menus-view")
})
close.addEventListener("click", () => {
    menus.classList.remove("menus-view")
    menus.classList.add("close-transition")
})
register_head.addEventListener("click", () => {
    register.classList.toggle("register-view")
    register.classList.add("duration")
})
register_close.addEventListener("click", () => {
    register.classList.remove("register-view")
    register.classList.add("duration")
})
window.addEventListener("scroll", () => {
    register.classList.remove("register-view")
})


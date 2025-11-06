let menus_category = document.getElementById("menus-category");
let category = document.getElementById("category");
let search_category = document.getElementById("search-category")
let menus = document.getElementById("menus")
let close = document.getElementById("close")
let menus_category_close = document.getElementById("menus-category-close")
let register_head = document.getElementById("register-head")
let register = document.getElementById("register")
let register_close = document.getElementById("register-close")
let loading = document.getElementById("loading")
let profile = document.getElementById("profile")
let formModal = document.getElementById("form-modal")
let innerModal = document.getElementById("inner-modal")
let form = document.getElementById("form")
let profileImg = document.getElementById("profile-img")
let profileTitle = document.getElementById("profile-title")
let profileObj = JSON.parse(localStorage.getItem("profile") || "{}")
let deletProfile = document.getElementById("delet-profile")

profileImg.src = profileObj.urlPhoto;
profileTitle.textContent = profileObj.name


profile.addEventListener("click", () => {
    formModal.classList.remove("hidden")
})
formModal.addEventListener("click", () => {
    formModal.classList.add("hidden")
})
innerModal.addEventListener("click", (e) => {
    e.stopPropagation();
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    profileObj.urlPhoto = e.target[0].value;
    profileObj.name = e.target[1].value;
    profileObj.phone = e.target[2].value;
    profileImg.src = e.target[0].value;
    profileTitle.textContent = e.target[1].value
    console.log(profileObj);
    localStorage.setItem("profile", JSON.stringify(profileObj))
    formModal.classList.add("hidden")
})


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


close.addEventListener("click", () => {
    menus.classList.remove("menus-view")
    menus.classList.add("close-transition")
})










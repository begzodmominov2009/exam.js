let categoryCart = document.querySelector(".category-cart")
categoriesData.map((el) => {
    categoryCart.innerHTML += `
     <a href="./Pages/categories.html?categoriesName=${el.name}" class="flex items-center gap-[7px]">
                <img class="w-[40px] h-[40px] rounded-[50%] object-cover" src="${el.Url}" alt="img">
                <p>${el.name}</p>
            </a>
    `
})


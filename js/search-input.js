let search_input = document.getElementById("search-input")
let searchCards = document.getElementById("search-cards")

search_input.addEventListener("input", function (e) {
    let searchValue = e.target.value;
    let searchProduct = products.filter((el) => el.name.toUpperCase().includes(searchValue.toUpperCase()))
    if (searchValue) {
        searchCards.classList.remove("hidden")
    } else {
        searchCards.classList.add("hidden")
        searchCards.innerHTML = ""
    }
    searchCards.innerHTML = ""
    searchProduct.length > 0 ?
        searchProduct.map((el) => {
            searchCards.innerHTML += `
        <div class="flex items-center px-[15px] gap-[15px] border-[1px] border-[#BFBFBF] py-[5px] rounded-[8px]">
            <img class="max-w-[55px] w-full h-[35px] rounded-[5px]" src=${el.images[0]} alt="img">
                <div class="flex flex-col justify-between">
                    <h1 class="">${el.name}</h1>
                    <p class="text-[14px] text-[#BFBFBF] line-clamp-1">${el.description}</p>
                </div>
        </div>
`
        }) : searchCards.innerHTML = `<div class="text-center">Bunday mahsulot topilmadi 😕</div>`
})
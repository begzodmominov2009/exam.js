
let discount_product = document.querySelector(".discount_product")
let new_products = document.querySelector(".new-products")
let bought_products = document.querySelector(".bought-products")
let articles_products = document.querySelector(".articles-products")
let maps_card = document.querySelector(".maps-card")
let special_card = document.querySelector(".special-card")
let carts = JSON.parse(localStorage.getItem("carts") || "[]");
localStorage.setItem("carts", JSON.stringify(carts));
let badge = document.getElementById("badge")
let badge_2 = document.getElementById("badge-2")
badge.textContent = carts.length
badge_2.textContent = carts.length
let like = JSON.parse(localStorage.getItem("like") || "[]");
localStorage.setItem("like", JSON.stringify(like));
let like_badge = document.getElementById("like-badge")
let like_badge_2 = document.getElementById("like-badge-2")
like_badge.textContent = like.length
like_badge_2.textContent = like.length



let sliceLastProducts = products.slice(products.length - 4, products.length)
let discountProducts = products.filter((el) => el.discount > 0)
let sliceDiscountProducts = discountProducts.slice(discountProducts.length - 4, discountProducts.length)


let sliceNewProducts = products.slice(products.length - 4, products.length)
let noDiscountProducts = products.filter((el) => el.discount === 0)
let sliceNoDiscountProducts = noDiscountProducts.slice(noDiscountProducts.length - 4, noDiscountProducts.length)



let sliceBoughtProducts = products.slice(products.length - 10, products.length)
let bughtDiscountProducts = products.filter((el) => el.discount === 0)
let sliceBughtDiscountProducts = bughtDiscountProducts.slice(bughtDiscountProducts[0], bughtDiscountProducts.length - 10)

function homeProducts(content, data) {
    content.innerHTML = ""
    data.map((el) => {
        content.innerHTML += `
            <div class="max-w-[302px] rounded-[4px] w-full cursor-pointer bg-[white] relative group overflow-hidden shadow-2xl">
            <div class="owl-carousel owl-theme relative">
             <a href="./Pages/single.html?id=${el.id}">
                 <img class="w-full h-[140px] sm:h-[202px]" src=${el.images[0]} alt="img">
               </a>
                <a href="./Pages/single.html?id=${el.id}">
                 <img class="w-full h-[140px] sm:h-[202px]" src=${el.images[1]} alt="img">
               </a>
                <a href="./Pages/single.html?id=${el.id}">
                 <img class="w-full h-[140px] sm:h-[202px]" src=${el.images[2]} alt="img">
               </a>
                <a href="./Pages/single.html?id=${el.id}">
                 <img class="w-full h-[140px] sm:h-[202px]" src=${el.images[3]} alt="img">
               </a>
             </div>
             <div class="flex items-center justify-between pt-[8px]">
               <div class="flex items-center justify-between w-full">
               <p class="font-bold text-[14px] px-[8px] sm:text-[18px]">${el.price - el.price * el.discount / 100}₽</p>
                ${el.discount > 0 ? (`<strike class="text-[12px] bg-[#FF6633] text-[#ffff] mr-[8px] rounded-[4px]  inline-blok px-[7px] sm:px-[8px] sm:text-[14px]">${el.price}₽</strike>`)
                : ("")
                }
                </div>
                </div>
                <div class="flex items-center justify-between pt-[4px]">
                <div>
                <p class="text-[14px] px-[8px] sm:text-[18px]">${el.name}</p>
                </div>
                </div>
                <div class="flex flex-col gap-[2.5px] sm:gap-[8px] pt-[4px] sm:pt-[8px] ">
                <p class="text-[12px] text-[#595858] sm:text-[16px] px-[8px] line-clamp-2">${el.description}</p>
                ${el.rating === 5 ? `
                          <div class="flex gap-[4px] px-[8px] pt-[2px] sm:pt-[4px]">
                            <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                            <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                            <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                            <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                            <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                           </div>
                   ` : el.rating === 4.5 ? `
                             <div class="flex gap-[4px] px-[8px] pt-[2px] sm:pt-[4px]">
                            <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                            <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                            <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                            <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                            <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/yarm.svg" alt="star" />
                           </div>
                   `: el.rating === 4 ? `
                             <div class="flex gap-[4px] px-[8px] pt-[2px] sm:pt-[4px]">
                            <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                            <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                            <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                            <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                            <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                           </div>
                           
                   `: el.rating === 3.5 ? `
                              <div class="flex gap-[4px] px-[8px] pt-[2px] sm:pt-[4px]">
                            <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                            <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                            <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                            <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/yarm.svg" alt="star" />
                            <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                           </div>
                   `: el.rating === 3 ? `
                             <div class="flex gap-[4px] px-[8px] pt-[2px] sm:pt-[4px]">
                            <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                            <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                            <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                            <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                            <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                           </div>
                   `: el.rating === 2.5 ? `
                            <div class="flex gap-[4px] px-[8px] pt-[4px]">
                            <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                            <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                            <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/yarm.svg" alt="star" />
                            <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                            <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                           </div>
                   `: el.rating === 2 ? `
                           <div class="flex gap-[4px] px-[8px] pt-[4px]">
                            <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                            <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                            <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                            <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                            <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                           </div>
                   `: el.rating === 1.5 ? `
                            <div class="flex gap-[4px] px-[8px] pt-[4px]">
                            <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                            <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/yarm.svg" alt="star" />
                            <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                            <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                            <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                           </div>
                   `: el.rating === 1 ? `
                            <div class="flex gap-[4px] px-[8px] pt-[4px]">
                            <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                            <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                            <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                            <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                            <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                           </div>
                   `: el.rating === 0.5 ? `
                           <div class="flex gap-[4px] px-[8px] pt-[4px]">
                            <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/yarm.svg" alt="star" />
                            <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                            <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                            <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                            <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                           </div>
                   `: el.rating === 0 ? `
                            <div class="flex gap-[4px] px-[8px] pt-[4px]">
                            <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                            <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                            <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                            <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                            <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                           </div>
                   `: ""
                }
             <div class="px-[8px]">
                ${carts.find((cart) => cart.id === el.id) ?
                ` <div class="w-full grid grid-cols-3 mb-[8px] mt-[2px] bg-[#d3d3d3]/30 cursor-pointer h-[35px] sm:h-[40px]">
                   <button
                   onClick="decraese(${el.id})"
                   class="w-full cursor-pointer rounded-tl-[4px] rounded-bl-[4px] bg-[#FF6633] flex items-center justify-center"><img class="w-[18px] sm:w-[22px] h-[18px] sm:h-[22px]" src="../assets/header/minus.svg" alt="minus" /></button>
                   <span class="w-full text-[black] text-[14px] sm:text-[18px] flex items-center justify-center">
                   ${carts.find((cart) => cart.id === el.id).number}
                   </span>
                   <button onClick={increase(${el.id})}       
                   class="w-full cursor-pointer rounded-br-[4px] rounded-tr-[4px] bg-[#FF6633] flex items-center justify-center"><img class="w-[14px] sm:w-[18px] h-[14px] sm:h-[18px]" src="../assets/header/plus.svg" alt="minus" /></button>
                   </div>` :
                   `<button onClick="addToCart(${el.id})"
                    class="w-full mb-[8px] mt-[2px]  rounded-[4px] text-[#70C05B] px-[8px] hover:text-[white] duration-[0.5s] hover:bg-[#FF6633] hover:border-none cursor-pointer h-[35px] sm:h-[40px] border-[1px] border-[#70C05B]">
                    В корзину
                    </button>`
                    }        
                    </div>
                    ${like.find((item) => item.id === el.id)
                  ? `<svg 
                       onClick="removeTolike(${el.id})" 
                    class="absolute top-[6px] z-200 sm:top-[8px] duration-[0.5s] right-[5px] sm:right-[15px] bg-[#FF6633] p-[3px] rounded-[50%] sm:rounded-[4px]" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffff">
                    <path d="M440-501Zm0 381L313-234q-72-65-123.5-116t-85-96q-33.5-45-49-87T40-621q0-94 63-156.5T260-840q52 0 99 22t81 62q34-40 81-62t99-22q84 0 153 59t69 160q0 14-2 29.5t-6 31.5h-85q5-18 8-34t3-30q0-75-50-105.5T620-760q-51 0-88 27.5T463-660h-46q-31-45-70.5-72.5T260-760q-57 0-98.5 39.5T120-621q0 33 14 67t50 78.5q36 44.5 98 104T440-228q26-23 61-53t56-50l9 9 19.5 19.5L605-283l9 9q-22 20-56 49.5T498-172l-58 52Zm160-280v-80h320v80H600Z"/>
                    </svg>` : `<svg
                    onClick="addToLike(${el.id})"
                    class="absolute top-[6px] z-50 sm:top-[8px]  duration-[0.5s] right-[5px] sm:right-[15px] bg-[#F3F2F1] p-[3px] rounded-[50%] sm:rounded-[4px]" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f#1f1f1f#1f1f1f"><path d="M440-501Zm0 381L313-234q-72-65-123.5-116t-85-96q-33.5-45-49-87T40-621q0-94 63-156.5T260-840q52 0 99 22t81 62q34-40 81-62t99-22q81 0 136 45.5T831-680h-85q-18-40-53-60t-73-20q-51 0-88 27.5T463-660h-46q-31-45-70.5-72.5T260-760q-57 0-98.5 39.5T120-621q0 33 14 67t50 78.5q36 44.5 98 104T440-228q26-23 61-53t56-50l9 9 19.5 19.5L605-283l9 9q-22 20-56 49.5T498-172l-58 52Zm280-160v-120H600v-80h120v-120h80v120h120v80H800v120h-80Z"/></svg>`
                    }
                    </div>
                </div>
    
    `
    })
}
homeProducts(discount_product, sliceDiscountProducts)
homeProducts(new_products, sliceNoDiscountProducts)
homeProducts(bought_products, sliceBughtDiscountProducts)



descriptionProducts.map((el) => {
    articles_products.innerHTML += `
    <div
                        class="max-w-[470px] w-full bg-[white] cursor-pointer shadow-2xl rounded-[8px] overflow-hidden">
                        <img class="w-full" src=${el.url} alt="img">
                        <div class="px-[10px] pb-[20px] pt-[10px]">
                            <p class="text-[#8F8F8F] text-[12px]">${el.data}</p>
                            <p class="font-bold text-[16px] sm:text-[18px]">${el.title}</p>
                            <p class="pt-[10px] text-[14px] sm:text-[16px] text-[#333333] pb-[17px]">${el.description}</p>
                            <a class="bg-[#E5FFDE] rounded-[4px]  hover:text-[white] duration-[0.3s] text-[#70C05B] px-[35px] group hover:bg-[#70C05B] p-[10px]"
                                href="./Pages/Vacancies.html">
                                Подробнее
                            </a>
                        </div>
                    </div>

    `
})

specialCard.map((el) => {
    special_card.innerHTML += `
                <div
                     class="bg-[#FCD5BA] max-w-[904px] w-full  overflow-hidden  group h-[200x] flex items-center justify-between rounded-[6px] shadow-md cursor-pointer px-[15px] py-[7px] sm:py-[15px] sm:px-[31.75px]">
                        <div>
                            <h3 class="text-[18px] sm:text-[24px] font-bold whi">${el.title}</h3>
                            <p class="text-[12px] sm:text-[16px] whitespace-wrap pt-[6px] whitespace-wrap">${el.description}</p>
                        </div>
                        <img class="w-[145px] sm:w-[225px]  scale-[1] group-hover:scale-[1.1] duration-[0.3s]"
                            src=${el.url} alt="img">
                    </div>
    `
})

maps.map((el) => {
    maps_card.innerHTML += `
      <div class="flex items-center gap-[18px] sm:gap-[24px] pt-[20px] sm:pt-[30px]">
                    <a class="bg-[#F3F2F1] group hover:bg-[#70C05B] hover:text-[white] duration-[0.3s] p-[8px] rounded-[4px] text-[12px]"
                        href="./Pages/contact.html">
                        ${el.description_1}
                    </a>
                    <a class="bg-[#F3F2F1] group hover:bg-[#70C05B] hover:text-[white] duration-[0.3s] p-[8px] rounded-[4px] text-[12px]"
                        href="./Pages/contact.html">
                        ${el.description_2}
                    </a>
                    <a class="bg-[#F3F2F1] group hover:bg-[#70C05B] hover:text-[white] duration-[0.3s] p-[8px] rounded-[4px] text-[12px]"
                        href="./Pages/contact.html">
                        ${el.description_3}
                    </a>
                    <a class="bg-[#F3F2F1] group hover:bg-[#70C05B] hover:text-[white] duration-[0.3s] p-[8px] rounded-[4px] text-[12px]"
                        href="./Pages/contact.html">
                        ${el.description_4}
                    </a>
                </div>
                <div class="pt-[14px] sm:pt-[24px] ">
                      <img class="w-full" src=${el.url} alt="img">
                </div>

    `
})

function addToCart(id) {
    let item = products.find((el) => el.id === id)
    item.number = 1;
    carts.push(item)
    badge.textContent = carts.length
    badge_2.textContent = carts.length
    localStorage.setItem("carts", JSON.stringify(carts));
    homeProducts(discount_product, sliceDiscountProducts)
    homeProducts(new_products, sliceNoDiscountProducts)
    homeProducts(bought_products, sliceBughtDiscountProducts)
    carousel()
}
function increase(id) {
    carts = carts.map((el) => {
        if (el.id === id) {
            el.number += 1
        }
        return el
    })
    badge.textContent = carts.length
    badge_2.textContent = carts.length
    localStorage.setItem("carts", JSON.stringify(carts));
    homeProducts(discount_product, sliceDiscountProducts)
    homeProducts(new_products, sliceNoDiscountProducts)
    homeProducts(bought_products, sliceBughtDiscountProducts)
    carousel()
}
function decraese(id) {
    let item = carts.find((el) => el.id === id)
    carts = carts.map((el) => {
        if (el.id === id) {
            el.number -= 1
        }
        return el
    })
    if (item.number < 1) {
        carts = carts.filter((el) => el.id !== id)
    }
    badge.textContent = carts.length
    badge_2.textContent = carts.length
    localStorage.setItem("carts", JSON.stringify(carts));
    homeProducts(discount_product, sliceDiscountProducts)
    homeProducts(new_products, sliceNoDiscountProducts)
    homeProducts(bought_products, sliceBughtDiscountProducts)
    carousel()
}
function addToLike(id) {
    let likeitem = products.find((el) => el.id === id)
    like.push(likeitem)
    like_badge.textContent = like.length
    like_badge_2.textContent = like.length
    localStorage.setItem("like", JSON.stringify(like));
    homeProducts(discount_product, sliceDiscountProducts)
    homeProducts(new_products, sliceNoDiscountProducts)
    homeProducts(bought_products, sliceBughtDiscountProducts)
    carousel()
}

function removeTolike(id) {
    like = like.filter((el) => el.id !== id)
    like_badge.textContent = like.length
    localStorage.setItem("like", JSON.stringify(like));
    like_badge_2.textContent = like.length
    homeProducts(discount_product, sliceDiscountProducts)
    homeProducts(new_products, sliceNoDiscountProducts)
    homeProducts(bought_products, sliceBughtDiscountProducts)
    carousel()
}


function carousel(){
    $(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});

$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: false,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        },
    },
});
}

carousel()









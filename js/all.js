let discount_product = document.querySelector(".discount_product")
let new_products = document.querySelector(".new-products")
let carts = JSON.parse(localStorage.getItem("carts") || "[]");
localStorage.setItem("carts", JSON.stringify(carts));
let badge_single = document.getElementById("badge-single");
let badge_single_2 = document.getElementById("badge-single-2")
let like = JSON.parse(localStorage.getItem("like") || "[]");
localStorage.setItem("like", JSON.stringify(like));
let like_badge_55 = document.getElementById("like-badge-55")
let like_badge_5 = document.getElementById("like-badge-5")
like_badge_5.textContent = like.length
like_badge_55.textContent = like.length
badge_single.textContent = carts.length;
badge_single_2.textContent = carts.length


let sliceLastProducts = products.slice(products.length - 4, products.length)
let discountProducts = products.filter((el) => el.discount > 0)
let sliceDiscountProducts = discountProducts.slice(discountProducts.length - 4, discountProducts.length)


let sliceNewProducts = products.slice(products.length - 4, products.length)
let noDiscountProducts = products.filter((el) => el.discount === 0)
let sliceNoDiscountProducts = noDiscountProducts.slice(noDiscountProducts.length - 4, noDiscountProducts.length)


function ViewProducts(content, data) {
    content.innerHTML = "";
    data.map((el) => {
        content.innerHTML += `
                  <div
                        class="max-w-[302px] rounded-[4px] w-full cursor-pointer bg-[white] relative group overflow-hidden shadow-2xl">
                        <a href="./single.html">
                            <img class="w-full h-[140px] sm:h-[202px]" src=${el.images[0]} alt="img">
                        </a>
                        <div class="flex items-center justify-between pt-[8px]">
                            <div class="flex items-center justify-between w-full">
                           <p class="font-bold text-[14px] px-[8px] sm:text-[18px]">${el.price - el.price * el.discount / 100}₽</p>
                            ${el.discount > 0 ? (`<strike class="text-[12px] bg-[#FF6633] text-[#ffff] mr-[8px] rounded-[4px]  inline-blok px-[8px] sm:text-[14px]">${el.price}₽</strike>`)
                : ("")
            }
                            </div>
                        </div>
                            <div class="flex items-center justify-between pt-[4px]">
                            <div>
                                <p class="text-[14px] px-[8px] sm:text-[18px]">${el.name}</p>
                            </div>
                        </div>
                        <div class="flex flex-col gap-[2.5px] sm:gap-[8px]  pt-[4px] sm:pt-[8px] ">
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
                           ${carts.find((cart) => cart.id === el.id) ? `<div
                                   class="w-full grid grid-cols-3 mb-[8px] mt-[2px] bg-[#d3d3d3]/30 cursor-pointer h-[35px] sm:h-[40px]">
                                   <button
                                   onClick="decraeseSingle(${el.id})"
                                    class="w-full cursor-pointer  rounded-tl-[4px] rounded-bl-[4px] bg-[#FF6633] flex items-center justify-center"><img class="w-[16px] sm:w-[24px] h-[16px] sm:h-[24px]" src="../assets/header/minus.svg" alt="minus" /></button>
                                    <span class="w-full     text-[black] text-[18px] flex items-center justify-center">
                                        ${carts.find((cart) => cart.id === el.id).number}
                                   </span>
                                   <button      
                                   onClick="increaseSingle(${el.id})" 
                                   class="w-full cursor-pointer rounded-br-[4px] rounded-tr-[4px] bg-[#FF6633] flex items-center justify-center"><img class="w-[13px] sm:w-[18px] h-[13px] sm:h-[18px]" src="../assets/header/plus.svg" alt="minus" /></button>
                                 </div>`
                : `<button
                                onClick="addToCartSingle(${el.id})"
                                    class="w-full mb-[8px] mt-[2px]  rounded-[4px] text-[#70C05B] px-[8px] hover:text-[white] duration-[0.5s] hover:bg-[#FF6633] hover:border-none cursor-pointer h-[35px] sm:h-[40px] border-[1px] border-[#70C05B]">
                                    В корзину
                                </button>`
            }         
                            </div>
                           ${like.find((item) => item.id === el.id)
                ? `<svg 
                       onClick="removeTolike(${el.id})" 
                    class="absolute top-[6px] sm:top-[8px]   duration-[0.5s] right-[5px] sm:right-[15px] bg-[#FF6633] p-[3px] rounded-[50%] sm:rounded-[4px]" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffff">
                    <path d="M440-501Zm0 381L313-234q-72-65-123.5-116t-85-96q-33.5-45-49-87T40-621q0-94 63-156.5T260-840q52 0 99 22t81 62q34-40 81-62t99-22q84 0 153 59t69 160q0 14-2 29.5t-6 31.5h-85q5-18 8-34t3-30q0-75-50-105.5T620-760q-51 0-88 27.5T463-660h-46q-31-45-70.5-72.5T260-760q-57 0-98.5 39.5T120-621q0 33 14 67t50 78.5q36 44.5 98 104T440-228q26-23 61-53t56-50l9 9 19.5 19.5L605-283l9 9q-22 20-56 49.5T498-172l-58 52Zm160-280v-80h320v80H600Z"/>
                    </svg>` : `<svg
                    onClick="addToLike(${el.id})"
                    class="absolute top-[6px] sm:top-[8px]  duration-[0.5s] right-[5px] sm:right-[15px] bg-[#F3F2F1] p-[3px] rounded-[50%] sm:rounded-[4px]" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f#1f1f1f#1f1f1f"><path d="M440-501Zm0 381L313-234q-72-65-123.5-116t-85-96q-33.5-45-49-87T40-621q0-94 63-156.5T260-840q52 0 99 22t81 62q34-40 81-62t99-22q81 0 136 45.5T831-680h-85q-18-40-53-60t-73-20q-51 0-88 27.5T463-660h-46q-31-45-70.5-72.5T260-760q-57 0-98.5 39.5T120-621q0 33 14 67t50 78.5q36 44.5 98 104T440-228q26-23 61-53t56-50l9 9 19.5 19.5L605-283l9 9q-22 20-56 49.5T498-172l-58 52Zm280-160v-120H600v-80h120v-120h80v120h120v80H800v120h-80Z"/></svg>`
            }
                    </div>
                </div>

    
    `
    })
}
ViewProducts(discount_product, sliceDiscountProducts)
ViewProducts(new_products, sliceNoDiscountProducts)


function addToCartSingle(id) {
    let item = products.find((el) => el.id === id)
    item.number = 1;
    carts.push(item)
    badge_single.textContent = carts.length
    badge_single_2.textContent = carts.length
    localStorage.setItem("carts", JSON.stringify(carts));
    ViewProducts(discount_product, sliceDiscountProducts)
    ViewProducts(new_products, sliceNoDiscountProducts)
}

function increaseSingle(id) {
    carts = carts.map((el) => {
        if (el.id === id) {
            el.number += 1;
        }
        return el
    })
    badge_single.textContent = carts.length
    badge_single_2.textContent = carts.length
    localStorage.setItem("carts", JSON.stringify(carts));
    ViewProducts(discount_product, sliceDiscountProducts)
    ViewProducts(new_products, sliceNoDiscountProducts)
}

function decraeseSingle(id) {
    let item = carts.find((el) => el.id === id)
    carts = carts.map((el) => {
        if (el.id === id) {
            el.number -= 1;
        }
        return el
    })
    if (item.number < 1) {
        carts = carts.filter((el) => el.id !== id)
    }
    badge_single.textContent = carts.length
    badge_single_2.textContent = carts.length
    localStorage.setItem("carts", JSON.stringify(carts));
    ViewProducts(discount_product, sliceDiscountProducts)
    ViewProducts(new_products, sliceNoDiscountProducts)
}
function addToLike(id) {
    let likeitem = products.find((el) => el.id === id)
    like.push(likeitem)
    like_badge_5.textContent = like.length
    like_badge_55.textContent = like.length
    localStorage.setItem("like", JSON.stringify(like));
    ViewProducts(discount_product, sliceDiscountProducts)
    ViewProducts(new_products, sliceNoDiscountProducts)
}

function removeTolike(id) {
    like = like.filter((el) => el.id !== id)
    localStorage.setItem("like", JSON.stringify(like));
    like_badge_5.textContent = like.length
    like_badge_55.textContent = like.length
    localStorage.setItem("like", JSON.stringify(like));
    ViewProducts(discount_product, sliceDiscountProducts)
    ViewProducts(new_products, sliceNoDiscountProducts)
}
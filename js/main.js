
let discount_product = document.querySelector(".discount_product")
let new_products = document.querySelector(".new-products")
let bought_products = document.querySelector(".bought-products")
let articles_products = document.querySelector(".articles-products")
let maps_card = document.querySelector(".maps-card")
let special_card = document.querySelector(".special-card")
let carts = JSON.parse(localStorage.getItem("carts") || "[]");
localStorage.setItem("carts", JSON.stringify(carts));
let badge = document.getElementById("badge")
badge.textContent = carts.length



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
                     <div
                        class="max-w-[302px] rounded-[4px] w-full cursor-pointer bg-[white] relative group overflow-hidden shadow-2xl">
                        <a href="./Pages/single.html">
                            <img class="w-full h-[140px] sm:h-[202px]" src=${el.images[0]} alt="img">
                        </a>
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
                                ${carts.find((cart) => cart.id === el.id) ? ` <div
                                   class="w-full grid grid-cols-3 gap- mb-[8px] mt-[2px]  rounded-[4px] text-[#70C05B] hover:text-[white] duration-[0.5s] hover:border-none cursor-pointer h-[35px] sm:h-[40px] border-[1px] border-[#70C05B]">
                                   <button
                                   onClick="decraese(${el.id})"
                                    class="w-full cursor-pointer rounded-[6px] bg-[transparent] text-[red] border-[1px] border-[red ] text-[18px] flex items-center justify-center">-</button>
                                    <span class="w-full bg-[white] text-[black] text-[18px] flex items-center justify-center">
                                   ${carts.find((cart) => cart.id === el.id).number
                                    }
                                   </span>
                                   <button
                                   onClick={increase(${el.id})}       
                                   class="w-full cursor-pointer bg-[green] rounded-[6px] text-[white] text-[18px] flex items-center justify-center">+</button>
                                  </div>` : `<button
                                  onClick="addToCart(${el.id})"
                                    class="w-full mb-[8px] mt-[2px]  rounded-[4px] text-[#70C05B] px-[8px] hover:text-[white] duration-[0.5s] hover:bg-[#FF6633] hover:border-none cursor-pointer h-[35px] sm:h-[40px] border-[1px] border-[#70C05B]">
                                    В корзину
                                </button>`
            }        
                            </div>
                            <svg class="absolute top-[8px] opacity-0 group-hover:opacity-100 duration-[0.5s] right-[15px] bg-[#F3F2F1] p-[2px] rounded-[4px] width="
                                24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M12.7046 4.25644C13.8299 3.13067 15.3564 2.49817 16.9482 2.49817C18.5399 2.49817 20.0664 3.13063 21.1916 4.25636C22.3174 5.38164 22.95 6.90829 22.95 8.49999C22.95 10.0917 22.3175 11.6183 21.1917 12.7435C21.1917 12.7436 21.1917 12.7435 21.1917 12.7435L12.3517 21.5835C12.1565 21.7788 11.8399 21.7788 11.6446 21.5835L2.80461 12.7435C0.460963 10.3999 0.460963 6.60009 2.80461 4.25644C5.14826 1.91279 8.94807 1.91279 11.2917 4.25644L11.9982 4.96289L12.7046 4.25644C12.7046 4.25641 12.7046 4.25647 12.7046 4.25644ZM16.9482 3.49817C15.6217 3.49817 14.3496 4.02528 13.4118 4.96346L12.3517 6.02355C12.258 6.11732 12.1308 6.16999 11.9982 6.16999C11.8656 6.16999 11.7384 6.11732 11.6446 6.02355L10.5846 4.96355C8.63149 3.01042 5.46484 3.01042 3.51172 4.96355C1.55859 6.91667 1.55859 10.0833 3.51172 12.0364L11.9982 20.5229L20.4846 12.0364C21.4228 11.0987 21.95 9.82648 21.95 8.49999C21.95 7.17351 21.4229 5.90138 20.4847 4.96363C19.5469 4.02544 18.2747 3.49817 16.9482 3.49817Z"
                                    fill="#414141" />
                            </svg>
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
    if(carts.length < 0){
        localStorage.setItem(carts)
    }else{
        localStorage.removeItem(carts)
    }
    item.number = 1;
    carts.push(item)
    badge.textContent = carts.length
    localStorage.setItem("carts", JSON.stringify(carts));
    homeProducts(discount_product, sliceDiscountProducts)
    homeProducts(new_products, sliceNoDiscountProducts)
    homeProducts(bought_products, sliceBughtDiscountProducts)
    console.log(carts);
}
function increase(id) {
    carts = carts.map((el) => {
        if (el.id === id) {
            el.number += 1
        }
        return el
    })
    localStorage.setItem("carts", JSON.stringify(carts));
    homeProducts(discount_product, sliceDiscountProducts)
    homeProducts(new_products, sliceNoDiscountProducts)
    homeProducts(bought_products, sliceBughtDiscountProducts)
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
    localStorage.setItem("carts", JSON.stringify(carts));
    homeProducts(discount_product, sliceDiscountProducts)
    homeProducts(new_products, sliceNoDiscountProducts)
    homeProducts(bought_products, sliceBughtDiscountProducts)
}










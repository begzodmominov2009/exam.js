let search_products = document.querySelector(".search-products")



function searchProducts(content, data) {
    data.map((el) => {
        content.innerHTML += `
        <div
                        class="max-w-[130px] rounded-[4px] w-full cursor-pointer bg-[#F9F4E2] relative group overflow-hidden shadow-2xl">
                        <a href="./single.html">
                            <img class="w-full h-[80px] sm:h-[202px]" src=${el.images[0]} alt="img">
                        </a>
                        <div class="flex items-center justify-between pt-[4px]">
                            <div class="flex items-center justify-between w-full">
                                <p class="font-bold text-[12px] px-[8px] sm:text-[18px]">${el.price}₽</p>
                                 <p class="font-bold text-[12px] px-[8px] sm:text-[18px]">${el.price - el.price * el.discount / 100}₽</p>
                            </div>
                        </div>
                            <div class="flex items-center justify-between pt-[0px]">
                            <div>
                                <p class="text-[11px] px-[8px] sm:text-[14px]">${el.name}</p>
                            </div>
                        </div>
                        <div class="flex flex-col gap-[5px] sm:gap-[8px] pt-[2px]  sm:pt-[8px]">
                        <p class="text-[10px] sm:text-[16px] px-[8px] line-clamp-2">${el.description}</p>
                          ${el.rating === 5 ? `
                          <div class="flex gap-[4px] px-[8px] pt-[-0px]">
                            <img class="w-[9px] h-[9px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                            <img class="w-[9px] h-[9px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                            <img class="w-[9px] h-[9px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                            <img class="w-[9px] h-[9px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                            <img class="w-[9px] h-[9px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                           </div>
                           ` : el.rating === 4.5 ? `
                             <div class="flex gap-[4px] px-[8px] pt-[0px]">
                            <img class="w-[9px] h-[9px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                            <img class="w-[9px] h-[9px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                            <img class="w-[9px] h-[9px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                            <img class="w-[9px] h-[9px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                            <img class="w-[9px] h-[9px]" src="../assets/images/stars/yarm.svg" alt="star" />
                           </div>
                           `: el.rating === 4 ? `
                             <div class="flex gap-[4px] px-[8px] pt-[0px]">
                            <img class="w-[9px] h-[9px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                            <img class="w-[9px] h-[9px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                            <img class="w-[9px] h-[9px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                            <img class="w-[9px] h-[9px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                            <img class="w-[9px] h-[9px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                           </div>
                           
                           `: el.rating === 3.5 ? `
                              <div class="flex gap-[4px] px-[8px] pt-[0px]">
                            <img class="w-[9px] h-[9px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                            <img class="w-[9px] h-[9px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                            <img class="w-[9px] h-[9px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                            <img class="w-[9px] h-[9px]" src="../assets/images/stars/yarm.svg" alt="star" />
                            <img class="w-[9px] h-[9px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                           </div>
                           `: el.rating === 3 ? `
                             <div class="flex gap-[4px] px-[8px] pt-[0px]">
                            <img class="w-[9px] h-[9px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                            <img class="w-[9px] h-[9px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                            <img class="w-[9px] h-[9px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                            <img class="w-[9px] h-[9px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                            <img class="w-[9px] h-[9px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                           </div>
                           `: el.rating === 2.5 ? `
                            <div class="flex gap-[4px] px-[8px] pt-[0px]">
                            <img class="w-[9px] h-[9px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                            <img class="w-[9px] h-[9px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                            <img class="w-[9px] h-[9px]" src="../assets/images/stars/yarm.svg" alt="star" />
                            <img class="w-[9px] h-[9px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                            <img class="w-[9px] h-[9px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                           </div>
                           `: el.rating === 2 ? `
                           <div class="flex gap-[4px] px-[8px] pt-[0px]">
                            <img class="w-[9px] h-[9px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                            <img class="w-[9px] h-[9px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                            <img class="w-[9px] h-[9px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                            <img class="w-[9px] h-[9px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                            <img class="w-[9px] h-[9px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                           </div>
                           `: el.rating === 1.5 ? `
                            <div class="flex gap-[4px] px-[8px] pt-[0px]">
                            <img class="w-[9px] h-[9px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                            <img class="w-[9px] h-[9px]" src="../assets/images/stars/yarm.svg" alt="star" />
                            <img class="w-[9px] h-[9px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                            <img class="w-[9px] h-[9px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                            <img class="w-[9px] h-[9px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                           </div>
                           `: el.rating === 1 ? `
                            <div class="flex gap-[4px] px-[8px] pt-[0px]">
                            <img class="w-[9px] h-[9px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                            <img class="w-[9px] h-[9px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                            <img class="w-[9px] h-[9px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                            <img class="w-[9px] h-[9px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                            <img class="w-[9px] h-[9px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                           </div>
                           `: el.rating === 0.5 ? `
                           <div class="flex gap-[4px] px-[8px] pt-[1px]">
                            <img class="w-[9px] h-[9px]" src="../assets/images/stars/yarm.svg" alt="star" />
                            <img class="w-[9px] h-[9px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                            <img class="w-[9px] h-[9px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                            <img class="w-[9px] h-[9px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                            <img class="w-[9px] h-[9px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                           </div>
                           `: el.rating === 0 ? `
                            <div class="flex gap-[4px] px-[8px] pt-[0px]">
                            <img class="w-[9px] h-[9px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                            <img class="w-[9px] h-[9px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                            <img class="w-[9px] h-[9px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                            <img class="w-[9px] h-[9px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                            <img class="w-[9px] h-[9px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                           </div>
                           `: ""
                           }
                            <div class="px-[0px] sm:px-[8px]">
                            ${el.discount ? (
                           `  <span
                                class="absolute top-[6px] sm:top-[130px] xl:top-[150px] left-[6px] bg-[#FF6633] w-[28px] sm:w-[56px] h-[19px] sm:h-[32px] text-[10px] sm:text-[16px] flex items-center justify-center rounded-[5px] text-[white]">-${el.discount}%</span>`
                            ) : (
                            "")
                             }
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

searchProducts(search_products, products)

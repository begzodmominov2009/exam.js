let path = new URLSearchParams(location.search);
let id = path.get("id")
let item = products.filter((el) => el.id == id)
let singleMaps = document.querySelector(".single-maps")
let checkSingle = document.querySelector(".check-single")
let miniDesc = document.querySelector(".mini-desc")
let singleDesc = document.querySelector(".single-desc")
let singleRating = document.querySelector(".single-rating")
let carts = JSON.parse(localStorage.getItem("carts") || "[]");
let badge_2 = document.getElementById("badge-24")
let like = JSON.parse(localStorage.getItem("like") || "[]");
let like_badge_14 = document.getElementById("like-badge-14")
like_badge_14.textContent = like.length
badge_2.textContent = carts.length



item.map((el) => {
    singleMaps.innerHTML += `
    <div id="changes-img" class="hidden sm:flex flex flex-col gap-[15px]">
                            <div class="cursor-pointer group">
                                <img class="hover:scale-110 object-cover duration-400 w-[90px] h-[90px]" src=${el.images[0]}
                                    alt="item">
                                    
                            </div>
                            <div class="cursor-pointer group">
                                <img class="hover:scale-110 object-cover duration-400 w-[90px] h-[90px]" src=${el.images[1]}
                                    alt="item">
                            </div>
                            <div class="cursor-pointer group">
                                <img class="hover:scale-110 object-cover duration-400 w-[90px] h-[90px]" src=${el.images[2]}
                                    alt="item">
                            </div>
                            <div class="cursor-pointer group">
                                <img class="hover:scale-110 object-cover duration-400 w-[90px] h-[90px]" src=${el.images[3]}
                                    alt="item">
                            </div>
                        </div>
                        <div class="relative w-full  sm:w-[445px] h-[200px] sm:h-[400px]">
                            <img id="main-img" class="w-full h-full object-cover" src=${el.images[0]}
                                alt="item">
                        </div>
                        <div id="changes-img2"
                            class="flex sm:hidden items-center justify-between gap-[12px] overflow-x-scroll whitespace-nowrap">
                            <div class="cursor-pointer group max-w-[90px] h-[90px]  w-full">
                                <img class="hover:scale-110 duration-400 w-full" src=${el.images[0]}
                                    alt="item">
                            </div>
                            <div class="cursor-pointer group max-w-[90px] h-[90px]  w-full">
                                <img class="hover:scale-110 duration-400 w-full" src=${el.images[1]}
                                    alt="item">
                            </div>
                            <div class="cursor-pointer group max-w-[90px] h-[90px]  w-full">
                                <img class="hover:scale-110 duration-400 w-full" src=${el.images[2]}
                                    alt="item">
                            </div>
                            <div class="cursor-pointer group max-w-[90px] h-[90px]  w-full">
                                <img class="hover:scale-110 duration-400 w-full" src=${el.images[3]}
                                    alt="item">
                            </div>

                        </div>
  `
    checkSingle.innerHTML += `
       <div class=" flex items-end justify-between">
                            <div class="flex flex-col">
                                <p class="text-[18px] sm:text-[24px]">${el.price}₽</p>
                                <p class="text-[10px] text-[12px] text-[#BFBFBF]">Обычная цена</p>
                            </div>
                            <div class="flex flex-col gap-[0px]">
                                <p class="text-[26px] sm:text-[36px] font-bold">${(el.price - (el.price * 43.4 / 100)).toFixed(2)}₽</p>
                                <div class="flex items-center gap-[7px]">
                                    <p class="text-[10px] sm:text-[12px] text-[#BFBFBF]">С картой Северяночки</p>
                                    <svg class="w-[17px] sm:w-[20px] h-[17px] sm:h-[20px]" viewBox="0 0 24 24"
                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M1.5 12C1.5 6.20101 6.20101 1.5 12 1.5C17.799 1.5 22.5 6.20101 22.5 12C22.5 17.799 17.799 22.5 12 22.5C6.20101 22.5 1.5 17.799 1.5 12ZM12 2.5C6.75329 2.5 2.5 6.75329 2.5 12C2.5 17.2467 6.75329 21.5 12 21.5C17.2467 21.5 21.5 17.2467 21.5 12C21.5 6.75329 17.2467 2.5 12 2.5Z"
                                            fill="#414141" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M12 11.5C12.2761 11.5 12.5 11.7239 12.5 12V16C12.5 16.2761 12.2761 16.5 12 16.5C11.7239 16.5 11.5 16.2761 11.5 16V12C11.5 11.7239 11.7239 11.5 12 11.5Z"
                                            fill="#414141" />
                                        <path
                                            d="M13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8Z"
                                            fill="#414141" />
                                    </svg>

                                </div>
                            </div>
                        </div>
                        <div class="flex items-center justify-center pt-[16px]">
                            <button
                                class="flex items-center gap-[14px] border border-[#70C05B] max-w-[207px] sm:max-w-[277px] rounded-[4px] 
                          group hover:bg-[#FF6633] hover:border-none cursor-pointer transition duration-300 w-full py-[9px] justify-center">
                                <svg class="w-5 sm:w-8 h-5 sm:h-8 fill-[#70C05B] group-hover:fill-white transition duration-300"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M7.33325 28C7.33325 26.1591 8.82564 24.6667 10.6666 24.6667C12.5075 24.6667 13.9999 26.1591 13.9999 28C13.9999 29.841 12.5075 31.3333 10.6666 31.3333C8.82564 31.3333 7.33325 29.841 7.33325 28ZM10.6666 26C9.56202 26 8.66659 26.8954 8.66659 28C8.66659 29.1046 9.56202 30 10.6666 30C11.7712 30 12.6666 29.1046 12.6666 28C12.6666 26.8954 11.7712 26 10.6666 26Z" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M23.3333 28C23.3333 26.1591 24.8256 24.6667 26.6666 24.6667C28.5075 24.6667 29.9999 26.1591 29.9999 28C29.9999 29.841 28.5075 31.3333 26.6666 31.3333C24.8256 31.3333 23.3333 29.841 23.3333 28ZM26.6666 26C25.562 26 24.6666 26.8954 24.6666 28C24.6666 29.1046 25.562 30 26.6666 30C27.7712 30 28.6666 29.1046 28.6666 28C28.6666 26.8954 27.7712 26 26.6666 26Z" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M1.33341 0.666672C0.965225 0.666672 0.666748 0.965149 0.666748 1.33334C0.666748 1.70153 0.965225 2.00001 1.33341 2.00001H6.10743C7.11719 7.72197 8.13785 13.4191 8.99916 19.1611C9.24392 20.7929 10.6456 22 12.2956 22H25.813C27.4019 22 28.77 20.8785 29.0816 19.3204L31.0005 9.72557C31.2481 8.48799 30.3015 7.33334 29.0394 7.33334H9.54737C9.14342 7.33334 8.77071 7.45202 8.45923 7.65458L7.32327 1.21748C7.26705 0.89891 6.99024 0.666672 6.66675 0.666672H1.33341ZM8.88808 9.43223C8.82762 9.02916 9.13979 8.66667 9.54737 8.66667H29.0394C29.4601 8.66667 29.7756 9.05155 29.6931 9.46408L27.7741 19.0589C27.5872 19.9938 26.7663 20.6667 25.813 20.6667H12.2956C11.3056 20.6667 10.4646 19.9424 10.3177 18.9634L8.88808 9.43223Z" />
                                </svg>

                                <p
                                    class="text-[18px] sm:text-[24px] text-[#70C05B] group-hover:text-white transition duration-300">
                                    В корзину
                                </p>
                            </button>
                        </div>
                        <div class="pt-[28px] flex flex-col gap-[2px] sm:gap-[10px] pb-[16px]">
                            <div
                                class="flex items-center gap-[155px] sm:gap-[162px] w-full cursor-pointer duration-200 group hover:bg-[#F3F2F1] py-[4px] px-[5px] rounded-[4px]">
                                <p class="text-[12px]">Бренд</p>
                                <p class="text-[12px] font-bold">${el.brand}</p>
                            </div>
                            <div
                                class="flex items-center gap-[63px] sm:gap-[70px] w-full cursor-pointer duration-200 group hover:bg-[#F3F2F1] py-[4px] px-[5px] rounded-[4px]">
                                <p class="text-[12px]">Страна производителя</p>
                                <p class="text-[12px] font-bold">${el.origin}</p>
                            </div>
                            <div
                                class="flex items-center gap-[137px] sm:gap-[144px] w-full cursor-pointer duration-200 group hover:bg-[#F3F2F1] py-[4px] px-[5px] rounded-[4px]">
                                <p class="text-[12px]">Упаковка</p>
                                <p class="text-[12px] font-bold">180 г</p>
                            </div>
                        </div>
    `
    miniDesc.innerHTML += `
     <a class="whitespace-nowrap" href="./single.html">
                            <p class="text-[#8F8F8F] text-[12px]">${el.description}</p>
                        </a>
    `
    singleDesc.innerHTML += `
    <h1 class="text-[20px] font-bold py-[18px] sm:py-[24px] leading-150%">${el.description}</h1>
    `
    singleRating.innerHTML += `
                      <div>
                        <p class="text-[14px]">арт. ${el.art}</p>
                    </div>
                    <div class="flex items-center gap-[4px]">
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
                    <p class="text-[14px]">3 отзыва</p>
                    </div>
                    <div class="flex items-center gap-[8px]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M14.5 5C14.5 3.067 16.067 1.5 18 1.5C19.933 1.5 21.5 3.067 21.5 5C21.5 6.933 19.933 8.5 18 8.5C16.067 8.5 14.5 6.933 14.5 5ZM18 2.5C16.6193 2.5 15.5 3.61929 15.5 5C15.5 6.38071 16.6193 7.5 18 7.5C19.3807 7.5 20.5 6.38071 20.5 5C20.5 3.61929 19.3807 2.5 18 2.5Z"
                                fill="#414141" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M2.5 12C2.5 10.067 4.067 8.5 6 8.5C7.933 8.5 9.5 10.067 9.5 12C9.5 13.933 7.933 15.5 6 15.5C4.067 15.5 2.5 13.933 2.5 12ZM6 9.5C4.61929 9.5 3.5 10.6193 3.5 12C3.5 13.3807 4.61929 14.5 6 14.5C7.38071 14.5 8.5 13.3807 8.5 12C8.5 10.6193 7.38071 9.5 6 9.5Z"
                                fill="#414141" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M14.5 19C14.5 17.067 16.067 15.5 18 15.5C19.933 15.5 21.5 17.067 21.5 19C21.5 20.933 19.933 22.5 18 22.5C16.067 22.5 14.5 20.933 14.5 19ZM18 16.5C16.6193 16.5 15.5 17.6193 15.5 19C15.5 20.3807 16.6193 21.5 18 21.5C19.3807 21.5 20.5 20.3807 20.5 19C20.5 17.6193 19.3807 16.5 18 16.5Z"
                                fill="#414141" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M8.15792 13.2583C8.29695 13.0197 8.60307 12.939 8.84166 13.078L15.6717 17.058C15.9103 17.197 15.991 17.5031 15.8519 17.7417C15.7129 17.9803 15.4068 18.061 15.1682 17.922L8.33819 13.942C8.0996 13.803 8.01889 13.4969 8.15792 13.2583Z"
                                fill="#414141" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M15.8418 6.25799C15.981 6.49649 15.9004 6.80266 15.6619 6.94184L8.84194 10.9218C8.60344 11.061 8.29727 10.9805 8.15808 10.742C8.0189 10.5035 8.09941 10.1973 8.33791 10.0582L15.1579 6.07816C15.3964 5.93897 15.7026 6.01948 15.8418 6.25799Z"
                                fill="#414141" />
                        </svg>
                        <p class="text-[12px]">Поделиться</p>
                    </div>
                    <div class="flex items-center gap-[8px]">
                       ${like.find((item) => item.id === el.id) ? `<svg onClick="removeTolikes(${el.id})" 
                    class="bg-[#FF6633] p-[3px] rounded-[50%] sm:rounded-[4px]" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffff">
                    <path d="M440-501Zm0 381L313-234q-72-65-123.5-116t-85-96q-33.5-45-49-87T40-621q0-94 63-156.5T260-840q52 0 99 22t81 62q34-40 81-62t99-22q84 0 153 59t69 160q0 14-2 29.5t-6 31.5h-85q5-18 8-34t3-30q0-75-50-105.5T620-760q-51 0-88 27.5T463-660h-46q-31-45-70.5-72.5T260-760q-57 0-98.5 39.5T120-621q0 33 14 67t50 78.5q36 44.5 98 104T440-228q26-23 61-53t56-50l9 9 19.5 19.5L605-283l9 9q-22 20-56 49.5T498-172l-58 52Zm160-280v-80h320v80H600Z"/>
                    </svg>` : `<svg
                    onClick="addToLikes(${el.id})"
                    class=" bg-[#F3F2F1] p-[3px] rounded-[50%] sm:rounded-[4px]" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f#1f1f1f#1f1f1f"><path d="M440-501Zm0 381L313-234q-72-65-123.5-116t-85-96q-33.5-45-49-87T40-621q0-94 63-156.5T260-840q52 0 99 22t81 62q34-40 81-62t99-22q81 0 136 45.5T831-680h-85q-18-40-53-60t-73-20q-51 0-88 27.5T463-660h-46q-31-45-70.5-72.5T260-760q-57 0-98.5 39.5T120-621q0 33 14 67t50 78.5q36 44.5 98 104T440-228q26-23 61-53t56-50l9 9 19.5 19.5L605-283l9 9q-22 20-56 49.5T498-172l-58 52Zm280-160v-120H600v-80h120v-120h80v120h120v80H800v120h-80Z"/></svg>`
                     }
                        <p class="text-[12px]">В избраное</p>
                    </div>
    `
})
let changesImg = document.getElementById("changes-img")
let mainImg = document.getElementById("main-img")
let changesImg2 = document.getElementById("changes-img2")

changesImg.addEventListener("click", (e) => {
    mainImg.src = e.target.src
})
changesImg2.addEventListener("click", (e) => {
    mainImg.src = e.target.src
})




let carts = JSON.parse(localStorage.getItem("carts") || "[]");
let cartMap = document.querySelector(".cart-map")
let badge_111 = document.getElementById("badge-111")
let badge_11 = document.getElementById("badge-11")
badge_11.textContent = carts.length;
badge_111.textContent = carts.length



function showCart(content, data) {
    data.map((el) => {
        content.innerHTML += `
                    <div
                            class="max-w-[1506px] w-full py-[8px] px-[8px]  bg-[white] flex items-center justify-between">
                            <div class="flex items-start gap-[5px] sm:gap-[10px] ">
                                <input class="w-[16px] h-[16px]" type="checkbox">
                                <img class="max-w-[80px] h-[60px]" src=${el.images[0]} alt="img">
                                <div class="flex flex-col gap-[5px]">
                                    <p class="line-clamp-2 sm:line-clamp-1 text-[12px] sm:text-[16px]">${el.description}»</p>
                                    <div class="flex items-center gap-[8px]">
                                        <p class="text-[12px] font-bold">${el.price - el.price * el.discount / 100}₽</p>
                                        <p class="text-[#606060] text-[12px]">за шт.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="grid grid-cols-1 sm:flex flex-col items-center gap-[15px] sm:gap-[5px]">
                                  <div>
                                    <p
                                        class="font-bold text-[12px] sm:text-[18px] pl-[7px] sm:pl-[0px] whitespace-nowrap">
                                        ${el.price * el.number - el.price * el.discount / 100}₽</p>
                                </div>
                                <div
                                    class="bg-[#70C05B] cursor-pointer max-w-[80px] flex items-center gap-[7px] justify-center rounded-[4px] p-[4px] sm:p-[8px] w-[70px] sm:w-[140px] w-full">
                                   <button
                                   class="cursor-pointer"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M4.5 12C4.5 11.7239 4.72386 11.5 5 11.5H19C19.2761 11.5 19.5 11.7239 19.5 12C19.5 12.2761 19.2761 12.5 19 12.5H5C4.72386 12.5 4.5 12.2761 4.5 12Z"
                                            fill="white" />
                                    </svg></button>
                                    <span class="text-[white] text-[14px] sm:text-[16px]">${carts.find((item) => item.id === el.id).number
            }</span>
                                    <button
                                    class="cursor-pointer"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M12 4.5C12.2761 4.5 12.5 4.72386 12.5 5V19C12.5 19.2761 12.2761 19.5 12 19.5C11.7239 19.5 11.5 19.2761 11.5 19V5C11.5 4.72386 11.7239 4.5 12 4.5Z"
                                            fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M4.5 12C4.5 11.7239 4.72386 11.5 5 11.5H19C19.2761 11.5 19.5 11.7239 19.5 12C19.5 12.2761 19.2761 12.5 19 12.5H5C4.72386 12.5 4.5 12.2761 4.5 12Z"
                                            fill="white" />
                                    </svg></button>
                                </div>
                            </div>
                        </div>
    `
    })
}
showCart(cartMap, carts)





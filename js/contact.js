let carts = JSON.parse(localStorage.getItem("carts") || "[]");
localStorage.setItem("carts", JSON.stringify(carts));
let badge_22 = document.getElementById("badge-22")
let badge_222 = document.getElementById("badge-222")
badge_22.textContent = carts.length
badge_222.textContent = carts.length

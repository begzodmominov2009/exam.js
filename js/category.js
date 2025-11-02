let carts = JSON.parse(localStorage.getItem("carts") || "[]");
localStorage.setItem("carts", JSON.stringify(carts));
let badge_33 = document.getElementById("badge-33")
let badge_333 = document.getElementById("badge-333")
badge_33.textContent = carts.length
badge_333.textContent = carts.length

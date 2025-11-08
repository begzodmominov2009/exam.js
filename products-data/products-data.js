const products = [
  { id: 1, name: "Apple", category: "Фрукты", description: "A frozen dessert made from cream, sugar, and flavorings, available in a variety of flavors.", price: 89, rating: 5.0, discount: 0, brand: "FreshFarm", origin: "USA", art: 371001, images: ["../assets/images/products/1.png", "../assets/images/products/1_2.png", "../assets/images/products/1_3.png", "../assets/images/products/1_4.png"] },
  { id: 2, name: "Banana", category: "Фрукты", description: "A long, curved fruit with a yellow skin and sweet, creamy white flesh.", price: 71, rating: 5.0, discount: 20, brand: "Tropico", origin: "Ecuador", art: 371002, images: ["../assets/images/products/2.png", "../assets/images/products/2_2.png", "../assets/images/products/2_3.png", "../assets/images/products/2_4.png"] },
  { id: 3, name: "Bread", category: "Выпечка", description: "A staple food made from flour, water, and yeast, baked into a loaf.", price: 88, rating: 5.0, discount: 20, brand: "Baker's Delight", origin: "France", art: 371003, images: ["../assets/images/products/3.png", "../assets/images/products/3_2.png", "../assets/images/products/3_3.png", "../assets/images/products/3_4.png"] },
  { id: 4, name: "Broccoli", category: "Овощи", description: "A green vegetable with a tree-like appearance, known for its high nutrient content.", price: 94, rating: 4.5, discount: 20, brand: "GreenLeaf", origin: "Italy", art: 371004, images: ["../assets/images/products/4.png", "../assets/images/products/4_2.png", "../assets/images/products/4_3.png", "../assets/images/products/4_4.png"] },
  { id: 5, name: "Carrot", category: "Овощи", description: "A root vegetable with a crunchy texture and a sweet, earthy flavor.", price: 82, rating: 5.0, discount: 20, brand: "RootFarm", origin: "Netherlands", art: 371005, images: ["../assets/images/products/5.png", "../assets/images/products/5_2.png", "../assets/images/products/5_3.png", "../assets/images/products/5_4.png"] },
  { id: 6, name: "Cheese", category: "Молочные продукты", description: "A dairy product made from milk, with a variety of textures and flavors.", price: 91, rating: 3.5, discount: 50, brand: "Cheesy", origin: "Switzerland", art: 371006, images: ["../assets/images/products/6.png", "../assets/images/products/6_2.png", "../assets/images/products/6_3.png", "../assets/images/products/6_4.png"] },
  { id: 7, name: "Chicken", category: "Мясо", description: "A type of poultry, often used as a source of protein in meals.", price: 68, rating: 3.5, discount: 20, brand: "FarmHouse", origin: "USA", art: 371007, images: ["../assets/images/products/7.png", "../assets/images/products/7_2.png", "../assets/images/products/7_3.png", "../assets/images/products/7_4.png"] },
  { id: 8, name: "Chocolate", category: "Десерт", description: "A sweet food made from cacao beans, used in a variety of desserts and confections.", price: 61, rating: 4.5, discount: 20, brand: "ChocoLand", origin: "Belgium", art: 371008, images: ["../assets/images/products/8.png", "../assets/images/products/8_2.png", "../assets/images/products/8_3.png", "../assets/images/products/8_4.png"] },
  { id: 9, name: "Coffee", category: "Десерт", description: "A dark, bitter beverage made from roasted coffee beans, typically used as a pick-me-up.", price: 98, rating: 5.0, discount: 20, brand: "JavaBean", origin: "Colombia", art: 371009, images: ["../assets/images/products/9.png", "../assets/images/products/9_2.png", "../assets/images/products/9_3.png", "../assets/images/products/9_4.png"] },
  { id: 10, name: "Egg", category: "Молочные продукты", description: "A oval-shaped reproductive body produced by birds, often used as a source of protein in meals.", price: 79, rating: 4.5, discount: 0, brand: "FarmFresh", origin: "USA", art: 371010, images: ["../assets/images/products/10.png", "../assets/images/products/10_2.png", "../assets/images/products/10_3.png", "../assets/images/products/10_4.png"] },
  { id: 11, name: "Fish", category: "Мясо", description: "A type of seafood, known for its omega-3 fatty acids and high protein content.", price: 89, rating: 3.5, discount: 50, brand: "SeaDelight", origin: "Norway", art: 371011, images: ["../assets/images/products/11.png", "../assets/images/products/11_2.png", "../assets/images/products/11_3.png", "../assets/images/products/11_4.png"] },
  { id: 12, name: "Grapes", category: "Фрукты", description: "A small, sweet fruit that grows in clusters, often used in wine-making.", price: 61, rating: 4.0, discount: 20, brand: "Vineyard", origin: "Italy", art: 371012, images: ["../assets/images/products/12.png", "../assets/images/products/12_2.png", "../assets/images/products/12_3.png", "../assets/images/products/12_4.png"] },
  { id: 13, name: "Hamburger", category: "Фастфуд", description: "A sandwich made with a patty of ground beef, served on a bun with various toppings.", price: 87, rating: 5.0, discount: 0, brand: "BurgerKing", origin: "USA", art: 371013, images: ["../assets/images/products/13.png", "../assets/images/products/13_2.png", "../assets/images/products/13_3.png", "../assets/images/products/13_4.png"] },
  { id: 14, name: "Hot dog", category: "Фастфуд", description: "A type of sausage served in a long roll, often used as a quick and convenient food.", price: 84, rating: 4.5, discount: 50, brand: "Franky's", origin: "Germany", art: 371014, images: ["../assets/images/products/14.png", "../assets/images/products/14_2.png", "../assets/images/products/14_3.png", "../assets/images/products/14_4.png"] },
  { id: 15, name: "Ice cream", category: "Десерт", description: "A frozen dessert made from cream, sugar, and flavorings, available in a variety of flavors.", price: 68, rating: 4.5, discount: 0, brand: "ColdTreats", origin: "Italy", art: 371015, images: ["../assets/images/products/15.png", "../assets/images/products/15_2.png", "../assets/images/products/15_3.png", "../assets/images/products/15_4.png"] },
  { id: 16, name: "Lemon", category: "Фрукты", description: "A yellow citrus fruit with a tart, acidic flavor, often used in cooking and baking.", price: 74, rating: 3.5, discount: 0, brand: "CitrusFarm", origin: "Spain", art: 371016, images: ["../assets/images/products/16.png", "../assets/images/products/16_2.png", "../assets/images/products/16_3.png", "../assets/images/products/16_4.png"] },
  { id: 17, name: "Eggs", category: "Молочные продукты", description: "Eggs are oval-shaped reproductive structures produced by female birds and some reptiles.", price: 70, rating: 4.5, discount: 50, brand: "GoldenEgg", origin: "USA", art: 371017, images: ["../assets/images/products/10.png", "../assets/images/products/10_2.png", "../assets/images/products/10_3.png", "../assets/images/products/10_4.png"] },
  { id: 18, name: "Honey", category: "Молочные продукты", description: "Honey is a sweet, sticky liquid made by bees from the nectar of flowers.", price: 87, rating: 4.0, discount: 0, brand: "BeeSweet", origin: "New Zealand", art: 371018, images: ["../assets/images/products/18.png", "../assets/images/products/18_2.png", "../assets/images/products/18_3.png", "../assets/images/products/18_4.png"] },
  { id: 19, name: "Ice Cream", category: "Десерт", description: "Ice cream is a frozen dessert made from cream, sugar, and flavorings.", price: 83, rating: 4.5, discount: 0, brand: "CreamyDelight", origin: "USA", art: 371019, images: ["../assets/images/products/15.png", "../assets/images/products/15_2.png", "../assets/images/products/15_3.png", "../assets/images/products/15_4.png"] },
  { id: 20, name: "Jelly", category: "Фрукты", description: "Jelly is a sweet spread made from fruit juice and sugar, often used as a topping for toast or pastries.", price: 76, rating: 5.0, discount: 0, brand: "FruitSpread", origin: "USA", art: 371020, images: ["../assets/images/products/20.png", "../assets/images/products/20_2.png", "../assets/images/products/20_3.png", "../assets/images/products/20_4.png"] },
  { id: 21, name: "Ketchup", category: "Молочные продукты", description: "Ketchup is a tangy sauce made from tomatoes, vinegar, sugar, and spices.", price: 77, rating: 5.0, discount: 0, brand: "TomatoKing", origin: "USA", art: 371021, images: ["../assets/images/products/21.png", "../assets/images/products/21_2.png", "../assets/images/products/21_3.png", "../assets/images/products/21_4.png"] },
  { id: 22, name: "Mango", category: "Фрукты", description: "Mangoes are juicy, sweet tropical fruits with a fleshy interior and a large, oblong seed in the center.", price: 80, rating: 5.0, discount: 20, brand: "Tropicana", origin: "India", art: 371022, images: ["../assets/images/products/22.png", "../assets/images/products/22_2.png", "../assets/images/products/22_3.png", "../assets/images/products/22_4.png"] },
  { id: 23, name: "Noodles", category: "Мясо", description: "Noodles are a type of pasta made from wheat flour and water, often used in Asian cuisine.", price: 93, rating: 3.5, discount: 20, brand: "AsiaFood", origin: "China", art: 371023, images: ["../assets/images/products/23.png", "../assets/images/products/23_2.png", "../assets/images/products/23_3.png", "../assets/images/products/23_4.png"] },
  { id: 24, name: "Oatmeal", category: "Завтрак", description: "Oatmeal is a type of porridge made from oats that is often served for breakfast.", price: 94, rating: 4.5, discount: 0, brand: "OatKing", origin: "USA", art: 371024, images: ["../assets/images/products/24.png", "../assets/images/products/24_2.png", "../assets/images/products/24_3.png", "../assets/images/products/24_4.png"] },
  { id: 25, name: "Bacon", category: "Завтрак", description: "Bacon is a popular breakfast food made from cured pork belly, it is newly delivered.", price: 71, rating: 3.5, discount: 20, brand: "Porky", origin: "USA", art: 371025, images: ["../assets/images/products/25.png", "../assets/images/products/25_2.png", "../assets/images/products/25_3.png", "../assets/images/products/25_4.png"] },
  { id: 26, name: "Pancakes", category: "Завтрак", description: "Pancakes are a popular breakfast food made from flour, eggs, and milk.", price: 63, rating: 4.0, discount: 0, brand: "MorningDelight", origin: "USA", art: 371026, images: ["../assets/images/products/26.png", "../assets/images/products/26_2.png", "../assets/images/products/26_3.png", "../assets/images/products/26_4.png"] },
  { id: 27, name: "Waffles", category: "Завтрак", description: "Waffles are a type of breakfast food made from batter cooked in a waffle iron.", price: 97, rating: 4.5, discount: 20, brand: "WaffleHouse", origin: "Belgium", art: 371027, images: ["../assets/images/products/27.png", "../assets/images/products/27_2.png", "../assets/images/products/27_3.png", "../assets/images/products/27_4.png"] },
  { id: 28, name: "Fried Rice", category: "Обед", description: "Fried Rice is a type of rice dish that is stir-fried in a pan with oil and other ingredients.", price: 81, rating: 4.0, discount: 20, brand: "RiceMaster", origin: "China", art: 371028, images: ["../assets/images/products/28.png", "../assets/images/products/28_2.png", "../assets/images/products/28_3.png", "../assets/images/products/28_4.png"] },
  { id: 29, name: "Spaghetti", category: "Обед", description: "Spaghetti is a type of pasta made from wheat flour and water, usually served with sauce.", price: 96, rating: 3.0, discount: 50, brand: "PastaWorld", origin: "Italy", art: 371029, images: ["../assets/images/products/29.png", "../assets/images/products/29_2.png", "../assets/images/products/29_3.png", "../assets/images/products/29_4.png"] },
  { id: 30, name: "Pizza", category: "Обед", description: "Pizza is a popular dish made from dough, sauce, cheese, and toppings.", price: 95, rating: 4.0, discount: 0, brand: "PizzaKing", origin: "Italy", art: 371030, images: ["../assets/images/products/30.png", "../assets/images/products/30_2.png", "../assets/images/products/30_3.png", "../assets/images/products/30_4.png"] },
  { id: 31, name: "Grilled Cheese", category: "Обед", description: "A grilled cheese sandwich is a hot sandwich made from cheese and bread.", price: 100, rating: 5.0, discount: 50, brand: "CheeseLovers", origin: "USA", art: 371031, images: ["../assets/images/products/31.png", "../assets/images/products/31_2.png", "../assets/images/products/31_3.png", "../assets/images/products/31_4.png"] },
  { id: 32, name: "Steak", category: "Ужин", description: "Steak is a popular dinner dish made from a cut of beef that is usually grilled or pan-fried.", price: 63, rating: 4.5, discount: 20, brand: "MeatHouse", origin: "Argentina", art: 371032, images: ["../assets/images/products/32.png", "../assets/images/products/32_2.png", "../assets/images/products/32_3.png", "../assets/images/products/32_4.png"] },
  { id: 33, name: "Salmon", category: "Ужин", description: "Salmon is a type of fish that is often grilled or baked and served as a main course.", price: 82, rating: 4.5, discount: 20, brand: "SeaFresh", origin: "Norway", art: 371033, images: ["../assets/images/products/33.png", "../assets/images/products/33_2.png", "../assets/images/products/33_3.png", "../assets/images/products/33_4.png"] },
  { id: 34, name: "Chicken Alfredo", category: "Ужин", description: "Chicken Alfredo is a pasta dish made with chicken, alsjfkdlkasdfhlkjh.", price: 94, rating: 4.0, discount: 20, brand: "PastaHouse", origin: "Italy", art: 371034, images: ["../assets/images/products/34.png", "../assets/images/products/34_2.png", "../assets/images/products/34_3.png", "../assets/images/products/34_4.png"] },
  { id: 35, name: "Lasagna", category: "Ужин", description: "Lasagna is a type of pasta dish made with layers of pasta, sauce, cheese, and meat or vegetables.", price: 70, rating: 1.0, discount: 0, brand: "PastaWorld", origin: "Italy", art: 371035, images: ["../assets/images/products/35.png", "../assets/images/products/35_2.png", "../assets/images/products/35_3.png", "../assets/images/products/35_4.png"] },
  { id: 36, name: "Chocolate Chip", category: "Десерт", description: "Chocolate Chip Cookies are a type of cookie made from flour, sugar, butter, and chocolate chips.", price: 98, rating: 3.5, discount: 0, brand: "CookieTime", origin: "USA", art: 371036, images: ["../assets/images/products/36.png", "../assets/images/products/36_2.png", "../assets/images/products/36_3.png", "../assets/images/products/36_4.png"] },
  // {
  //   id: 37, name: "Avocado", category: "Фрукты", description: "A long, curved fruit with a yellow skin and sweet, creamy white flesh.", price: 92, rating: 4.5, discount: 10, brand: "Tropico", origin: "Mexico", art: 372037, images: [
  //     "../assets/images/products/37_2.jpg",
  //     "../assets/images/products/37_3.jpg",
  //     "../assets/images/products/37_4.webp",
  //   ]
  // },
  // {
  //   id: 38, name: "Pineapple", category: "Фрукты", description: "A tropical fruit with sweet and tangy yellow flesh.", price: 85, rating: 4.5, discount: 15, brand: "Tropico", origin: "Thailand", art: 372038, images: [
  //     "../assets/images/products/38_1.webp",
  //     "../assets/images/products/38_2.jpg",
  //     "../assets/images/products/38_3.webp",
  //     "../assets/images/products/38_4.webp",
  //   ]
  // },
  // {
  //   id: 39, name: "Peach", category: "Фрукты", description: "A soft, juicy fruit with fuzzy skin and sweet taste.", price: 80, rating: 4.0, discount: 5, brand: "FreshFarm", origin: "Spain", art: 372039, images: [
  //     "../assets/images/products/39_1.webp",
  //     "../assets/images/products/39_2.webp",
  //     "../assets/images/products/39_3.webp",
  //     "../assets/images/products/39_4.jfif",
  //   ]
  // },
  // {
  //   id: 40, name: "Cucumber", category: "Овощи", description: "A refreshing green vegetable often used in salads.", price: 60, rating: 5.0, discount: 10, brand: "GreenLeaf", origin: "Turkey", art: 372040, images: [
  //     "../assets/images/products/40_1.avif",
  //     "../assets/images/products/40_2.webp",
  //     "../assets/images/products/40_3.webp",
  //     "../assets/images/products/40_4.webp",
  //   ]
  // },
  // {
  //   id: 41, name: "Tomato", category: "Овощи", description: "A juicy red vegetable used in salads, sauces and cooking.", price: 70, rating: 3.5, discount: 5, brand: "RedFarm", origin: "Italy", art: 372041, images: [
  //     "../assets/images/products/41_1.webp",
  //     "../assets/images/products/41_2.webp",
  //     "../assets/images/products/41_3.webp",
  //     "../assets/images/products/41_4.webp",
  //   ]
  // },
  // {
  //   id: 42, name: "Spinach", category: "Овощи", description: "A green leafy vegetable, rich in iron and vitamins.", price: 65, rating: 3.0, discount: 0, brand: "GreenLeaf", origin: "USA", art: 372042, images: [
  //     "../assets/images/products/42_1.avif",
  //     "../assets/images/products/42_2.webp",
  //     "../assets/images/products/42_3.webp",
  //     "../assets/images/products/42_4.webp",
  //   ]
  // },
  // {
  //   id: 43, name: "Blueberry", category: "Фрукты", description: "A small, sweet, blue-purple fruit packed with antioxidants.", price: 78, rating: 1.5, discount: 18, brand: "BerryFarm", origin: "Canada", art: 372043, images: [
  //     "../assets/images/products/43_1.webp",
  //     "../assets/images/products/43_2.webp",
  //     "../assets/images/products/43_3.webp",
  //     "../assets/images/products/43_4.webp",
  //   ]
  // },
  // {
  //   id: 44, name: "Strawberry", category: "Фрукты", description: "A red, juicy fruit that is sweet and slightly tart.", price: 80, rating: 2.5, discount: 10, brand: "BerryFarm", origin: "USA", art: 372044, images: [
  //     "../assets/images/products/44_1.webp",
  //     "../assets/images/products/44_2.webp",
  //     "../assets/images/products/44_3.webp",
  //     "../assets/images/products/44_4.webp",
  //   ]
  // },
  // {
  //   id: 45, name: "Bread", category: "Выпечка", description: "A bulb vegetable with a strong flavor, used in many dishes.", price: 55, rating: 5.0, discount: 0, brand: "RootFarm", origin: "India", art: 372045, images: [
  //     "../assets/images/products/45_1.webp",
  //     "../assets/images/products/45_2.avif",
  //     "../assets/images/products/45_3.jgp",
  //     "../assets/images/products/45_4.webp",
  //   ]
  // },
  // {
  //   id: 46, name: "Bread", category: "Выпечка", description: "A strong-flavored bulb used for cooking and seasoning.", price: 50, rating: 1.5, discount: 15, brand: "RootFarm", origin: "China", art: 372046, images: [
  //     "../assets/images/products/46_1.webp",
  //     "../assets/images/products/45_2.avif",
  //     "../assets/images/products/45_3.jgp",
  //     "../assets/images/products/45_4.webp",
  //   ]
  // },
  // {
  //   id: 47, name: "Potato", category: "Овощи", description: "A starchy tuber used in many dishes.", price: 48, rating: 4.0, discount: 0, brand: "RootFarm", origin: "USA", art: 372047, images: [
  //     "../assets/images/products/47_1.webp",
  //     "../assets/images/products/47_2.webp",
  //     "../assets/images/products/47_3.webp",
  //     "../assets/images/products/47_4.webp",
  //   ]
  // },
  // {
  //   id: 48, name: "Mushroom", category: "Овощи", description: "A fungi used in cooking, rich in flavor.", price: 60, rating: 4.5, discount: 0, brand: "FungiFarm", origin: "Poland", art: 372048, images: [
  //     "../assets/images/products/48_1.webp",
  //     "../assets/images/products/48_2.jpg",
  //     "../assets/images/products/48_3.webp",
  //     "../assets/images/products/48_4.webp",
  //   ]
  // },
  // {
  //   id: 49, name: "Bell Pepper", category: "Овощи", description: "A small, sweet fruit that grows in clusters, often used in wine-making.", price: 65, rating: 3.5, discount: 10, brand: "GreenLeaf", origin: "Italy", art: 372049, images: [
  //     "../assets/images/products/49_1.webp",
  //     "../assets/images/products/49_2.jpg",
  //     "../assets/images/products/49_3.jfif",
  //     "../assets/images/products/49_4.webp",
  //   ]
  // },
  // {
  //   id: 50, name: "Watermelon", category: "Фрукты", description: "A large, juicy fruit with green skin and red flesh.", price: 90, rating: 5.0, discount: 20, brand: "FreshFarm", origin: "Brazil", art: 372050, images: [
  //     "../assets/images/products/50_1.webp",
  //     "../assets/images/products/50_2.webp",
  //     "../assets/images/products/50_3.webp",
  //     "../assets/images/products/50_4.jfif",
  //   ]
  // },
  // {
  //   id: 51, name: "Cabbage", category: "Овощи", description: "A leafy vegetable, often used in salads and stews.", price: 55, rating: 4.0, discount: 50, brand: "GreenLeaf", origin: "Germany", art: 372051, images: [
  //     "../assets/images/products/51_1.webp",
  //     "../assets/images/products/51_2.webp",
  //     "../assets/images/products/51_3.webp",
  //     "../assets/images/products/51_4.jfif",
  //   ]
  // },
  // {
  //   id: 52, name: "Lettuce", category: "Овощи", description: "A leafy green vegetable used in salads.", price: 50, rating: 4.0, discount: 0, brand: "GreenLeaf", origin: "USA", art: 372052, images: [
  //     "../assets/images/products/52_1.webp",
  //     "../assets/images/products/52_2.webp",
  //     "../assets/images/products/52_3.webp",
  //     "../assets/images/products/52_4.jfif",
  //   ]
  // },
]

const descriptionProducts = [
  {
    id: 1,
    url: "../assets/images/descProducts/1_1.png",
    data: "05.03.2021",
    title: "Режим использования масок и перчаток на территории магазинов",
    description: "Подробная информация о режимах использования масок и перчаток на территории магазинов ЛЕНТА. Информация обновляется каждый будний день.",
  },
  {
    id: 2,
    url: "../assets/images/descProducts/2_1.png",
    data: "05.03.2021",
    title: "Режим использования масок и перчаток на территории магазинов",
    description: "Подробная информация о режимах использования масок и перчаток на территории магазинов ЛЕНТА. Информация обновляется каждый будний день.",
  },
  {
    id: 3,
    url: "../assets/images/descProducts/3_1.png",
    data: "05.03.2021",
    title: "ЗОЖ или ФАСТФУД. А вы на чьей стороне? Голосуем!",
    description: "Подробная информация о режимах использования масок и перчаток на территории магазинов ЛЕНТА. Информация обновляется каждый будний день.",
  },


]

const maps = [
  {
    description_1: "п.Щельяюр",
    description_2: "д.Вертеп",
    description_3: "с.Краснобор",
    description_4: "д.Диюр",
    url: "../assets/home/maps.png",
  }

]

const specialCard = [
  {
    title: "Оформите карту «Северяночка»",
    description: "И получайте бонусы при покупке в магазинах и на сайте",
    url: "../assets/home/special_1.png"
  },
  {
    title: "Покупайте акционные товары",
    description: "И получайте вдвое больше бонусов",
    url: "../assets/home/special_2.png"
  }
]

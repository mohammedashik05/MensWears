const products = [
  {
    "id": 1,
    "name": "Watch Model 1",
    "price": 1049,
    "category": "watch",
    "rating": 3.6,
    "description": "Watch Model 1 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/watch.jpg"
  },
  {
    "id": 2,
    "name": "Watch Model 2",
    "price": 1099,
    "category": "watch",
    "rating": 3.7,
    "description": "Watch Model 2 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/watch.jpg"
  },
  {
    "id": 3,
    "name": "Watch Model 3",
    "price": 1149,
    "category": "watch",
    "rating": 3.8,
    "description": "Watch Model 3 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/watch.jpg"
  },
  {
    "id": 4,
    "name": "Watch Model 4",
    "price": 1199,
    "category": "watch",
    "rating": 3.9,
    "description": "Watch Model 4 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/watch.jpg"
  },
  {
    "id": 5,
    "name": "Watch Model 5",
    "price": 1249,
    "category": "watch",
    "rating": 3.5,
    "description": "Watch Model 5 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/watch.jpg"
  },
  {
    "id": 6,
    "name": "Watch Model 6",
    "price": 1299,
    "category": "watch",
    "rating": 3.6,
    "description": "Watch Model 6 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/watch.jpg"
  },
  {
    "id": 7,
    "name": "Watch Model 7",
    "price": 1349,
    "category": "watch",
    "rating": 3.7,
    "description": "Watch Model 7 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/watch.jpg"
  },
  {
    "id": 8,
    "name": "Watch Model 8",
    "price": 1399,
    "category": "watch",
    "rating": 3.8,
    "description": "Watch Model 8 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/watch.jpg"
  },
  {
    "id": 9,
    "name": "Watch Model 9",
    "price": 1449,
    "category": "watch",
    "rating": 3.9,
    "description": "Watch Model 9 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/watch.jpg"
  },
  {
    "id": 10,
    "name": "Watch Model 10",
    "price": 1499,
    "category": "watch",
    "rating": 3.5,
    "description": "Watch Model 10 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/watch.jpg"
  },
  {
    "id": 11,
    "name": "Watch Model 11",
    "price": 1549,
    "category": "watch",
    "rating": 3.6,
    "description": "Watch Model 11 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/watch.jpg"
  },
  {
    "id": 12,
    "name": "Watch Model 12",
    "price": 1599,
    "category": "watch",
    "rating": 3.7,
    "description": "Watch Model 12 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/watch.jpg"
  },
  {
    "id": 13,
    "name": "Watch Model 13",
    "price": 1649,
    "category": "watch",
    "rating": 3.8,
    "description": "Watch Model 13 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/watch.jpg"
  },
  {
    "id": 14,
    "name": "Watch Model 14",
    "price": 1699,
    "category": "watch",
    "rating": 3.9,
    "description": "Watch Model 14 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/watch.jpg"
  },
  {
    "id": 15,
    "name": "Watch Model 15",
    "price": 1749,
    "category": "watch",
    "rating": 3.5,
    "description": "Watch Model 15 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/watch.jpg"
  },
  {
    "id": 16,
    "name": "Shoes Model 1",
    "price": 1049,
    "category": "shoes",
    "rating": 3.6,
    "description": "Shoes Model 1 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shoes.jpg"
  },
  {
    "id": 17,
    "name": "Shoes Model 2",
    "price": 1099,
    "category": "shoes",
    "rating": 3.7,
    "description": "Shoes Model 2 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shoes.jpg"
  },
  {
    "id": 18,
    "name": "Shoes Model 3",
    "price": 1149,
    "category": "shoes",
    "rating": 3.8,
    "description": "Shoes Model 3 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shoes.jpg"
  },
  {
    "id": 19,
    "name": "Shoes Model 4",
    "price": 1199,
    "category": "shoes",
    "rating": 3.9,
    "description": "Shoes Model 4 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shoes.jpg"
  },
  {
    "id": 20,
    "name": "Shoes Model 5",
    "price": 1249,
    "category": "shoes",
    "rating": 3.5,
    "description": "Shoes Model 5 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shoes.jpg"
  },
  {
    "id": 21,
    "name": "Shoes Model 6",
    "price": 1299,
    "category": "shoes",
    "rating": 3.6,
    "description": "Shoes Model 6 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shoes.jpg"
  },
  {
    "id": 22,
    "name": "Shoes Model 7",
    "price": 1349,
    "category": "shoes",
    "rating": 3.7,
    "description": "Shoes Model 7 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shoes.jpg"
  },
  {
    "id": 23,
    "name": "Shoes Model 8",
    "price": 1399,
    "category": "shoes",
    "rating": 3.8,
    "description": "Shoes Model 8 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shoes.jpg"
  },
  {
    "id": 24,
    "name": "Shoes Model 9",
    "price": 1449,
    "category": "shoes",
    "rating": 3.9,
    "description": "Shoes Model 9 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shoes.jpg"
  },
  {
    "id": 25,
    "name": "Shoes Model 10",
    "price": 1499,
    "category": "shoes",
    "rating": 3.5,
    "description": "Shoes Model 10 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shoes.jpg"
  },
  {
    "id": 26,
    "name": "Shoes Model 11",
    "price": 1549,
    "category": "shoes",
    "rating": 3.6,
    "description": "Shoes Model 11 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shoes.jpg"
  },
  {
    "id": 27,
    "name": "Shoes Model 12",
    "price": 1599,
    "category": "shoes",
    "rating": 3.7,
    "description": "Shoes Model 12 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shoes.jpg"
  },
  {
    "id": 28,
    "name": "Shoes Model 13",
    "price": 1649,
    "category": "shoes",
    "rating": 3.8,
    "description": "Shoes Model 13 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shoes.jpg"
  },
  {
    "id": 29,
    "name": "Shoes Model 14",
    "price": 1699,
    "category": "shoes",
    "rating": 3.9,
    "description": "Shoes Model 14 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shoes.jpg"
  },
  {
    "id": 30,
    "name": "Shoes Model 15",
    "price": 1749,
    "category": "shoes",
    "rating": 3.5,
    "description": "Shoes Model 15 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shoes.jpg"
  },
  {
    "id": 31,
    "name": "Shirt Model 1",
    "price": 1049,
    "category": "shirt",
    "rating": 3.6,
    "description": "Shirt Model 1 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shirt.jpg"
  },
  {
    "id": 32,
    "name": "Shirt Model 2",
    "price": 1099,
    "category": "shirt",
    "rating": 3.7,
    "description": "Shirt Model 2 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shirt.jpg"
  },
  {
    "id": 33,
    "name": "Shirt Model 3",
    "price": 1149,
    "category": "shirt",
    "rating": 3.8,
    "description": "Shirt Model 3 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shirt.jpg"
  },
  {
    "id": 34,
    "name": "Shirt Model 4",
    "price": 1199,
    "category": "shirt",
    "rating": 3.9,
    "description": "Shirt Model 4 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shirt.jpg"
  },
  {
    "id": 35,
    "name": "Shirt Model 5",
    "price": 1249,
    "category": "shirt",
    "rating": 3.5,
    "description": "Shirt Model 5 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shirt.jpg"
  },
  {
    "id": 36,
    "name": "Shirt Model 6",
    "price": 1299,
    "category": "shirt",
    "rating": 3.6,
    "description": "Shirt Model 6 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shirt.jpg"
  },
  {
    "id": 37,
    "name": "Shirt Model 7",
    "price": 1349,
    "category": "shirt",
    "rating": 3.7,
    "description": "Shirt Model 7 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shirt.jpg"
  },
  {
    "id": 38,
    "name": "Shirt Model 8",
    "price": 1399,
    "category": "shirt",
    "rating": 3.8,
    "description": "Shirt Model 8 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shirt.jpg"
  },
  {
    "id": 39,
    "name": "Shirt Model 9",
    "price": 1449,
    "category": "shirt",
    "rating": 3.9,
    "description": "Shirt Model 9 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shirt.jpg"
  },
  {
    "id": 40,
    "name": "Shirt Model 10",
    "price": 1499,
    "category": "shirt",
    "rating": 3.5,
    "description": "Shirt Model 10 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shirt.jpg"
  },
  {
    "id": 41,
    "name": "Shirt Model 11",
    "price": 1549,
    "category": "shirt",
    "rating": 3.6,
    "description": "Shirt Model 11 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shirt.jpg"
  },
  {
    "id": 42,
    "name": "Shirt Model 12",
    "price": 1599,
    "category": "shirt",
    "rating": 3.7,
    "description": "Shirt Model 12 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shirt.jpg"
  },
  {
    "id": 43,
    "name": "Shirt Model 13",
    "price": 1649,
    "category": "shirt",
    "rating": 3.8,
    "description": "Shirt Model 13 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shirt.jpg"
  },
  {
    "id": 44,
    "name": "Shirt Model 14",
    "price": 1699,
    "category": "shirt",
    "rating": 3.9,
    "description": "Shirt Model 14 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shirt.jpg"
  },
  {
    "id": 45,
    "name": "Shirt Model 15",
    "price": 1749,
    "category": "shirt",
    "rating": 3.5,
    "description": "Shirt Model 15 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shirt.jpg"
  },
  {
    "id": 46,
    "name": "Pants Model 1",
    "price": 1049,
    "category": "pants",
    "rating": 3.6,
    "description": "Pants Model 1 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/pant.jpg"
  },
  {
    "id": 47,
    "name": "Pants Model 2",
    "price": 1099,
    "category": "pants",
    "rating": 3.7,
    "description": "Pants Model 2 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/pant.jpg"
  },
  {
    "id": 48,
    "name": "Pants Model 3",
    "price": 1149,
    "category": "pants",
    "rating": 3.8,
    "description": "Pants Model 3 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/pant.jpg"
  },
  {
    "id": 49,
    "name": "Pants Model 4",
    "price": 1199,
    "category": "pants",
    "rating": 3.9,
    "description": "Pants Model 4 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/pant.jpg"
  },
  {
    "id": 50,
    "name": "Pants Model 5",
    "price": 1249,
    "category": "pants",
    "rating": 3.5,
    "description": "Pants Model 5 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/pant.jpg"
  },
  {
    "id": 51,
    "name": "Pants Model 6",
    "price": 1299,
    "category": "pants",
    "rating": 3.6,
    "description": "Pants Model 6 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/pant.jpg"
  },
  {
    "id": 52,
    "name": "Pants Model 7",
    "price": 1349,
    "category": "pants",
    "rating": 3.7,
    "description": "Pants Model 7 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/pant.jpg"
  },
  {
    "id": 53,
    "name": "Pants Model 8",
    "price": 1399,
    "category": "pants",
    "rating": 3.8,
    "description": "Pants Model 8 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/pant.jpg"
  },
  {
    "id": 54,
    "name": "Pants Model 9",
    "price": 1449,
    "category": "pants",
    "rating": 3.9,
    "description": "Pants Model 9 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/pant.jpg"
  },
  {
    "id": 55,
    "name": "Pants Model 10",
    "price": 1499,
    "category": "pants",
    "rating": 3.5,
    "description": "Pants Model 10 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/pant.jpg"
  },
  {
    "id": 56,
    "name": "Pants Model 11",
    "price": 1549,
    "category": "pants",
    "rating": 3.6,
    "description": "Pants Model 11 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/pant.jpg"
  },
  {
    "id": 57,
    "name": "Pants Model 12",
    "price": 1599,
    "category": "pants",
    "rating": 3.7,
    "description": "Pants Model 12 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/pant.jpg"
  },
  {
    "id": 58,
    "name": "Pants Model 13",
    "price": 1649,
    "category": "pants",
    "rating": 3.8,
    "description": "Pants Model 13 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/pant.jpg"
  },
  {
    "id": 59,
    "name": "Pants Model 14",
    "price": 1699,
    "category": "pants",
    "rating": 3.9,
    "description": "Pants Model 14 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/pant.jpg"
  },
  {
    "id": 60,
    "name": "Pants Model 15",
    "price": 1749,
    "category": "pants",
    "rating": 3.5,
    "description": "Pants Model 15 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/pant.jpg"
  }
];

export default products;
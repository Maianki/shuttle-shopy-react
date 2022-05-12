import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "Yonex Feather Shuttle",
    badge: "Trending",
    category: "Shuttles",
    price: {
      original: 1299,
      discounted: 490,
      discount: 62,
    },
    description: "The go to feather shuttle for all badminton lovers",
    img: "https://res.cloudinary.com/dj5aind8q/image/upload/v1649613348/Shuttle%20shoppy/Feather-badminton-shuttle_uhivcm.png",
    isOutOfStock: false,
    rating: 4,
  },
  {
    _id: uuid(),
    name: "Z-star Power 88",
    badge: "Trending",
    category: "Rackets",
    price: {
      original: 1999,
      discounted: 1499,
      discount: 25,
    },
    description: "Conquer the opponent with power and flexibility.",
    img: "https://res.cloudinary.com/dj5aind8q/image/upload/v1649613343/Shuttle%20shoppy/Yonex-Arcsaber-11_lswixj.jpg",
    isOutOfStock: false,
    rating: 3.8,
  },
  {
    _id: uuid(),
    name: "Yonex Nanoray 18i",
    badge: "New",
    category: "Rackets",
    price: {
      original: 3150,
      discounted: 1999,
      discount: 37,
    },
    description: "The best badminton racket for badminton lovers",
    img: "https://res.cloudinary.com/dj5aind8q/image/upload/v1649613345/Shuttle%20shoppy/Yonex-Nanoray-18i_o1mii4.png",
    isOutOfStock: false,
    rating: 4.3,
  },
  {
    _id: uuid(),
    name: "Yonex Plastic Shuttle",
    badge: "New",
    category: "Shuttles",
    price: {
      original: 1299,
      discounted: 490,
      discount: 62,
    },
    description: "The go to plastic shuttle for all badminton lovers",
    img: "https://res.cloudinary.com/dj5aind8q/image/upload/v1649613350/Shuttle%20shoppy/Plastic-badminton-shuttle_gq0xed.png",
    isOutOfStock: true,
    rating: 2.8,
  },
  {
    _id: uuid(),
    name: "Yonex Badminton Bag",
    badge: "Trending",
    category: "Badminton Bags",
    price: {
      original: 540,
      discounted: 495,
      discount: 8,
    },
    description: "Store and carry your badminton accessories in Bag.",
    img: "https://res.cloudinary.com/dj5aind8q/image/upload/v1649613349/Shuttle%20shoppy/badminton-bag_fqyuii.png",
    isOutOfStock: false,
    rating: 4.8,
  },
  {
    _id: uuid(),
    name: "SHB-50-EX-Shoes",
    category: "Badminton Shoes",
    badge: "Trending",
    price: {
      original: 1076,
      discounted: 976,
      discount: 9,
    },
    description: "Durable and long lasting badminton shoes",
    img: "https://res.cloudinary.com/dj5aind8q/image/upload/v1649613357/Shuttle%20shoppy/SHB-50-EX-Shoes_eoflnx.png",
    isFastDelivery: false,
    rating: 3.5,
  },
  {
    _id: uuid(),
    name: "Power Cushion Shoes",
    category: "Badminton Shoes",
    badge: "Sale",
    price: {
      original: 1076,
      discounted: 976,
      discount: 9,
    },
    description: "The YONEX Power Cushion absorbs shock.",
    img: "https://res.cloudinary.com/dj5aind8q/image/upload/v1649613355/Shuttle%20shoppy/Power-Cushion-Shoes_y8dif3.png",
    isOutOfStock: true,
    rating: 4.1,
  },
];

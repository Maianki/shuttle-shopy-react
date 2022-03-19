import { v4 as uuid } from "uuid";
import {
  racketArcsaber,
  racketNanoray,
  powerCushionShoes,
  shbShoes,
  featherShuttle,
  plasticShuttle,
  badmintonBag,
} from "../../assets/images";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "Yonex Feather Shuttle",
    badge: "Trending",
    category: "shuttles",
    price: {
      original: 1299,
      discounted: 490,
      discount: 62,
    },
    description: "The go to shuttle for badminton lovers",
    img: featherShuttle,
    isOutOfStock: false,
    isFastDelivery: true,
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
    img: racketArcsaber,
    isOutOfStock: false,
    isFastDelivery: false,
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
    img: racketNanoray,
    isOutOfStock: false,
    isFastDelivery: false,
    rating: 4.3,
  },
  {
    _id: uuid(),
    name: "Yonex Plastic Shuttle",
    badge: "New",
    category: "shuttles",
    price: {
      original: 1299,
      discounted: 490,
      discount: 62,
    },
    description: "The go to shuttle for badminton lovers",
    img: plasticShuttle,
    isOutOfStock: true,
    isFastDelivery: false,
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
    img: badmintonBag,
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
    img: shbShoes,
    isOutOfStock: true,
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
    img: powerCushionShoes,
    isOutOfStock: true,
    isFastDelivery: false,
    rating: 4.1,
  },
];

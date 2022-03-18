import { v4 as uuid } from "uuid";
import shuttle from "../../assets/images/shuttle-img.jpg";
import badminton from "../../assets/images/yonex-badminton.jpg";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "Yonex Feather Shuttle",
    badge: "trending",
    price: {
      original: 1299,
      discounted: 490,
      discount: 62,
    },
    description: "The go to shuttle for badminton lovers",
    img: shuttle,
  },
  {
    _id: uuid(),
    name: "Yonex Badminton",
    badge: "trending",
    price: {
      original: 1299,
      discounted: 490,
      discount: 62,
    },
    description: "The best badminton racket for badminton lovers",
    img: badminton,
  },
  {
    _id: uuid(),
    name: "Yonex Badminton",
    badge: "trending",
    price: {
      original: 1299,
      discounted: 490,
      discount: 62,
    },
    description: "The best badminton racket for badminton lovers",
    img: badminton,
  },
  {
    _id: uuid(),
    name: "yonex Feather Shuttle",
    badge: "trending",
    price: {
      original: 1299,
      discounted: 490,
      discount: 62,
    },
    description: "The go to shuttle for badminton lovers",
    img: shuttle,
  },
];

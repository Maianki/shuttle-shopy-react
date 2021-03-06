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
    id: 1,
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
    id: 2,
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
    isOutOfStock: true,
    rating: 4.3,
    id: 3,
  },
  {
    _id: uuid(),
    name: "A+ 62 XD Shuttles",
    category: "Shuttles",
    badge: "New",
    price: {
      original: 1990,
      discounted: 1490,
      discount: 25,
    },
    description:
      "This is a 'Training' class high-quality shuttlecock with extra durability.",
    img: "https://res.cloudinary.com/dj5aind8q/image/upload/v1656053815/Shuttle%20shoppy/A_62_XD_Shuttles_eqouhk.png",
    isOutOfStock: false,
    rating: 3.8,
    id: 10,
  },
  {
    _id: uuid(),
    name: "Slam Badminton Shoe Bag",
    category: "Badminton Bags",
    badge: "New",
    price: {
      original: 1090,
      discounted: 999,
      discount: 8,
    },
    description: "High-quality badminton shoe bag, for protecting your shoes.",
    img: "https://res.cloudinary.com/dj5aind8q/image/upload/v1656054974/Shuttle%20shoppy/Slam_Badminton_Shoe_Bag_yh3j4z.png",
    isOutOfStock: false,
    rating: 3.5,
    id: 11,
  },
  {
    _id: uuid(),
    name: "Raider Max Badminton Kit Bag",
    category: "Badminton Bags",
    badge: "Sale",
    price: {
      original: 1990,
      discounted: 1029,
      discount: 48,
    },
    description: "The Li-Ning Raider Max is a robust hold it all kit bag.",
    img: "https://res.cloudinary.com/dj5aind8q/image/upload/v1656055714/Shuttle%20shoppy/Raider_Max_Badminton_Kit_Bag_x9wefo.png",
    isOutOfStock: false,
    rating: 4.4,
    id: 12,
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
    id: 4,
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
    id: 5,
  },
  {
    _id: uuid(),
    name: "SHB 50 EX Shoes",
    category: "Badminton Shoes",
    badge: "New",
    price: {
      original: 1076,
      discounted: 976,
      discount: 9,
    },
    description: "Durable and long lasting badminton shoes",
    img: "https://res.cloudinary.com/dj5aind8q/image/upload/v1649613357/Shuttle%20shoppy/SHB-50-EX-Shoes_eoflnx.png",
    isFastDelivery: false,
    rating: 3.5,
    id: 6,
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
    id: 7,
  },
  {
    _id: uuid(),
    name: "G-Force Superlite Max 9",
    category: "Rackets",
    badge: "New",
    price: {
      original: 4590,
      discounted: 1990,
      discount: 57,
    },
    description:
      "The Li-Ning G-Force Superlite bulit with superlight technology",
    img: "https://res.cloudinary.com/dj5aind8q/image/upload/v1656052830/Shuttle%20shoppy/G-FORCE_SUPERLITE_MAX_9_swpsae.png",
    isOutOfStock: false,
    rating: 4.9,
    id: 8,
  },
  {
    _id: uuid(),
    name: "Bolt Neo Shuttles",
    category: "Shuttles",
    badge: "New",
    price: {
      original: 799,
      discounted: 399,
      discount: 50,
    },
    description:
      "A technically sound nylon shuttlecock. Made from quality Eva.",
    img: "https://res.cloudinary.com/dj5aind8q/image/upload/v1656053375/Shuttle%20shoppy/Bolt_Neo_Shuttles_b0hf6w.png",
    isOutOfStock: false,
    rating: 3.8,
    id: 9,
  },
  {
    _id: uuid(),
    name: "Ultra III Badminton Shoes",
    category: "Badminton Shoes",
    badge: "Trending",
    price: {
      original: 4290,
      discounted: 2990,
      discount: 30,
    },
    description: "The Ultra III provides extra bounce & perfect grip. ",
    img: "https://res.cloudinary.com/dj5aind8q/image/upload/v1656056105/Shuttle%20shoppy/Ultra_III_Badminton_Shoes_za5r6p.png",
    isOutOfStock: false,
    rating: 4,
    id: 13,
  },
  {
    _id: uuid(),
    name: "Light Feather Badminton Shoes",
    category: "Badminton Shoes",
    badge: "Sale",
    price: {
      original: 4490,
      discounted: 3690,
      discount: 18,
    },
    description:
      "The Li-Ning Light-Feather cushioned and flexible for a soft ride. ",
    img: "https://res.cloudinary.com/dj5aind8q/image/upload/v1656056495/Shuttle%20shoppy/Light_Feather_Badminton_Shoes-removebg-preview_boisak.png",
    isOutOfStock: false,
    rating: 3.3,
    id: 14,
  },
  {
    _id: uuid(),
    name: "Legacy Badminton Bag",
    category: "Badminton Bags",
    badge: "New",
    price: {
      original: 790,
      discounted: 790,
      discount: 0,
    },
    description: "High Durability Badminton bags for professional players.",
    img: "https://res.cloudinary.com/dj5aind8q/image/upload/v1656056832/Shuttle%20shoppy/Legacy_Badminton_Bag-removebg-preview_otshkq.png",
    isOutOfStock: true,
    rating: 2.8,
    id: 15,
  },
  {
    _id: uuid(),
    name: "Srikanth Kidambi (SK) Series",
    badge: "New",
    category: "Rackets",
    price: {
      original: 1990,
      discounted: 1990,
      discount: 0,
    },
    description: "The SK rackets are Srikanth signature series racket.",
    img: "https://res.cloudinary.com/dj5aind8q/image/upload/v1656057348/Shuttle%20shoppy/Srikanth_Kidambi_SK_Series_ev4oyg.png",
    isOutOfStock: false,
    rating: 4.5,
    id: 16,
  },
];

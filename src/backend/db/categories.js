import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Rackets",
    value: "rackets",
    img: "https://res.cloudinary.com/dj5aind8q/image/upload/v1649613352/Shuttle%20shoppy/rackets_dirlxx.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Shuttles",
    value: "shuttles",
    img: "https://res.cloudinary.com/dj5aind8q/image/upload/v1649613344/Shuttle%20shoppy/shuttles_va8bnd.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Badminton Bags",
    value: "badminton-bags",
    img: "https://res.cloudinary.com/dj5aind8q/image/upload/v1649613344/Shuttle%20shoppy/bag_rpvldv.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Badminton Shoes",
    value: "badminton-shoes",
    img: "https://res.cloudinary.com/dj5aind8q/image/upload/v1649613353/Shuttle%20shoppy/shoes_ggzvam.jpg",
  },
];

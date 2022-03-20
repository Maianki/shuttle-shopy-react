import { v4 as uuid } from "uuid";
import bag from "../../assets/images/bag.jpg";
import rackets from "../../assets/images/rackets.jpg";
import shoes from "../../assets/images/shoes.jpg";
import shuttles from "../../assets/images/shuttles.jpg";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Rackets",
    value: "rackets",
    img: rackets,
  },
  {
    _id: uuid(),
    categoryName: "Shuttles",
    value: "shuttles",
    img: shuttles,
  },
  {
    _id: uuid(),
    categoryName: "Badminton Bags",
    value: "badminton-bags",
    img: bag,
  },
  {
    _id: uuid(),
    categoryName: "Badminton Shoes",
    value: "badminton-shoes",
    img: shoes,
  },
];

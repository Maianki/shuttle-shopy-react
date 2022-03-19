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
    img: rackets,
  },
  {
    _id: uuid(),
    categoryName: "Shuttles",
    img: shuttles,
  },
  {
    _id: uuid(),
    categoryName: "Badminton Bags",
    img: bag,
  },
  {
    _id: uuid(),
    categoryName: "Badminton Shoes",
    img: shoes,
  },
];

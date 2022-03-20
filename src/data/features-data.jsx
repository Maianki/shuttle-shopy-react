import {FaSolidCreditCard, FaSolidHandshake, FaSolidRecycle, FaSolidTruckMoving} from "../assets/icons"
import { v4 as uuid } from "uuid";
export const features = [
  {
    _id: uuid(),
    title: "Easy Returns",
    description: "No Questions asked",
    Icon: FaSolidRecycle,
  },
  {
    _id: uuid(),
    title: "Easy Payments",
    description: "We accept many major credit cards",
    Icon: FaSolidCreditCard,
  },
  {
    _id: uuid(),
    title: "24/7 Guarantee",
    description: "All orders shipped within 24 hours",
    Icon: FaSolidHandshake,
  },
  {
    _id: uuid(),
    title: "Free Shipping",
    description: "Above Rs. 400 (to selected countries* only)",
    Icon: FaSolidTruckMoving,
  },
];
import { v4 as uuidv4 } from "uuid";

export const availabilityFilterData = [
  {
    id: uuidv4(),
    availabilityType: "Include out of Stock",
    value: "out-of-stock",
  },
  {
    id: uuidv4(),
    availabilityType: "Cash on delivery",
    value: "cash-on-delivery",
  },
  {
    id: uuidv4(),
    availabilityType: "All items",
    value: "all-items",
  },
];

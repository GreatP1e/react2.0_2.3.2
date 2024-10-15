import ky from "ky";
import { baseUrl } from "../constants/api";
import { Vegetable } from "../types";

export const getVegetable = () => {
  const url = new URL(
    "sivadass/raw/upload/v1535817394/json/products.json",
    baseUrl
  );
  const resp = ky.get<Vegetable[]>(url).json();
  return resp;
};

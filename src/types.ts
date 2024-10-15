export interface Vegetable {
  id: number;
  name: string;
  price: number;
  image: string;
  category?: string;
}

export interface VegetableData extends Vegetable {
  quantity: number;
  inCart: boolean;
}

export enum TypesChange {
  QUANTITY_INCREMENT = "quantityIncrement",
  QUANTITY_DECREMENT = "quantityDecrement",
  IN_CART = "inCart",
}

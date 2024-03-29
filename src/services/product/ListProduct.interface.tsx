import { Product } from "./Product.interface";

export interface ListProduct {
  count: number,
  next: string,
  previous: string,
  result: Product[]
}
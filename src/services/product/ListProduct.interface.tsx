import { Product } from "./Product.interface";

export interface ListProduct {
  count: number,
  next: string | null,
  previous: string | null,
  results: Product[]
}
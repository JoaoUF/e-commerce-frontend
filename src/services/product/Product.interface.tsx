import { UUID } from "crypto";

export interface Product {
  id: UUID,
  created: string,
  modified: string,
  status: number,
  activate_date: string,
  deactivate_date: string | null,
  title: string,
  price: number,
  discountPrice: number,
  category: string,
  description: string,
  image: string,
}
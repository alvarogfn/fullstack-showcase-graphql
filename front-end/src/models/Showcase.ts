import type { Product } from "./Product";

export interface Showcase {
  name: string;
  description: string;
  products: Product[];
  id: string;
}

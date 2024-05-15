import { CategoryType } from './CategoryType';
import { ProductType } from './ProductType';

export interface StoreType {
  id: string;
  name: string;
  logoUrl?: string;
  users?: any[];
  categories: CategoryType[];
  products: ProductType[];
}

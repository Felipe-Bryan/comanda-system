import { ProductToOrderType } from './ProductToOrder';

export interface OrderType {
  id: string;
  table: string;
  ordered: ProductToOrderType[];
}

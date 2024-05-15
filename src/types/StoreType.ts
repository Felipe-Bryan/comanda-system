import { CategoryType } from './CategoryType';
import { ProductType } from './ProductType';
import { SystemUserType } from './SystemUserType';
import { TableType } from './TableType';

export interface StoreType {
  id: string;
  name: string;
  logoUrl?: string;
  users: SystemUserType[];
  categories: CategoryType[];
  products: ProductType[];
  tables: TableType[];
}

import { StoreType } from '../types/StoreType';
import { categoriesDB } from './categories';
import { productsDB } from './products';

export const storeInfo: StoreType = {
  id: 'st0001',
  name: 'Restaurante',
  logoUrl: './dist/assets/images/logo.png',
  categories: categoriesDB,
  products: productsDB,
  users: [],
  tables: [],
};

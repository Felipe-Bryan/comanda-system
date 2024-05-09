import { ProductType } from '../types/ProductType';

export const productsDB: ProductType[] = [
  {
    id: 'p001',
    name: 'Product 1',
    description: 'This is product one',
    price: 25.99,
    active: true,
    category: 'Entradas',
  },
  {
    id: 'p002',
    name: 'Product 2',
    description: 'This is product two',
    price: 20.99,
    active: true,
    category: 'Entradas',
  },
  {
    id: 'p003',
    name: 'Product 3',
    description: 'This is product three',
    price: 10.99,
    active: true,
    category: 'Bebidas',
  },
];

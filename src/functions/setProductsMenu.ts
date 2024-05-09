import { productItem } from '../components/productItem';
import { productsDB } from '../database/products';

export function setProductsMenu() {
  const productsSpot = document.getElementById('productsMenu')!;
  productsSpot.innerHTML = '';

  const products = productsDB;

  products.forEach((product) => {
    productsSpot.innerHTML += productItem(product);
  });
}

import { productItem } from '../components/productItem';
import { productsDB } from '../database/products';
import { setProductCardClick } from './setProductCardClick';

export function setProductsMenu() {
  const productsSpot = document.getElementById('productsMenu')!;
  productsSpot.innerHTML = '';

  const products = productsDB;

  products.forEach((product) => {
    productsSpot.innerHTML += productItem(product);
  });

  const productItems = document.querySelectorAll('.productItem');

  productItems.forEach((product) => {
    const productId = product.id.replace('productCard', '');
    product.addEventListener('click', () => {
      setProductCardClick(productId);
    });
  });
}

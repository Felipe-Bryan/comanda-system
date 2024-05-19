import { productItem } from '../../../components/productItem';
import { storeInfo } from '../../../database/storeInfo';
import { setCardClick } from '../../modalPedido/functions/setCardClick';

export function filterProducts(): void {
  const filtered = document.querySelectorAll('.categoryBtn');

  filtered.forEach((item) => {
    item.addEventListener('click', () => {
      const categoryId = item.id.replace('-btn', '');
      setProductsByCategory(categoryId);
    });
  });
}

function setProductsByCategory(id: string): void {
  const productsSpot = document.getElementById('productsMenu')!;
  productsSpot.innerHTML = '';

  const products = storeInfo.products;

  products.forEach((item) => {
    if (item.active) {
      if (item.categoryId === id) {
        productsSpot.innerHTML += productItem(item);
      }
    }
  });

  const productItems = document.querySelectorAll('.productItem');

  productItems.forEach((product) => {
    const productId = product.id.replace('productCard', '');
    product.addEventListener('click', () => {
      setCardClick(productId);
    });
  });
}

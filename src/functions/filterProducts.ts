import { productItem } from '../components/productItem';
import { productsDB } from '../database/products';

export function filterProducts() {
  const filtered = document.querySelectorAll('.categoryBtn');

  filtered.forEach((item) => {
    item.addEventListener('click', () => {
      const categoryId = item.id.replace('-btn', '');
      setProductsByCategory(categoryId);
    });
  });
}

function setProductsByCategory(id: string) {
  const productsSpot = document.getElementById('productsMenu')!;
  productsSpot.innerHTML = '';

  const products = productsDB;

  products.forEach((item) => {
    if (item.categoryId === id) {
      productsSpot.innerHTML += productItem(item);
    }
  });
}

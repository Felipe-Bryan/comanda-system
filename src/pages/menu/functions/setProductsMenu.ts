import { productItem } from '../../../components/productItem';
import { categoriesDB } from '../../../database/categories';
import { productsDB } from '../../../database/products';
import { setCardClick } from '../../modalPedido/functions/setCardClick';

export function setProductsMenu(): void {
  const productsSpot = document.getElementById('productsMenu')!;
  productsSpot.innerHTML = '';

  const categories = categoriesDB;
  const products = productsDB;

  categories.forEach((category) => {
    products.forEach((product) => {
      if (product.categoryId === category.id) {
        if (product.active) {
          productsSpot.innerHTML += productItem(product);
        }
      }
    });
  });

  const productItems = document.querySelectorAll('.productItem');

  productItems.forEach((product) => {
    const productId = product.id.replace('productCard', '');
    product.addEventListener('click', () => {
      setCardClick(productId);
    });
  });
}

import { productItem } from '../../../components/productItem';
import { storeInfo } from '../../../database/storeInfo';
import { setCardClick } from '../../modalPedido/functions/setCardClick';

export function setProductsMenu(): void {
  const productsSpot = document.getElementById('productsMenu')!;
  productsSpot.innerHTML = '';

  const categories = storeInfo.categories;
  const products = storeInfo.products;

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

import { additionalOptionToProduct } from '../components/additionalOptionToProduct';
import { requiredOptionToProduct } from '../components/requiredOptionToProduct';
import { productsDB } from '../database/products';

export function setProductCardClick(productId: string): void {
  const productFound = productsDB.find((product) => {
    return product.id === productId;
  })!;

  const modalTitle = document.getElementById('cartModalLabel')!;

  modalTitle.innerText = productFound.name;

  additionalOptionToProduct(productId);
  requiredOptionToProduct(productId);
}

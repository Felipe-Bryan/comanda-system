import { productsDB } from '../database/products';
import { componentVisibility } from '../functions/componentVisibility';
import { AdditionalToProductType } from '../types/AdditionalToProductType';
import { ProductType } from '../types/ProductType';

export function additionalOptionToProduct(productId: string) {
  const productToFind: ProductType = productsDB.find((product) => {
    return product.id === productId;
  })!;

  if (productToFind.additionals.length > 0) {
    componentVisibility('additionalOptions', 'show');

    const additionalItemsSpot = document.getElementById('additionalItems')!;

    additionalItemsSpot.innerHTML = '';

    for (let i = 0; i < productToFind.additionals.length; i++) {
      additionalItemsSpot.innerHTML += additionalItem(productToFind.additionals[i], i);
    }
  } else {
    componentVisibility('additionalOptions', 'hide');
  }
}

function additionalItem(additionalItem: AdditionalToProductType, seq: number) {
  return `
<div class="form-check">
    <input class="form-check-input" type="checkbox" name="additionalItem" id="additionalItem${seq}" />
    <label class="form-check-label w-100" for="additionalItem${seq}">
        <div class="d-flex justify-content-between w-100">
            <div>${additionalItem.name}</div>
            <div>R$ ${additionalItem.price.toFixed(2)}</div>
        </div>
    </label>
</div>`;
}

import { productsDB } from '../database/products';
import { componentVisibility } from '../functions/componentVisibility';
import { ProductType } from '../types/ProductType';
import { RequiredOptionToProductType } from '../types/RequiredOption';

export function requiredOptionToProduct(productId: string) {
  const productToFind: ProductType = productsDB.find((product) => {
    return product.id === productId;
  })!;

  if (productToFind.requiredOption.length > 0) {
    componentVisibility('requiredOptions', 'show');

    const requiredItemsSpot = document.getElementById('requiredItems')!;

    requiredItemsSpot.innerHTML = '';

    for (let i = 0; i < productToFind.requiredOption.length; i++) {
      requiredItemsSpot.innerHTML += requiredItem(productToFind.requiredOption[i], i);
    }
  } else {
    componentVisibility('requiredOptions', 'hide');
  }
}

function requiredItem(requiredItem: RequiredOptionToProductType, seq: number) {
  return `
<div class="form-check">
    <input class="form-check-input" type="radio" name="requiredItem" id="requiredItem${seq}" />
    <label class="form-check-label w-100" for="requiredItem${seq}">
        <div class="d-flex justify-content-between w-100">
            <div>${requiredItem.name}</div>
            <div>R$ ${requiredItem.price.toFixed(2)}</div>
        </div>
    </label>
</div>
    `;
}

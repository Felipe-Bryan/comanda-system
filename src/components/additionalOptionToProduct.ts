import { productsDB } from '../database/products';
import { componentVisibility } from '../functions/componentVisibility';
import { AdditionalItemType } from '../types/AdditionalItem';
import { ProductType } from '../types/ProductType';

export function additionalOptionToProduct(productId: string): void {
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

function additionalItem(additionalItem: AdditionalItemType, sequency: number): string {
  return `
<div class="form-check">
    <input class="form-check-input" type="checkbox" name="additionalItem" id="additionalItem${sequency}" />
    <label class="form-check-label w-100" for="additionalItem${sequency}">
        <div class="d-flex justify-content-between w-100">
            <div class="fst-italic">${additionalItem.name}</div>
            <div>R$ ${additionalItem.price.toFixed(2)}</div>
        </div>
    </label>
</div>`;
}

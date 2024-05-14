import { RequiredOptionToProductType } from '../types/RequiredOption';

export function requiredItem(requiredItem: RequiredOptionToProductType, sequency: number): string {
  return `
    <div class="form-check">
        <input class="form-check-input required" type="radio" name="requiredItem" id="requiredItem${sequency}" value="${
    requiredItem.price
  }" title="${requiredItem.name}" />
        <label class="form-check-label w-100 " for="requiredItem${sequency}">
            <div class="d-flex justify-content-between w-100">
                <div class="fst-italic">${requiredItem.name}</div>
                <div>R$ ${requiredItem.price.toFixed(2)}</div>
            </div>
        </label>
    </div>`;
}

import { RequiredItem, RequiredOptionToProductType } from '../types/RequiredOption';

export function requiredItem(requiredItem: RequiredOptionToProductType, sequency: number): string {
  let result = `
  <p class="fw-bold fst-italic">${requiredItem.title} *Obrigatório</p>
  <div id="${requiredItem.id}-items">`;

  for (let i = 0; i < requiredItem.items.length; i++) {
    result += formItem(requiredItem.id, requiredItem.items[i], sequency);
  }

  result += `</div><br/>`;
  return result;
}

function formItem(parentId: string, item: RequiredItem, sequency: number) {
  return `
<div class="form-check">
    <input 
        class="form-check-input required${sequency}" 
        type="radio" 
        name="${parentId}"
        id="${item.id}" 
        value="${item.price}" 
        title="${item.name}" />
    <label class="form-check-label w-100 " for="${item.id}">
        <div class="d-flex justify-content-between w-100">
            <div class="fst-italic">${item.name}</div>
            <div>R$ ${item.price.toFixed(2)}</div>
        </div>
    </label>
</div>`;
}

// <div class="form-check">
//   <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
//   <label class="form-check-label" for="flexRadioDefault1">
//     Default radio
//   </label>
// </div>
//
// <div class="form-check">
//   <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
//   <label class="form-check-label" for="flexRadioDefault2">
//     Default checked radio
//   </label>
// </div>

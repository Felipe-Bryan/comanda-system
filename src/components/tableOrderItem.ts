import { AdditionalItemType } from '../types/AdditionalItem';
import { ProductToOrderType } from '../types/ProductToOrder';
import { RequiredOptionToProductType } from '../types/RequiredOption';

function tableProductInfo(item: ProductToOrderType) {
  return `
<div class="row fw-semibold">
  <div class="col fs-5">${item.name}</div>  
</div>
<div class="row">
  <div class="col-8 text-end">Valor unitário</div>
  <div class="col text-center">R$ ${item.price.toFixed(2)}</div>
</div>`;
}

function tableRequired(item: RequiredOptionToProductType) {
  for (let i = 0; i < item.items.length; i++) {
    return `
    <div class="row fst-italic px-1">
      <div class="col-8">• ${item.items[i].name}</div>
      <div class="col text-end">+ R$ ${item.items[i].price.toFixed(2)}</div>
    </div>`;
  }
}

function tableAdditional(item: AdditionalItemType) {
  return `
<div class="row fst-italic px-1">
  <div class="col-8">• ${item.name}</div>
  <div class="col text-end">+ R$ ${item.price.toFixed(2)}</div>
</div>`;
}

function tableComment(text: string) {
  return `
<div class="row fst-italic px-1">
  <div class="col-12">${text}</div>
</div>`;
}

function tableStatus(status: string) {
  return `
<div class="row fw-semibold">
  <div class="col-8 text-end">Status:</div>
  <div class="col text-center">${status}</div>
</div>`;
}

function tableSubtotal(product: ProductToOrderType) {
  return `
<div class="row fw-semibold">
  <div class="col-8 text-end">Quantidade</div>
  <div class="col text-center">${product.qt}</div>
</div>

<div class="row fw-semibold">
  <div class="col-8 text-end">Subtotal</div>
  <div class="col text-center">R$ ${product.orderValue.toFixed(2)}</div>
</div>
<hr class="m-0 p-0" />`;
}

export function tableOrderItem(product: ProductToOrderType) {
  const table = document.getElementById('tableContent')!;

  table.innerHTML += tableProductInfo(product);

  if (product.requiredSelected) {
    for (let i = 0; i < product.requiredSelected.length; i++) {
      table.innerHTML += tableRequired(product.requiredSelected[i]);
    }
  }

  if (product.additionalSelected) {
    if (product.additionalSelected.length > 0) {
      product.additionalSelected.forEach((item) => (table.innerHTML += tableAdditional(item)));
    }
  }

  if (product.comment) {
    table.innerHTML += tableComment(product.comment);
  }

  if (product.status) {
    table.innerHTML += tableStatus(product.status);
  }

  table.innerHTML += tableSubtotal(product);
}

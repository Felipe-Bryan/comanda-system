import { AdditionalItemType } from '../types/AdditionalItem';
import { ProductToOrderType } from '../types/ProductToOrder';
import { RequiredOptionToProductType } from '../types/RequiredOption';

function tableProductInfo(item: ProductToOrderType) {
  return `
  <div class="row fw-semibold">
  <div class="col-6">${item.name}</div>
  <div class="col-2 text-end">${item.qt}</div>
  <div class="col-4 text-end">R$ ${item.price.toFixed(2)}</div>
</div>`;
}

function tableRequired(item: RequiredOptionToProductType) {
  return `
<div class="row fst-italic px-1">
  <div class="col-6">• ${item.name}</div>
  <div class="col-6 text-end">+ R$ ${item.price.toFixed(2)}</div>
</div>`;
}

function tableAdditional(item: AdditionalItemType) {
  return `
<div class="row fst-italic px-1">
  <div class="col-6">• ${item.name}</div>
  <div class="col-6 text-end">+ R$ ${item.price.toFixed(2)}</div>
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
  <div class="col-12 text-end p-0 pe-2">Status: ${status}</div>
</div>`;
}

function tableSubtotal(product: ProductToOrderType) {
  return `
<div class="row fw-semibold border-bottom border-2">
  <div class="col-6">Subtotal</div>
  <div class="col-6 text-end">R$ ${product.orderValue.toFixed(2)}</div>
</div>`;
}

export function tableOrderItem(product: ProductToOrderType) {
  const table = document.getElementById('tableContent')!;

  table.innerHTML += tableProductInfo(product);

  if (product.requiredSelected) {
    table.innerHTML += tableRequired(product.requiredSelected);
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

import { ProductType } from '../types/ProductType';

export function productItem(product: ProductType) {
  if (product.active) {
    return `
    <div class="card w-auto mx-2 mb-1">
        <div class="card-body p-1">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text mb-1">${product.description}</p>
          <p class="card-text text-end" id="${product.id}-price">R$ ${product.price.toFixed(2)}</p>
        </div>
    </div>`;
  }
}

// <div class="card w-auto mx-2 mb-1">
// <div class="card-body p-1">
// <h5 class="card-title">Nome do produto</h5>
// <p class="card-text mb-1">Breve descrição do produto</p>
// <p class="card-text text-end">R$ 00,00</p>
// </div>
// </div>

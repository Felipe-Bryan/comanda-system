import { ProductType } from '../types/ProductType';

export function productItem(product: ProductType): string {
  return `
<div class="card w-auto mx-2 mb-1 productItem" id="productCard${
    product.id
  }" data-bs-toggle="modal" data-bs-target="#cartModal">
  <div class="card-body p-1">
    <div class="d-flex align-items-end">
      <div class="me-1 w-25">
        <img 
        src="${product.imageUrl || './dist/assets/images/plate.png'}" 
        class="img-thumbnail border border-0" 
        alt="${product.name}" />
      </div>
      <h5 class="card-title">${product.name}</h5>
    </div>

    <div>
      <p class="card-text mb-1 fst-italic">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dolore quisquam perferendis accusantium ea
        quaerat possimus sequi quam, ab, odio commodi consequuntur ipsam. Reiciendis, natus. Perferendis ad adipisci
        illo minus!
      </p>
      <p class="card-text text-end fst-italic" id="${product.id}-price">R$ ${product.price.toFixed(2)}</p>
    </div>
  </div>
</div>`;
}

// ./dist/assets/images/plate.png

// <div
//   class="card w-auto mx-2 mb-1 productItem"
//   id="productCard${product.id}"
//   data-bs-toggle="modal"
//   data-bs-target="#cartModal">
//     <div class="card-body p-1">
//       <h5 class="card-title">${product.name}</h5>
//       <p class="card-text mb-1">${product.description}</p>
//       <p class="card-text text-end" id="${product.id}-price">R$ ${product.price.toFixed(2)}</p>
//     </div>
// </div>

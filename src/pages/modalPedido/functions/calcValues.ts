import { ProductToOrderType } from '../../../types/ProductToOrder';

export function calcValues(product: ProductToOrderType) {
  let value = product.price * product.qt;

  if (product.additionalSelected !== undefined) {
    for (let i = 0; i < product.additionalSelected.length; i++) {
      value += product.additionalSelected[i].price * product.qt;
    }
  }

  if (product.requiredSelected !== undefined) {
    value += product.requiredSelected.price * product.qt;
  }

  return value;
}

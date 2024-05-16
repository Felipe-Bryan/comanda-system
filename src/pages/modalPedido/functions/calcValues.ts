import { ProductToOrderType } from '../../../types/ProductToOrder';

export function calcValues(product: ProductToOrderType) {
  let value = product.price * product.qt;

  if (product.additionalSelected !== undefined) {
    for (let i = 0; i < product.additionalSelected.length; i++) {
      value += product.additionalSelected[i].price * product.qt;
    }
  }

  if (product.requiredSelected !== undefined) {
    for (let i = 0; i < product.requiredSelected.length; i++) {
      for (let i2 = 0; i2 < product.requiredSelected[i].items.length; i2++) {
        value += product.requiredSelected[i].items[i2].price * product.qt;
      }
    }
  }

  return value;
}

import { OrderType } from '../../../types/OrderType';
import { ProductToOrderType } from '../../../types/ProductToOrder';
import { getStorageData } from '../../../utils/getStorageData';
import { getUrlValue } from '../../../utils/getUrlValue';
import { saveToStorage } from '../../../utils/saveToStorage';

export function saveOrder() {
  const orderFound: ProductToOrderType = getStorageData('newOrderProduct');

  if (orderFound.requiredOption.length > 0) {
    if (!orderFound.requiredSelected) {
      document.querySelectorAll('.required')!.forEach((input) => {
        input.classList.add('is-invalid');
      });

      return;
    }
  }

  let newOrderedProduct: ProductToOrderType = { ...orderFound, status: 'Recebido' };

  const comment = <HTMLInputElement>document.getElementById('comment')!;

  if (comment.value) {
    newOrderedProduct.comment = comment.value;
  }

  let myOrders: OrderType[] = getStorageData('myOrders');

  if (myOrders.length == 0) {
    let newOrder: OrderType[] = [
      {
        id: `order${myOrders.length}`,
        table: getUrlValue('t'),
        ordered: [newOrderedProduct],
      },
    ];

    saveToStorage('myOrders', newOrder);
  } else {
    myOrders[0].ordered.push(newOrderedProduct);

    saveToStorage('myOrders', myOrders);
  }
}

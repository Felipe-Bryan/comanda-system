import { ProductToOrderType } from '../../../types/ProductToOrder';
import { getStorageData } from '../../../utils/getStorageData';
import { saveToStorage } from '../../../utils/saveToStorage';
import { calcValues } from './calcValues';

export function removeOrderQt() {
  const orderFound: ProductToOrderType = getStorageData('newOrderProduct');
  const input = <HTMLInputElement>document.getElementById('orderQt')!;
  const orderValue = document.getElementById('orderValue')!;

  if (orderFound.qt <= 1) {
    orderFound.qt = 1;
  } else {
    orderFound.qt--;
  }

  input.value = String(orderFound.qt);

  orderValue.innerText = calcValues(orderFound).toFixed(2);

  orderFound.orderValue = calcValues(orderFound);

  saveToStorage('newOrderProduct', orderFound);
}

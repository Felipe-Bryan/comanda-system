import { getStorageData } from '../../../utils/getStorageData';
import { saveToStorage } from '../../../utils/saveToStorage';
import { calcValues } from './calcValues';

export function addOrderQt() {
  const orderFound = getStorageData('newOrderProduct');
  const input = <HTMLInputElement>document.getElementById('orderQt')!;
  const orderValue = document.getElementById('orderValue')!;

  orderFound.qt++;
  input.value = orderFound.qt;

  orderValue.innerText = calcValues(orderFound).toFixed(2);

  orderFound.orderValue = calcValues(orderFound);

  saveToStorage('newOrderProduct', orderFound);
}

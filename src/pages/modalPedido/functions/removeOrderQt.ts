import { getStorageData } from '../../../utils/getStorageData';
import { saveToStorage } from '../../../utils/saveToStorage';
import { calcValues } from './calcValues';

export function removeOrderQt() {
  const orderFound = getStorageData('newOrderProduct');
  const input = <HTMLInputElement>document.getElementById('orderQt')!;
  const orderValue = document.getElementById('orderValue')!;

  orderFound.qt--;
  input.value = orderFound.qt;

  orderValue.innerText = calcValues(orderFound).toFixed(2);

  saveToStorage('newOrderProduct', orderFound);
}

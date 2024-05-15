import { AdditionalItemType } from '../../../types/AdditionalItem';
import { ProductToOrderType } from '../../../types/ProductToOrder';
import { getStorageData } from '../../../utils/getStorageData';
import { saveToStorage } from '../../../utils/saveToStorage';
import { calcValues } from './calcValues';

export function watchCheckboxes() {
  const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('.additional');
  const orderValue = document.getElementById('orderValue')!;

  const orderFound: ProductToOrderType = getStorageData('newOrderProduct');
  let modifiedOrder: ProductToOrderType = {
    ...orderFound,
    additionalSelected: [],
  };
  saveToStorage('newOrderProduct', modifiedOrder);

  inputs.forEach((input) => {
    input.addEventListener('change', () => {
      modifiedOrder = getStorageData('newOrderProduct');

      const additionalItem: AdditionalItemType = {
        id: input.id,
        name: input.title,
        price: Number(input.value),
      };
      if (input.checked) {
        modifiedOrder.additionalSelected?.push(additionalItem);

        orderValue.innerText = calcValues(modifiedOrder).toFixed(2);
        modifiedOrder.orderValue = calcValues(modifiedOrder);

        saveToStorage('newOrderProduct', modifiedOrder);
      } else {
        const indexOfAdd = modifiedOrder.additionalSelected?.findIndex((item) => {
          return item.id === additionalItem.id;
        });

        if (indexOfAdd !== undefined) {
          if (modifiedOrder.additionalSelected) {
            if (modifiedOrder.additionalSelected.length > 1) {
              modifiedOrder.additionalSelected?.splice(indexOfAdd, 1);
            } else {
              modifiedOrder.additionalSelected = [];
            }
          }
        }

        orderValue.innerText = calcValues(modifiedOrder).toFixed(2);
        modifiedOrder.orderValue = calcValues(modifiedOrder);

        saveToStorage('newOrderProduct', modifiedOrder);
      }
    });
  });
}

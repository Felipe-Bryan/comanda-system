import { ProductToOrderType } from '../../../types/ProductToOrder';
import { getStorageData } from '../../../utils/getStorageData';
import { saveToStorage } from '../../../utils/saveToStorage';
import { calcValues } from './calcValues';

export function watchRadios() {
  const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('.required')!;
  const orderValue = document.getElementById('orderValue')!;

  inputs.forEach((input) => {
    input.addEventListener('change', () => {
      const orderFound = getStorageData('newOrderProduct');

      let modifiedOrder: ProductToOrderType;

      if (input.checked) {
        document.querySelectorAll('.required')!.forEach((input) => {
          input.classList.remove('is-invalid');
        });

        modifiedOrder = {
          ...orderFound,
          requiredSelected: {
            id: `req-${orderFound.id}`,
            name: input.title,
            price: Number(input.value),
          },
        };

        orderValue.innerText = calcValues(modifiedOrder).toFixed(2);
        modifiedOrder.orderValue = calcValues(modifiedOrder);

        saveToStorage('newOrderProduct', modifiedOrder);
      }
    });
  });
}

import { ProductToOrderType } from '../../../types/ProductToOrder';
import { RequiredOptionToProductType } from '../../../types/RequiredOption';
import { getStorageData } from '../../../utils/getStorageData';
import { saveToStorage } from '../../../utils/saveToStorage';
import { calcValues } from './calcValues';

export function watchRadios() {
  const orderFound: ProductToOrderType = getStorageData('newOrderProduct');

  const orderValue = document.getElementById('orderValue')!;

  let modifiedOrder: ProductToOrderType = { ...orderFound, requiredSelected: [] };

  for (let i = 0; i < orderFound.requiredOption.length; i++) {
    modifiedOrder.requiredSelected?.push({
      id: '',
      title: '',
      items: [
        {
          id: '',
          name: '',
          price: 0,
        },
      ],
    });
  }

  saveToStorage('newOrderProduct', modifiedOrder);

  for (let i = 0; i < orderFound.requiredOption.length; i++) {
    const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(`.required${i}`)!;

    inputs.forEach((input) => {
      input.addEventListener('change', () => {
        let updateOrderFound: ProductToOrderType = getStorageData('newOrderProduct');

        if (input.checked) {
          document.querySelectorAll(`.required${i}`)!.forEach((input) => {
            input.classList.remove('is-invalid');
          });

          const newRequiredItem: RequiredOptionToProductType = {
            id: `selected-${input.id}`,
            title: `required-${input.id}`,
            items: [
              {
                id: input.id,
                name: input.title,
                price: Number(input.value),
              },
            ],
          };

          if (updateOrderFound.requiredSelected) {
            updateOrderFound.requiredSelected[i] = newRequiredItem;
          }

          orderValue.innerText = calcValues(updateOrderFound).toFixed(2);
          updateOrderFound.orderValue = calcValues(updateOrderFound);

          saveToStorage('newOrderProduct', updateOrderFound);
        }
      });
    });
  }
}

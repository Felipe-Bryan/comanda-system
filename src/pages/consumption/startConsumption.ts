import { tableOrderItem } from '../../components/tableOrderItem';
import { OrderType } from '../../types/OrderType';
import { componentVisibility } from '../../utils/componentVisibility';
import { getStorageData } from '../../utils/getStorageData';

export function startConsumption() {
  componentVisibility('categoryNav', 'hide');
  componentVisibility('productsMenu', 'hide');
  componentVisibility('help', 'hide');
  componentVisibility('tableConsumption', 'show');

  const myOrders: OrderType[] = getStorageData('myOrders');
  document.getElementById('tableContent')!.innerHTML = '';

  if (myOrders) {
    let totalValue = 0;

    const totalValueSpot = document.getElementById('totalValue')!;

    myOrders[0].ordered.forEach((order) => {
      tableOrderItem(order);

      totalValue += order.orderValue;
    });

    totalValueSpot.innerHTML = `R$ ${totalValue.toFixed(2)}`;
  }

  window.scrollTo(0, 0);
}

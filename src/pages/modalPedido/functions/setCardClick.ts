import { additionalItem } from '../../../components/additionalItem';
import { buttonQt } from '../../../components/btnQt';
import { modalFooter } from '../../../components/modalFooter';
import { requiredItem } from '../../../components/requiredItem';
import { storeInfo } from '../../../database/storeInfo';
import { ProductToOrderType } from '../../../types/ProductToOrder';
import { componentVisibility } from '../../../utils/componentVisibility';
import { saveToStorage } from '../../../utils/saveToStorage';
import { addOrderQt } from './addOrderQt';
import { removeOrderQt } from './removeOrderQt';
import { saveOrder } from './saveOrder';
import { watchCheckboxes } from './watchCheckboxes';
import { watchRadios } from './watchRadios';

export function setCardClick(productId: string) {
  const commentIpt = <HTMLInputElement>document.getElementById('comment')!;
  commentIpt.value = '';
  // Pega o produto no banco de dados
  const productFound = storeInfo.products.find((product) => {
    return product.id === productId;
  })!;

  const newOrderProduct: ProductToOrderType = { ...productFound, qt: 1, orderValue: productFound.price };
  saveToStorage('newOrderProduct', newOrderProduct);

  // Define nome do Modal com nome do produto
  document.getElementById('cartModalLabel')!.innerText = productFound.name;

  // Localiza o elemento HTML onde ficarão os itens de seleção obrigatória
  const requiredOptionsSpot = document.getElementById('requiredOptions')!;
  // reseta o código existente caso exista
  requiredOptionsSpot.innerHTML = '';

  // verifica se o produto tem itens de seleção obrigatoria
  if (productFound.requiredOption) {
    if (productFound.requiredOption.length > 0) {
      componentVisibility('requiredOptions', 'show');

      for (let i = 0; i < productFound.requiredOption.length; i++) {
        requiredOptionsSpot.innerHTML += requiredItem(productFound.requiredOption[i], i);
      }
    } else {
      componentVisibility('requiredOptions', 'hide');
    }
  }

  const additionalItemsSpot = document.getElementById('additionalItems')!;
  additionalItemsSpot.innerHTML = '';

  // verifica se o produto tem itens de seleção opcional
  if (productFound.additionals.length > 0) {
    // caso tenha habilita visualização do campo onde serão exibidos os itens
    componentVisibility('additionalOptions', 'show');

    //define o componente para cada item encontrado
    for (let i = 0; i < productFound.additionals.length; i++) {
      additionalItemsSpot.innerHTML += additionalItem(productFound.additionals[i], i);
    }
  } else {
    // esconde o campo caso não haja itens de seleção opcional
    componentVisibility('additionalOptions', 'hide');
  }

  watchRadios();
  watchCheckboxes();

  document.getElementById('orderValue')!.innerText = productFound.price.toFixed(2);

  document.getElementById('btnQt')!.innerHTML = buttonQt();

  document.getElementById('btnAdd')!.addEventListener('click', () => {
    addOrderQt();
  });

  document.getElementById('btnRemove')!.addEventListener('click', () => {
    removeOrderQt();
  });

  document.getElementById('modalFooter')!.innerHTML = modalFooter('Voltar', 'Enviar Pedido');

  document.getElementById('addOrder')!.addEventListener('click', () => {
    saveOrder();
  });
}

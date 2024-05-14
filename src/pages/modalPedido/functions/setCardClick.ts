import { additionalItem } from '../../../components/additionalItem';
import { buttonQt } from '../../../components/btnQt';
import { modalFooter } from '../../../components/modalFooter';
import { requiredItem } from '../../../components/requiredItem';
import { productsDB } from '../../../database/products';
import { ProductToOrderType } from '../../../types/ProductToOrder';
import { componentVisibility } from '../../../utils/componentVisibility';
import { saveToStorage } from '../../../utils/saveToStorage';
import { addOrderQt } from './addOrderQt';
import { removeOrderQt } from './removeOrderQt';
import { saveOrder } from './saveOrder';
import { watchCheckboxes } from './watchCheckboxes';
import { watchRadios } from './watchRadios';

export function setCardClick(productId: string) {
  // Pega o produto no banco de dados
  const productFound = productsDB.find((product) => {
    return product.id === productId;
  })!;

  const newOrderProduct: ProductToOrderType = { ...productFound, qt: 1, orderValue: productFound.price };
  saveToStorage('newOrderProduct', newOrderProduct);

  // Define nome do Modal com nome do produto
  document.getElementById('cartModalLabel')!.innerText = productFound.name;

  // Localiza o elemento HTML onde ficarão os itens de seleção obrigatória
  const requiredItemsSpot = document.getElementById('requiredItems')!;
  // reseta o código existente caso exista
  requiredItemsSpot.innerHTML = '';

  // verifica se o produto tem itens de seleção obrigatoria
  if (productFound.requiredOption.length > 0) {
    // caso tenha habilita visualização do campo onde serão exibidos os itens
    componentVisibility('requiredOptions', 'show');
    // define o componente para cada item encontrado
    for (let i = 0; i < productFound.requiredOption.length; i++) {
      requiredItemsSpot.innerHTML += requiredItem(productFound.requiredOption[i], i);
    }
  } else {
    // esconde o campo caso não haja itens de seleção obrigatoria
    componentVisibility('requiredOptions', 'hide');
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

  document.getElementById('orderValue')!.innerText = productFound.price.toFixed(2);
  watchRadios();
  watchCheckboxes();

  document.getElementById('btnQt')!.innerHTML = buttonQt();

  document.getElementById('btnAdd')!.addEventListener('click', () => {
    addOrderQt();
  });

  document.getElementById('btnRemove')!.addEventListener('click', () => {
    removeOrderQt();
  });

  document.getElementById('modalFooter')!.innerHTML = modalFooter();

  document.getElementById('addOrder')!.addEventListener('click', () => {
    saveOrder();
  });
}

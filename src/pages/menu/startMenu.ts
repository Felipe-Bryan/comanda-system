import { componentVisibility } from '../../utils/componentVisibility';
import { filterProducts } from './functions/filterProducts';
import { setCategories } from './functions/setCategories';
import { setProductsMenu } from './functions/setProductsMenu';

export function startMenu() {
  componentVisibility('categoryNav', 'show');
  componentVisibility('productsMenu', 'show');
  componentVisibility('tableConsumption', 'hide');
  componentVisibility('btnHelp', 'show');
  setCategories();
  filterProducts();
  setProductsMenu();

  document.getElementById('all-btn')!.addEventListener('click', () => {
    setProductsMenu();
  });
}

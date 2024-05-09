import { componentVisibility } from '../../functions/componentVisibility';
import { filterProducts } from '../../functions/filterProducts';
import { setCategories } from '../../functions/setCategories';
import { setProductsMenu } from '../../functions/setProductsMenu';

export function startMenu() {
  componentVisibility('tableConsumption', 'hide');
  componentVisibility('productsMenu', 'show');
  componentVisibility('categoryNav', 'show');
  setCategories();
  setProductsMenu();

  filterProducts();

  document.getElementById('all-btn')!.addEventListener('click', () => {
    setProductsMenu();
  });
}

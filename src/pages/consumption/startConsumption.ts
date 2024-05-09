import { componentVisibility } from '../../functions/componentVisibility';

export function startConsumption() {
  componentVisibility('tableConsumption', 'show');
  componentVisibility('productsMenu', 'hide');
  componentVisibility('categoryNav', 'hide');
}

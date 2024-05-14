import { componentVisibility } from '../../utils/componentVisibility';

export function startConsumption() {
  componentVisibility('categoryNav', 'hide');
  componentVisibility('productsMenu', 'hide');
  componentVisibility('tableConsumption', 'show');
}

import { componentVisibility } from '../../functions/componentVisibility';

export function startConsumption(): void {
  componentVisibility('tableConsumption', 'show');
  componentVisibility('productsMenu', 'hide');
  componentVisibility('categoryNav', 'hide');
}

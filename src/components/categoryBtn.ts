import { CategoryType } from '../types/CategoryType';

export function categoryBtn(category: CategoryType): string {
  return `
<button 
  type="button" 
  class="categoryBtn btn btn-outline-secondary ms-2 fst-italic border border-0 glass" 
  id="${category.id}-btn">${category.name}
</button>`;
}

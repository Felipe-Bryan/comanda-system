import { CategoryType } from '../types/CategoryType';

export function categoryBtn(category: CategoryType): string {
  if (category.active) {
    return `<button type="button" class="categoryBtn btn btn-outline-secondary ms-2" id="${category.id}-btn">${category.name}</button>`;
  } else {
    return '';
  }
}

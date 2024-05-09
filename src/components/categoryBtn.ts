import { CategoryType } from '../types/CategoryType';

export function categoryBtn(category: CategoryType) {
  return `<button type="button" class="btn btn-outline-secondary ms-2 id="${category.id}-btn">${category.name}</button>`;
}

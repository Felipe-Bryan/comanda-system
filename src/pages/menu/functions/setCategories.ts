import { categoryBtn } from '../../../components/categoryBtn';
import { storeInfo } from '../../../database/storeInfo';

export function setCategories(): void {
  const categoryBar = document.getElementById('categoryBar')!;
  const categories = storeInfo.categories;

  categoryBar.innerHTML = '';

  categoryBar.innerHTML = categoryBtn({
    id: 'all',
    name: 'Todos',
    active: true,
  });

  categories.forEach((category) => {
    if (category.active) {
      categoryBar.innerHTML += categoryBtn(category);
    }
  });

  categoryBar.innerHTML += `<hr />`;
}

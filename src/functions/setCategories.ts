import { categoryBtn } from '../components/categoryBtn';
import { categoriesDB } from '../database/categories';

export function setCategories() {
  const categoryBar = document.getElementById('categoryBar')!;
  const categories = categoriesDB;

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
}

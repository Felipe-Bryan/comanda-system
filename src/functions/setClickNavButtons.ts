import { setNavBtnActive } from './setNavBtnActive';

export function setClickNavButtons() {
  document.getElementById('btnViewMenu')!.addEventListener('click', () => {
    setNavBtnActive('btnViewMenu', true);
    setNavBtnActive('btnViewConsumption', false);
  });

  document.getElementById('btnViewConsumption')!.addEventListener('click', () => {
    setNavBtnActive('btnViewConsumption', true);
    setNavBtnActive('btnViewMenu', false);
  });
}

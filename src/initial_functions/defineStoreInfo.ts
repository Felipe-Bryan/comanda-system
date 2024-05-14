import { storeLogo } from '../components/storeLogo';
import { StoreType } from '../types/StoreType';

export function defineStoreInfo(storeInfo: StoreType) {
  document.getElementById('storeName')!.innerText = storeInfo.name;

  const logo = document.getElementById('placeLogo')!;
  const favicon = document.getElementById('favicon')!;

  if (storeInfo.logoUrl) {
    logo.innerHTML = storeLogo(storeInfo.logoUrl);
    favicon.setAttribute('href', storeInfo.logoUrl);
  } else {
    logo.innerHTML = storeLogo('./dist/assets/images/logo.png');
    favicon.setAttribute('href', './dist/assets/images/logo.png');
  }
}

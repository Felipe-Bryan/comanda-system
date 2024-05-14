import { storeInfo } from './database/storeInfo';
import { defineStoreInfo } from './initial_functions/defineStoreInfo';
import { setClickNavButtons } from './initial_functions/setClickNavButtons';
import { startMenu } from './pages/menu/startMenu';

// definir informações da loja
const store = storeInfo;
defineStoreInfo(store);

localStorage.clear();

setClickNavButtons();

startMenu();

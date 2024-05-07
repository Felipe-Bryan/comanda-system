// http://www.exemplo.com/?variavel1=valor1&variavel2=valor2

import { descrypt } from '../service/crypto';

export function getUrlValue(key: string): string {
  const urlParams = new URLSearchParams(window.location.search);

  const criptedValue = urlParams.get(key) || '';

  const uncriptedValue = descrypt(criptedValue);

  return uncriptedValue;
}

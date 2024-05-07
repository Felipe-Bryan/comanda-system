export function encrypt(text: string) {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i);
    result += String.fromCharCode(charCode + 1);
  }
  return result;
}

export function descrypt(text: string) {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i);
    result += String.fromCharCode(charCode - 1);
  }
  return result;
}

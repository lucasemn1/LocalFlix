export function toUppercaseFirstLetter(str = '') {
  const firstLetter = str.charAt(0).toUpperCase();
  return `${firstLetter}${str.substr(1, str.length - 1)}`
}
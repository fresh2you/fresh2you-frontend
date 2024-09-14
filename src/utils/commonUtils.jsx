export function formatCurrency(value) {
  return value.toLocaleString('ko-KR');
}
export function formatPriceInput(value) {
  if (!value) return '';
  const number = Number(value.replace(/,/g, ''));
  return formatCurrency(number);
}

export function formatAsMoney(value: number) {
  return value.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}

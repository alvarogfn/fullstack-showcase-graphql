export async function URLBuilder(value: string) {
  const data = await fetch(value);
  const blob = await data.blob();

  const url = URL.createObjectURL(blob);

  return { url, revoke: () => URL.revokeObjectURL(url) };
}

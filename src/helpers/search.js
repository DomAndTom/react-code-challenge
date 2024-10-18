export function searchRamone(search, list) {
  if (!search) return list;

  return list.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
}

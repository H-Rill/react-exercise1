export function generateId(collection = []) {
  const lastId = collection.length > 0 ? Math.max(...collection.map(item => item.id)) : 0;
  return lastId +1
}

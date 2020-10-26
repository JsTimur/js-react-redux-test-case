export default function sortArrayOfObjectsByFieldAndType (array, field, type) {
  const sortedArray = [...array]
  switch (type) {
    case 'number':
      sortedArray.sort((a, b) => b[field] - a[field])
      break
    case 'string':
      sortedArray.sort((a, b) => a[field].localeCompare(b[field]))
      break
    default:
      sortedArray.sort()
  }
  return sortedArray
}

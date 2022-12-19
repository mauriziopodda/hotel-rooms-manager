export default function genericSearch<T>(
  object: T,
  filters?: Partial<T>
): boolean {
  if (filters) {
    return Object.keys(filters).some((filter) => {
      const objectValue = object[filter as keyof T]
      const filterValue = filters[filter as keyof T]

      if (
        filterValue &&
        (typeof objectValue === 'string' || typeof objectValue === 'number') &&
        (typeof filterValue === 'string' || typeof filterValue === 'number')
      ) {
        return objectValue.toString().includes(filterValue.toString())
      }

      return true
    })
  }

  return true
}

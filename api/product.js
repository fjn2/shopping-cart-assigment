import db from './_db.json'

export const getById = async (id) => {
  const product = db.items.find(product => `${product.id}` === `${id}`)

  if (!product) {
    return Promise.reject(`Product ${id} not found`)
  }

  return product
}

export const getAll = async ({ name }, { offset, count } = {}) => {
  const filteredItems = name ? db.items.filter((item) => (item.name.toUpperCase().indexOf(name.toUpperCase()) > -1)) : db.items
  return {
    data: filteredItems.slice(offset || 0, (offset + count) || db.items.length),
    meta: {
      total: filteredItems.length,
      count,
      offset
    }
  }
}
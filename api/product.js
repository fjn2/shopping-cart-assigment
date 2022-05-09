import db from './_db.json'

export const getById = async (id) => {
  const product = db.items.find(product => `${product.id}` === `${id}`)

  if (!product) {
    return Promise.reject(`Product ${id} not found`)
  }

  return product
}

export const getAll = async ({ offset, count } = {}) => {
  return {
    data: db.items.slice(offset || 0, (offset + count) || db.items.length),
    meta: {
      total: db.items.length,
      count,
      offset
    }
  }
}
import db from './_db.json'

export const getById = async (id) => {
  const product = db.items.find(product => `${product.id}` === `${id}`)

  if (!product) {
    return Promise.reject(`Product ${id} not found`)
  }

  return product
}

export const getAll = async () => {
  return db.items
}
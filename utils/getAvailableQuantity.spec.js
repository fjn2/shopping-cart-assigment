import getAvailableQuantity from "./getAvailableQuantity"

describe('getAvailableQuantity', () => {
  const dataSet = [{
    id: 1,
    options: [{
      color: ['red'],
      size: [400, 500],
      quantity: 5
    }],
    selectedValues: {
      color: 'red',
      size: 500
    },
    output: 5
  }, {
    id: 2,
    options: [{
      color: ['red'],
      size: [400, 500],
      quantity: 5
    }],
    selectedValues: {
      color: 'blue',
      size: 500
    },
    output: 0
  }, {
    id: 3,
    options: [],
    selectedValues: {
      color: 'blue',
      size: 500
    },
    output: 0
  }, {
    id: 4,
    options: [{
      color: ['red'],
      size: [400, 500],
      quantity: 5
    }],
    selectedValues: {},
    output: 5
  }]
  it.each(dataSet)(
    'Should return the correct quantity ($id)',
    ({ options, selectedValues, output }) => {
      // when
      const quantity = getAvailableQuantity(options, selectedValues)
      
      // then
      expect(quantity).toBe(output)
    }
  )
})
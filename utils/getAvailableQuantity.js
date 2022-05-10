const getAvailableQuantity = (options = [], selectedValues = {}) => {

  const availableQuantity = options.filter((option) => {
    return Object.keys(selectedValues).reduce((acc, selectedValueKey) => {
      return acc && !!option[selectedValueKey].find((optionItem) => (selectedValues[selectedValueKey] === optionItem))
    }, true)
  }).reduce((acc, option) => acc + option.quantity, 0)
  return availableQuantity
}

export default getAvailableQuantity

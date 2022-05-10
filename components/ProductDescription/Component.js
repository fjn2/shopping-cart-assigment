import Button from "react-bootstrap/Button"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import Alert from "react-bootstrap/Alert"
import FilterSelector from "../FilterSelector"
import { useState } from "react"
import getAvailableQuantity from "../../utils/getAvailableQuantity"

const OPTION_TYPES = {
  NUMBER: 'number',
  COLOR: 'color',
  OPTIONS: 'options'
}

const CUSTOM_PROPERTIES = {
  COLOR: 'color',
  POWER: 'power',
  STORAGE: 'storage'
}

/**
 * Search in all values for each option in this product
 * @returns a map with all the values for each custom option
 */
const getFilterOptions = (itemOptions) => {
  const output = {}
  
  itemOptions.forEach((option, acc) => {
    Object.keys(option).forEach(optKey => {
      if (optKey === 'quantity') {
        return
      }
      output[optKey] = output[optKey] || []
      option[optKey].forEach((optionValue) => {
        if (!output[optKey].includes(optionValue)) {
          output[optKey].push(optionValue)
        }
      })
      
    })
  })

  return output
}

const getInitialSelectedItemOptions = (options) => {
  return Object.keys(options).reduce((acc, optionKey) => ({
    ...acc,
    [optionKey]: options[optionKey][0]
  }), {})
}

const ProductDescriptionComponent = (props) => {
  const { id, name, brand, price, available, weight, options, onItemAdd } = props
  
  const [quantity, setQuantity] = useState(1)

  const productOptions = getFilterOptions(options)
  const [itemOptions, setItemOptions] = useState(getInitialSelectedItemOptions(productOptions))

  const onOptionChange = (optionKey) => (optionValue) => {
    setItemOptions({
      ...itemOptions,
      [optionKey]: optionValue
    })
  }

  const availableQuantity = getAvailableQuantity(options, itemOptions)

  const isItemAvailableWithStock = availableQuantity && available

  return (
    <div id={id}>
      <h1>{isItemAvailableWithStock ? '' : '[X] '}{name}</h1>
      <h3>{brand}</h3>
      {!isItemAvailableWithStock && (
        <Alert variant="warning">
          There is no stock for this product
        </Alert>
      )}
      <div>
        <div>
          <span>Weight</span>
          <span>{` ${weight} kg`}</span>
        </div>
      </div>
      <hr />
      <h5>
        {price} sek
      </h5>
      <hr />
      <div>
        {
          Object.keys(productOptions).map((optionKey) => (
            <div key={optionKey} style={{ width: '300px' }}>
              <span style={{ textTransform: 'capitalize' }}>{optionKey}</span>
              <FilterSelector options={productOptions[optionKey]} onChange={onOptionChange(optionKey)} value={itemOptions[optionKey]} />
            </div>
          ))
        }
        <div style={{ width: '300px' }}>
          <span>Quantity ({`Avaiable: ${availableQuantity}`})</span>
          <InputGroup style={{ width: '70px' }}>
            <FormControl type="number" aria-label="Quantity" min={1} max={availableQuantity} value={quantity} onChange={e => setQuantity(e.target.value)} />
          </InputGroup>
        </div>
      </div>
      <hr />
      <div>
        <Button
          onClick={() => onItemAdd({
            id,
            name,
            price,
            brand,
            quantity,
            itemOptions
          })}
          disabled={!isItemAvailableWithStock}
        >
          Add to cart
        </Button>
      </div>
    </div>
  )
}

export default ProductDescriptionComponent

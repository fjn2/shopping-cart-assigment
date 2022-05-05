import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

const FilterSelector = ({ options }) => {
  return (
    <ButtonGroup style={{
      display: 'flex'
    }}>
      {
        options.map((option) => {
          return (
            <Button style={{ textTransform: 'capitalize' }} key={option} variant="secondary">
              {option}
            </Button>
          )
        })
      }
    </ButtonGroup>
  )
}

export default FilterSelector

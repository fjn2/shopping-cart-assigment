import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

const FilterSelector = ({ options, value, onChange }) => {
  return (
    <ButtonGroup style={{
      display: 'flex'
    }}>
      {
        options.map((option) => {
          return (
            <Button style={{ textTransform: 'capitalize' }} key={option} variant={value === option ? 'primary' : 'secondary'} onClick={() => onChange(option)}>
              {option}
            </Button>
          )
        })
      }
    </ButtonGroup>
  )
}

export default FilterSelector

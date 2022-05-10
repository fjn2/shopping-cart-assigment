import { shallow } from 'enzyme';
import ProductCard from './';

describe('ProductCard', () => {
  it('Should render correctly', () => {
    const props = {
      id: 10,
      name: 'Test product',
      brand: 'Test brand name',
      price: 124,
      available: true
    }

    const elem = shallow(<ProductCard {...props} />)
    
    expect(elem).toMatchSnapshot()
  })
  it('Should render an unavailable product', () => {
    const props = {
      id: 10,
      name: 'Test product',
      brand: 'Test brand name',
      price: 124,
      available: false
    }

    const elem = shallow(<ProductCard {...props} />)
    
    expect(elem).toMatchSnapshot()
  })
})
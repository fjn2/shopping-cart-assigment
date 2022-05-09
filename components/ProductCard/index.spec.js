import { shallow } from 'enzyme';
import ProductCard from './';

describe('ProductCard', () => {
  it('Should render correctly', () => {
    const props = {
      id: 10,
      name: 'Test product',
      brand: 'Test brand name',
      price: 124
    }

    const elem = shallow(<ProductCard {...props} />)
    
    expect(elem).toMatchSnapshot()
  })
})
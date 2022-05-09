import { shallow } from 'enzyme';
import ProductImage from './';

describe('ProductImage', () => {
  it('Should render correctly', () => {
    const component = shallow(<ProductImage />)
    
    expect(component).toMatchSnapshot()
  })
})
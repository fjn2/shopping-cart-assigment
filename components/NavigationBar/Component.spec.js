import { shallow } from 'enzyme';
import NavigationBarComponent from './Component';

describe('NavigationBarComponent', () => {
  it('Should render correctly', () => {
    const component = shallow(<NavigationBarComponent />)
    
    expect(component).toMatchSnapshot()
  })
})
import { shallow } from 'enzyme';
import CartListItems from './Component';

describe('CartListItems', () => {
  it('Should render correctly', () => {
    const props = {
      cart: {
        itemId1: {
          id: 10,
          name: 'Test product',
          brand: 'Test brand name',
          price: 124,
          itemOptions: {
            color: 'red'
          }
        }
      },
      products:[],
      onItemRemove: jest.fn()
    }

    const elem = shallow(<CartListItems {...props} />)
    
    expect(elem).toMatchSnapshot()
  })
  it('Should call `onItemRemove` when the Remove button is clicked', () => {
    const props = {
      cart: {
        itemId1: {
          id: 10,
          name: 'Test product',
          brand: 'Test brand name',
          price: 124,
          itemOptions: {
            color: 'red'
          }
        }
      },
      products: [],
      onItemRemove: jest.fn()
    }

    const elem = shallow(<CartListItems {...props} />)
    
    elem.find('Button').simulate('click')

    expect(props.onItemRemove).toHaveBeenCalledWith('itemId1')
  })
})
import { combineReducers } from 'redux'

import products from './products';
import catalogue from './catalogue';
import sort from './sort';
import cart from './cart';

const rootReducer = combineReducers({
    products: products,
    catalogue: catalogue,
    sort: sort,
    cart: cart,
})

export default rootReducer;
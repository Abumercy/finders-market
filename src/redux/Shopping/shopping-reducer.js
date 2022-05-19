import * as actionTypes from './shopping-types'
import products from '../../data/products.json'
const INITIAL_STATE = {
    products, //(id, name, price, size, img, description )
    cart: [], //(id, name, price, size, img, description, qty )
    currentItem: null,
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            // get items data from the products
            const item = state.products.find((prod) => prod.id === action.payload.id)
            // check if the item is already in the cart
            const inCart = state.cart.find((item) => item.id === action.payload.id ? true : false)
            return {
                ...state,
                cart: inCart ?
                state.cart.map((item) => item.id === action.payload.id ?
                    {...item, qty: item + 1} : item)
                : [...state.cart, {...item, qty: 1}],
            }
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id)
            }
        case actionTypes.ADJUST_QTY:
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id
                    ? {...item, qty: +action.payload.qty}
                    : item)
            }
        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload,
            }
        default:
            return state
    }
}

export default shopReducer
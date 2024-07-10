const initialState = {
  cartLength: 0,
  cart : [],
};

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';
const ADD_TO_CART = "ADD_TO_CART";


export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const reset = () => ({ type: RESET });

export const addToCartFunction = (item)=> ({type: ADD_TO_CART,payload:item})

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, cartLength: state.cartLength + 1 };
    case DECREMENT:
      return { ...state, cartLength: state.cartLength >=0 ?  state.cartLength-1 : state.cartLength };
    case RESET:
      return { ...state, cartLength: 0 };
    case ADD_TO_CART:
      return { ...state,cart : [action.payload,...state.cart]}
    default:
      return state;
  }
};

export default rootReducer;

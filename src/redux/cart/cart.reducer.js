import ActionTypes from '../action-types';

const INITIAL_STATE = {
  hidden: true,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.cart.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;

import ActionTypes from '../action-types';

export const toggleCartHidden = (toggle) => ({
  type: ActionTypes.cart.TOGGLE_CART_HIDDEN,
  payload: toggle,
});

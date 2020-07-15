import ActionTypes from '../action-types';

export const toggleCartHidden = (toggle) => ({
  type: ActionTypes.cart.TOGGLE_CART_HIDDEN,
  payload: toggle,
});

export const addItem = (item) => ({
  type: ActionTypes.cart.ADD_ITEM,
  payload: item,
});

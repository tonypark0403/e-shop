import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../../redux/cart/cart.actions';
import './cart-icon.scss';

const CartIcon = () => {
  const dispatch = useDispatch();
  const { hidden } = useSelector((state) => state.cart);

  return (
    <div
      className='cart-icon'
      onClick={() => dispatch(toggleCartHidden(!hidden))}
    >
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );
};

export default React.memo(CartIcon);

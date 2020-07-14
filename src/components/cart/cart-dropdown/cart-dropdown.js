import React from 'react';

import CustomButton from '../../custom-button';
import './cart-dropdown.scss';

const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items' />
    <CustomButton cart-button>CHECKOUT</CustomButton>
  </div>
);

export default CartDropdown;

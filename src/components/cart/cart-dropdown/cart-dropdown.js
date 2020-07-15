import React from 'react';

import CustomButton from '../../custom-button';
import './cart-dropdown.scss';

const CartDropdown = ({ isMobile }) => (
  <div className={`${isMobile ? 'mobile-position' : ''} cart-dropdown`}>
    <div className='cart-items' />
    <CustomButton cart-button='true'>CHECKOUT</CustomButton>
  </div>
);

export default CartDropdown;

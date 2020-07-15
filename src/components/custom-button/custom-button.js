import React from 'react';

import './custom-button.scss';

const CustomButton = ({
  children,
  isGoogleSignIn,
  cartButton,
  inverted,
  ...otherProps
}) => (
  <button
    className={`
      ${isGoogleSignIn ? 'google-sign-in' : ''} 
      ${cartButton ? 'cart-button' : ''} 
      ${inverted ? 'inverted' : ''} custom-button
    `}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;

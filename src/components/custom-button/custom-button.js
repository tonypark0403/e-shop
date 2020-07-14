import React from 'react';

import './custom-button.scss';

const CustomButton = ({
  children,
  isGoogleSignIn,
  cartButton,
  ...otherProps
}) => (
  <button
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} ${
      cartButton ? 'cart-button' : ''
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;

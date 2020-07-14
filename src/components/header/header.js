import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import './header.scss';

const Header = () => {
  const { currentUser } = useSelector((state) => state.user); // mapStateToProps
  console.log('currentUser:', currentUser);
  const [isClick, setClick] = useState(false);
  const [isMobile, setMobile] = useState(
    window.matchMedia('(max-width: 400px)').matches
  );

  useEffect(() => {
    const handler = (e) => setMobile(e.matches);
    window.matchMedia('(max-width: 400px)').addListener(handler);
  }, [isMobile]);
  // console.log(isMobile);
  return (
    <>
      <div className='header'>
        <Link to='/' className='logo-container'>
          <Logo className='logo' />
        </Link>
        {!isMobile ? (
          <div className='options'>
            <Link className='option' to='/shop'>
              SHOP
            </Link>
            <Link className='option' to='/contact'>
              CONTACT
            </Link>
            {currentUser ? (
              <div className='option' onClick={() => auth.signOut()}>
                SIGN OUT
              </div>
            ) : (
              <Link className='option' to='/signin'>
                SIGN IN
              </Link>
            )}
          </div>
        ) : (
          <div className='menu' onClick={() => setClick(!isClick)}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
            >
              <path d='M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z' />
            </svg>
          </div>
        )}
      </div>
      {isMobile && (
        <div className={`mobile ${isClick ? '' : 'none'}`}>
          <Link className='option' to='/shop'>
            SHOP
          </Link>
          <Link className='option' to='/contact'>
            CONTACT
          </Link>
          {currentUser ? (
            <div className='option' onClick={() => auth.signOut()}>
              SIGN OUT
            </div>
          ) : (
            <Link className='option' to='/signin'>
              SIGN IN
            </Link>
          )}
        </div>
      )}
    </>
  );
};

export default Header;

// when class component
// const mapStateToProps = state => ({
//   currentUser: state.user.currentUser
// });

// export default connect(
//   mapStateToProps,
//   null
// )(Header);

import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './menu-item.scss';

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
};

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  size: PropTypes.string,
  history: PropTypes.object,
  linkUrl: PropTypes.string.isRequired,
};

export default withRouter(MenuItem);

import React from 'react';
import PropTypes from 'prop-types';

import MenuItem from '../menu-item/MenuItem';
import './Directory.scss';
import { sections } from './data';

const Directory = () => {
  const sectionList = sections;
  return (
    <div className='directory-menu'>
      {sectionList.map(({ id, title, imageUrl, size }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </div>
  );
};

export default Directory;

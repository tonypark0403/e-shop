import React from 'react';

import MenuItem from '../menu-item/MenuItem';
import './Directory.scss';
import { sections } from './data';

const Directory = () => {
  const sectionList = sections;
  return (
    <div className='directory-menu'>
      {sectionList.map(({ id, ...rest }) => (
        <MenuItem key={id} {...rest} />
      ))}
    </div>
  );
};

export default Directory;

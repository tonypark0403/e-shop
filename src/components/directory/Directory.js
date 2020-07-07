import React from 'react';

import MenuItem from '../menu-item';
import './directory.scss';
import { sections } from './directory.data';

const Directory = () => {
  const sectionList = sections;
  return (
    <div className='directory-menu'>
      {sectionList.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
